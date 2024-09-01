import { useRef, useState } from "react";
import "./SongListPage.css";
import { MusicSwiper } from "../../components/MusicSwiper/MusicSwiper";

interface SongListPageProps {
    songListRef: React.RefObject<HTMLDivElement>;
    isLogin: boolean;
}

function SongListPage({ songListRef, isLogin }: SongListPageProps) {
    const songList = [
        { title: "Just One Day", artist: "BTS", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ee/6e/3a/ee6e3a51-d556-d61c-f50e-a2b9cbe65388/8804775053795_Cover.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/d7/cf/a6/d7cfa699-a5bf-4105-a526-d08b06028872/mzaf_21483215317677629.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
        { title: "DNA.", artist: "Kendrick Lamar", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b0/a5/ad/b0a5ad8b-ff44-082b-e5af-b4563e358b47/00602567261193.rgb.jpg/400x400cc.jpg", audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/c1/49/4b/c1494b21-4a48-6db4-7604-acba82c918b7/mzaf_4808366678163281835.plus.aac.ep.m4a" },
    ];
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [spinAngle, setSpinAngle] = useState<number>(0);

    const handlePlay = (audioUrl: string) => {
        if (audio?.src === audioUrl) {
            if (isPlaying) {
                audio?.pause();
                setIsPlaying(false);
            } else {
                audio?.play();
                setIsPlaying(true);
            }
        } else {
            audio?.pause();
            const newAudio = new Audio(audioUrl);
            newAudio.volume = 0.2;
            newAudio.play();
            setAudio(newAudio);
            setSpinAngle(0);
            setIsPlaying(true);

            newAudio.onended = () => {
                setIsPlaying(false);
                setSpinAngle(0);
            }
        }
    };

    return (
        <div ref={songListRef} className="song-list-container">
            <div>
                <h1 className="text-2xl text-center">Your past detections & searches</h1>
                <MusicSwiper
                    songList={songList}
                    audio={audio}
                    handlePlay={handlePlay}
                    spinAngle={spinAngle}
                    setSpinAngle={setSpinAngle}
                    isPlaying={isPlaying}
                    isRec={false}
                    isLogin={isLogin}
                />
            </div>
            <div>
                <h1 className="text-2xl text-center">You may also like</h1>
                <MusicSwiper
                    songList={songList}
                    audio={audio}
                    handlePlay={handlePlay}
                    spinAngle={spinAngle}
                    setSpinAngle={setSpinAngle}
                    isPlaying={isPlaying}
                    isRec={true}
                    isLogin={isLogin}
                />
            </div>
        </div>
    );
}

export default SongListPage;