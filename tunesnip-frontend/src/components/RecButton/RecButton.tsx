import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import "./RecButton.css";
import { identifySong } from "../../utils/identifyUtils";
import { useState } from "react";

interface RecButtonProps {
    isDetecting: boolean,
    setIsDetecting: React.Dispatch<React.SetStateAction<boolean>>
}

export function RecButton({ setIsDetecting, isDetecting }: RecButtonProps) {
    const [onHover, setOnHover] = useState(false);

    return (
        <div className="record" onClick={() => identifySong(setIsDetecting)} onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <FontAwesomeIcon icon={faCompactDisc} size="2xl" spin={isDetecting || onHover} />
        </div>
    );
}