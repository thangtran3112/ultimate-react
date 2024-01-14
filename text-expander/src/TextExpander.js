import { useState } from "react";

function getCollapsedParagraph(paragraph, numberOfWords) {
  const words = paragraph.match(/\b(\w+\W+)/g);
  const collapsedWords = words.slice(0, numberOfWords);
  return collapsedWords.join(" ") + "...";
}

export default function TextExpander({
  collapsedNumWords = 20,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#0000FF",
  expanded = false,
  className = "",
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  function handleClick() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  const buttonText = isExpanded ? collapseButtonText : expandButtonText;
  const displayContent = isExpanded
    ? children
    : getCollapsedParagraph(children, collapsedNumWords);

  const buttonStyle = {
    color: buttonColor,
    marginLeft: "8px",
  };

  const containerStyle = {
    display: "block",
  };

  return (
    <main className={className} style={containerStyle}>
      <span>{displayContent}</span>
      <span role="button" style={buttonStyle} onClick={handleClick}>
        {buttonText}
      </span>
    </main>
  );
}
