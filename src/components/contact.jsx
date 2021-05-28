import { useEffect, useState } from "react";

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
      <div>{textContent}</div>
      <button onClick={handleSubmit}>SEND MESSAGE</button>
    </div>
  );
};

export default Portfolio;
