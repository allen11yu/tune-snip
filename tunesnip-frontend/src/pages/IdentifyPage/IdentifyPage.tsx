import { SearchBar } from "../../components/SearchBar/SearchBar";
import { RecButton } from "../../components/RecButton/RecButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./IdentifyPage.css";

function IdentifyPage() {
    return (
        <div className="identify-page-container">
            <SearchBar />
            <RecButton />
            <FontAwesomeIcon className="arrow" icon={faAnglesDown} size="xl" />
        </div>
    );
}

export default IdentifyPage;