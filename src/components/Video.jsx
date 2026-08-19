export default function Video({ src }) {
    return (
        <video className="absolute top-0 left-0 h-full w-full object-cover rounded-2xl" autoPlay loop muted playsInline preload="none">
            <source src={src} type="video/mp4" />
            {/* <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" /> */}
            Your browser does not support the video tag.
        </video>
    );
}
