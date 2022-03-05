import React from "react";
import "./index.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Note = (props) => {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h3>{props.title}</h3>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
