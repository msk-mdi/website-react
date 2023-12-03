import video from "../../assets/videoplayback.mp4";
import './index.css'

function Video() {
  return (
    <video width="1000" height="500" controls>
      <source src={video} type="video/mp4"></source>
    </video>
  );
}

export default Video;
