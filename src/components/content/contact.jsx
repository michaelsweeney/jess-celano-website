import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Button, TextField } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    marginTop: 5,
    marginBottom: 5,
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
  link: {
    textDecoration: "inherit",
    color: "inherit",
  },
});

const Portfolio = (props) => {
  const classes = useStyles();

  const [textContent, setTextContent] = useState("");
  const [emailFieldContent, setEmailFieldContent] = useState("");
  const [nameFieldContent, setNameFieldContent] = useState("");

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
        <Button
          variant="contained"
          color="primary"
          className={classes.inputButton}
        >
          <a className={classes.link} href="mailto:jessica-celano@gmail.com?">
            Email ME
          </a>
        </Button>

        <div>
          <TextField
            className={clsx(classes.textField, classes.nameField)}
            label="your name"
            autoComplete="name"
            value={nameFieldContent}
            onChange={(e) => {
              setNameFieldContent(e.target.value);
            }}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            className={clsx(classes.textField, classes.emailField)}
            label="your email"
            autoComplete="email"
            value={emailFieldContent}
            onChange={(e) => {
              setEmailFieldContent(e.target.value);
            }}
            variant="outlined"
          />
        </div>

        <TextField
          className={classes.textField}
          label="type message here to say hi!"
          multiline
          rows={12}
          value={textContent}
          onChange={(e) => {
            setTextContent(e.target.value);
          }}
          variant="outlined"
        />
      </div>
      <div>
        <Button
          className={classes.inputButton}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </div>
    </>
  );
};

export default Portfolio;
