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
        value={textContent}
        onChange={handleTextFieldChange}
        multiline
        rows="4"
        variant="outlined"
      ></TextField>
      <Button onClick={handleSubmit}>Contact Me!</Button>
    </div>
  );
};

export default Portfolio;
