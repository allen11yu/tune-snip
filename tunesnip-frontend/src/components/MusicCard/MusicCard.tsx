import "./MusicCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faSpotify,
    faItunes,
} from "@fortawesome/free-brands-svg-icons";
import { faCirclePause, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { COVER_STYLE } from "../../utils/motionStyles";

interface MusicCardProps {
    songData: Record<string, any>;
    isPlaying: boolean;
    handlePlay: () => void;
    spinAngle: number;
    setSpinAngle: React.Dispatch<React.SetStateAction<number>>;
}

export function MusicCard({ songData, isPlaying, handlePlay, spinAngle, setSpinAngle }: MusicCardProps) {
    const controls = useAnimation();

    useEffect(() => {
        if (isPlaying) {
            // Start or continue spinning from the last angle
            controls.start({
                rotate: [spinAngle, spinAngle + 360],
                transition: {
                    duration: 7.5,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            // Stop spinning and record the last angle using onUpdate
            controls.stop();
        }
    }, [isPlaying, controls]);

    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
            <div className="cover-art">
                <motion.div animate={controls} style={COVER_STYLE} onUpdate={(latest) => {
                    setSpinAngle((latest.rotate as number) % 360);
                }}>
                    <figure>
                        <img
                            src={songData.cover}
                            alt={songData.artist} />
                    </figure>
                </motion.div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{songData.title}</h2>
                <p>{songData.artist}</p>
                <div className="card-actions items-end justify-between">
                    <div className="hubs">
                        <a href="" target="_blank" rel="noopener noreferrer" className="hub spotify">
                            <FontAwesomeIcon icon={faSpotify} size="lg" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="hub itunes">
                            <FontAwesomeIcon icon={faItunes} size="lg" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer" className="hub youtube">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>
                    <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} size="2xl" onClick={handlePlay} className="play-btn" />
                </div>
            </div>
        </div>
    )
}