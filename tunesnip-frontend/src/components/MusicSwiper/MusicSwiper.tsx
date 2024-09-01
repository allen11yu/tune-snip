import { Swiper, SwiperSlide } from 'swiper/react';
import { MusicCard } from '../MusicCard/MusicCard';
import { SkeletonMusicCard } from '../MusicCard/SkeletonMusicCard';
import "./MusicSwiper.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

interface Song {
    title: string;
    artist: string;
    cover: string;
    audioUrl: string;
}

interface MusicSwiperProps {
    songList: Song[];
    audio: HTMLAudioElement | null;
    handlePlay: (audioUrl: string) => void;
    spinAngle: number;
    setSpinAngle: React.Dispatch<React.SetStateAction<number>>;
    isPlaying: boolean;
    isRec: boolean;
    isLogin: boolean;
}

export function MusicSwiper({ songList, audio, handlePlay, spinAngle, setSpinAngle, isPlaying, isRec, isLogin }: MusicSwiperProps) {
    const autoplayConfig = {
        delay: 2500,
        disableOnInteraction: true,
    };

    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={50}
            autoplay={isRec ? autoplayConfig : false}
            loop={isRec}
            grabCursor={true}
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="swiper"
        >
            {songList.map((songData, index) => (
                <SwiperSlide>
                    {(isLogin || isRec) ?
                        (<MusicCard key={index}
                            songData={songData}
                            isPlaying={audio?.src === songData.audioUrl && isPlaying}
                            handlePlay={() => handlePlay(songData.audioUrl)}
                            spinAngle={spinAngle}
                            setSpinAngle={setSpinAngle} />)
                        : (<SkeletonMusicCard />)}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}