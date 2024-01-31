import Button from "./Button";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        //prevent the Form to be submitted when clicking on any button inside the Form
        e.preventDefault();
        //navigating back 1 step from history
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
