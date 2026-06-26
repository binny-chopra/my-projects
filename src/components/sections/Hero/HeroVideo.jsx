import { useEffect, useRef, useState } from 'react';
import { Play, Pause, VolumeOn, VolumeOff } from '../../common/Icon/icons';

/*
 * Square (1:1) talking-head video. Drop your file in as:
 *   src/assets/portfolioSequence.mp4   (1080×1080)
 */
import portfolioVideo from '../../../assets/portfolioSequence.mp4';

/* Feather all four edges so the video dissolves into the page (no border line). */
const featherMask =
  'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%),' +
  'linear-gradient(to bottom, transparent 0%, #000 7%, #000 93%, transparent 100%)';

const featherStyle = {
  WebkitMaskImage: featherMask,
  maskImage: featherMask,
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect',
};

/**
 * The hero's left-hand media: a clean 1:1 video that gradient-blends into the
 * section. Plays once on load (muted), then stops — the play button replays it
 * from the start. No looping.
 */
export function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Play once on load.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const result = video.play();
    if (result && typeof result.catch === 'function') {
      result.catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      if (video.ended) video.currentTime = 0; // replay from the start
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <figure className="relative aspect-square w-full">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={featherStyle}
        src={portfolioVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="absolute bottom-[18px] left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        <ControlButton label={isPlaying ? 'Pause video' : 'Play video'} onClick={togglePlay}>
          {isPlaying ? <Pause width={16} height={16} /> : <Play width={16} height={16} />}
        </ControlButton>
        <ControlButton label={isMuted ? 'Unmute video' : 'Mute video'} onClick={toggleMute}>
          {isMuted ? <VolumeOff width={16} height={16} /> : <VolumeOn width={16} height={16} />}
        </ControlButton>
      </div>
    </figure>
  );
}

function ControlButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-md transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-black/55"
    >
      {children}
    </button>
  );
}
