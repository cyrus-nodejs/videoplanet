import { Link } from "react-router-dom"; 
import { LazyLoadImage } from "react-lazy-load-image-component";
import { demoVideoTitle, demoChannelTitle, demoThumbnailUrl, demoVideoUrl, demoChannelUrl } from "../../utils/constants";

interface VideoCardProps {
  video: {
    id: {
      videoId?: string;
    };
    snippet?: {
      title: string;
      channelTitle?: string;
      channelId?: string;
      thumbnails?: {
        high?: {
          url?: string;
        };
      };
    };
  };
}
const VideoCard : React.FC<VideoCardProps>  = ({ video: { id: { videoId }, snippet } }) => {
  console.log(videoId)

  return (
  <div className=' sm:w-3xs md:w-3xs lg:w-3xs xl:w-3xs ' >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
      <LazyLoadImage src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} 
     
        className='xs:w-xs sm:w-sm h-24 w-full'
      />
    </Link>
    <div className=' dark:text-Seasalt text-sm' >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <span className='text-Richblack dark:text-Seasalt text-sm' >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}

        </span>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <span className='text-Richblack dark:text-Seasalt text-sm'>
          {snippet?.channelTitle || demoChannelTitle}
         <i className='bx bx-check-circle'></i>
        </span>
      </Link>
    </div>
  </div>
  )
}

export default VideoCard