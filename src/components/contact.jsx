import { useEffect, useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Portfolio = (props) => {
  const [textContent, setTextContent] = useState("");
  const handleSubmit = () => {
    alert("you have submitted!");
    setTextContent("");
  };

  const handleTextFieldChange = (e) => {
    setTextContent(e.target.value);
  };

  return (
    <div>
      Contact Me!
      <TextField
        label="type a message to say hi!"
        value={textContent}
        onChange={handleTextFieldChange}
        multiline
        rows="4"
        variant="outlined"
      ></TextField>
      <Button onClick={handleSubmit}>SEND MESSAGE</Button>
    </div>
  );
};

export default Portfolio;
