import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import "./DownArrow.css";
import { SHOW_ANIMATE, HIDE_ANIMATE } from "../../utils/motionStyles";
import { motion } from "framer-motion"

interface DownArrowProps {
    songListRef: React.RefObject<HTMLDivElement>,
    isDetecting: boolean
}

export function DownArrow({ songListRef, isDetecting }: DownArrowProps) {
    const handleScrollDown = () => songListRef.current?.scrollIntoView({
        behavior: "smooth"
    })

    return (
        <div className="arrow">
            <motion.div animate={isDetecting ? HIDE_ANIMATE : SHOW_ANIMATE}>
                <button onClick={handleScrollDown}>
                    <FontAwesomeIcon icon={faAnglesDown} size="xl" />
                </button>
            </motion.div>
        </div>
    );
}