import { SearchBar } from "../../components/SearchBar/SearchBar";
import { RecButton } from "../../components/RecButton/RecButton";
import { DownArrow } from "../../components/DownArrow/DownArrow";
import "./IdentifyPage.css";

interface IdentifyPageProps {
    songListRef: React.RefObject<HTMLDivElement>
    isDetecting: boolean,
    setIsDetecting: React.Dispatch<React.SetStateAction<boolean>>
}

function IdentifyPage({ songListRef, isDetecting, setIsDetecting }: IdentifyPageProps) {

    return (
        <div className="identify-page-container">
            <SearchBar isDetecting={isDetecting} />
            <RecButton setIsDetecting={setIsDetecting} isDetecting={isDetecting} />
            <DownArrow songListRef={songListRef} isDetecting={isDetecting} />
        </div>
    );
}

export default IdentifyPage;