import React, { useState } from "react";
import "./FileUpload.css";
import youtubeIcon from "../../assets/youtube.png";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

const FileUpload = ({ projectId, allProjects, setProjectEpisodesData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [currentEpisodes] = useState(() => {
    let episodes = allProjects.filter((ele) => ele._id === projectId);
    return episodes;
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!name.trim() || !link.trim()) {
      setError("Both name and link are required");
      return;
    }

    const newEpisode = {
      name: name.trim(),
      uploadDateTime: new Date().toISOString(),
      status: "In Progress",
      link: link.trim(),
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            episodes: [...currentEpisodes, newEpisode],
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProjectEpisodesData(data.episodes);

        closeModal();
      } else {
        const errorMessage = await response.text();
        setError(`Failed to upload episode: ${errorMessage}`);
      }
    } catch (error) {
      setError(`Failed to upload episode: ${error.message}`);
    }
  };

  return (
    <div className="file-upload">
      <FaCloudUploadAlt className="upload-icon" />
      <p>
        Select a file or drag and drop here (Podcast Media or Transcription
        Text)
      </p>
      <small>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</small>
      <button className="select-file-btn" onClick={openModal}>
        Select File
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-youtube">
                <div>
                  <img
                    src={youtubeIcon}
                    alt="YouTube"
                    className="youtube-icon"
                  />
                </div>

                <h2>Upload from Youtube</h2>
              </div>
              <div>
                <FaTimes className="close-btn" onClick={closeModal} />
              </div>
            </div>
            <div className="modal-body">
              {error && <p className="error-message">{error}</p>}
              <form onSubmit={handleUpload}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />

                <button type="submit" className="upload-btn">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
