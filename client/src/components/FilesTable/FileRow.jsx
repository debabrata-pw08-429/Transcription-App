import "./FileRow.css";
import { formatDate } from "../../Utility/formatDate";

const FileRow = ({ index, name, dateTime, status, onView, onDelete }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{formatDate(dateTime)}</td>
      <td>
        <span className={`status ${status.toLowerCase().replace(" ", "-")}`}>
          {status}
        </span>
      </td>
      <td>
        <button onClick={onView} className="view-btn">
          View
        </button>
        <button onClick={onDelete} className="delete-btn">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default FileRow;
