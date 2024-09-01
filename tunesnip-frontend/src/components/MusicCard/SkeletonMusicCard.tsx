import "./MusicCard.css";
import { motion } from "framer-motion";
import { COVER_STYLE } from "../../utils/motionStyles";

export function SkeletonMusicCard() {
    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
            <div className="cover-art">
                <motion.div style={COVER_STYLE}>
                    <figure>
                        <img
                            src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ee/6e/3a/ee6e3a51-d556-d61c-f50e-a2b9cbe65388/8804775053795_Cover.jpg/400x400cc.jpg"
                            alt="Loading" />
                    </figure>
                </motion.div>
            </div>
            <div className="skeleton card-body">
                <h2 className="card-title">Please login first</h2>
                <p>If logged in, make your first search or detection</p>
            </div>
        </div>
    )
}