import FileRow from "./FileRow";
import "./FilesTable.css";

const FilesTable = ({ files, setOpenEditTranscript }) => {
  return (
    <div className="files-table-container">
      <h2>Your Files</h2>
      <table className="files-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <FileRow
              key={index}
              index={index + 1}
              name={file.name}
              dateTime={file.uploadDateTime}
              status={file.status}
              // onView={() => console.log(`Viewing ${file.name}`)}
              onView={() => setOpenEditTranscript(true)}
              onDelete={() => console.log(`Deleting ${file.name}`)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilesTable;
