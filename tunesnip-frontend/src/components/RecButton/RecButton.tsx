import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./RecButton.css";

export function RecButton() {
    return (
        <div className="record">
            <FontAwesomeIcon icon={faMicrophone} size="2xl" />
        </div>
    );
}