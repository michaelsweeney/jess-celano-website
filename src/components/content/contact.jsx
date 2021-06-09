import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    color: "rgb(20,100,20) !important",
    width: "calc(min(100%,1000px))",
    "&$focused": {
      color: "rgb(20,100,20) !important",
    },
  },
  inputButton: {
    color: "white",
    backgroundColor: "black",
    borderRadius: 0,
    marginTop: 15,
  },
});

const Portfolio = (props) => {
  const classes = useStyles();

  const [textContent, setTextContent] = useState("");
  const handleSubmit = () => {
    alert(`you've submitted ${textContent}`);
    setTextContent("");
  };

  const handleTextFieldChange = (e) => {
    setTextContent(e.target.value);
  };

  return (
    <>
      <div>
        <TextField
          className={classes.textField}
          id="outlined-multiline-static"
          label="type message here to say hi!"
          multiline
          rows={12}
          value={textContent}
          color={"rgb(20,100,20)"}
          onChange={handleTextFieldChange}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          className={classes.inputButton}
          variant="solid"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </div>
    </>
  );
};

export default Portfolio;
