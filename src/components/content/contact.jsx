import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
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
    <>
      <Typography variant="h2">Contact Me!</Typography>
      <div>
        <div>{textContent}</div>
        <Button onClick={handleSubmit}>Send Message</Button>
      </div>
    </>
  );
};

export default Portfolio;
