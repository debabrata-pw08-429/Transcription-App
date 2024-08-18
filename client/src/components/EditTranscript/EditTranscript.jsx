import React, { useState } from "react";
import "./EditTranscript.css";

const EditTranscript = () => {
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="edit-transcript">
      <div className="edit-transcript-header">
        <div>
          <button
            className="back-button"
            onClick={() => window.location.reload()}
          >
            &#8592;
          </button>
          <h2>Edit Transcript</h2>
        </div>

        {openEdit ? (
          <>
            <div className="action-buttons">
              <button
                className="discard-button"
                onClick={() => setOpenEdit(!openEdit)}
              >
                Discard
              </button>
              <button className="save-button">Save</button>
            </div>
          </>
        ) : (
          <>
            <button
              className="edit-button"
              onClick={() => setOpenEdit(!openEdit)}
            >
              Edit
            </button>
          </>
        )}
      </div>

      <div className="transcript-content">
        <p className="speaker">Speaker</p>
        <textarea
          className="transcript-text"
          defaultValue={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}
        />
      </div>
    </div>
  );
};

export default EditTranscript;
