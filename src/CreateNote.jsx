import React, { useState } from "react";
import "./index.css";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Button from "@material-ui/core/Button";
import Note from "./Note";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);

  const expandIt = () => {
    setExpand(true);
  };

  const btoNormal = () => {
    setExpand(false);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: ""
    });
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value
      };
    });
  };

  return (
    <>
      <div className="main_note">
        <form action="">
          <input
            onClick={expandIt}
            onChange={inputEvent}
            value={note.title}
            type="text"
            name="title"
            placeholder="Set you Notes Title"
            autoComplete="off"
          />

          <br />
          {expand ? (
            <textarea
              onChange={inputEvent}
              onDoubleClick={btoNormal}
              value={note.content}
              name="content"
              placeholder="Create Your Notes... "
              id=""
              cols="5"
              rows="10"
            ></textarea>
          ) : null}

          {expand ? (
            <Button className="btn" onClick={addEvent}>
              <AddCircleOutlineRoundedIcon className="addicon" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
