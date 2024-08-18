import React, { useState } from "react";
import youtubeIcon from "../../assets/youtube.png";
import { FaTimes } from "react-icons/fa";
import "./PodcastCard.css";

const PodcastCard = ({
  image,
  title,
  description,
  projectId,
  setProjectEpisodesData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const newEpisode = {
      name,
      uploadDateTime: new Date().toISOString(),
      status: "Not Started",
      link,
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ episodes: [newEpisode] }),
        }
      );

      if (response.ok) {
        const updatedProject = await response.json();
        setProjectEpisodesData(updatedProject.episodes);
        closeModal();
      } else {
        console.log("Failed to upload episode:", await response.text());
      }
    } catch (error) {
      console.log("Error uploading episode:", error.message);
    }
  };

  return (
    <>
      <div className="podcast-card" onClick={openModal}>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div
          className={`${
            title === "Upload Files" ? "card-image-upload" : "card-image "
          }`}
        >
          <img src={image} alt="" />
        </div>
      </div>

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
              <form onSubmit={handleUpload}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  id="link"
                  name="link"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  required
                />

                <button type="submit" className="upload-btn">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PodcastCard;
