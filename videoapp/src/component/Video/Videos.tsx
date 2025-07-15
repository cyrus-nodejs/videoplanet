import ChannelCard from "../Channel/ChannelCard";
import Loader from "../Loader/Index";
import VideoCard from "./VideoCard";

interface VideoOrChannelItem {
  id: {
    videoId?: string;
    channelId?: string;
  };
  snippet?: {
    title?: string;
    thumbnails?: {
      high?: {
        url?: string;
      };
    };
  };
  statistics?: {
    subscriberCount?: string;
  };
}

interface VideosProps {
  videos: VideoOrChannelItem[] | null;
  direction?: "row" | "column";
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
      {videos.map((item) => (
        <div
          key={item.id?.videoId || item.id?.channelId}
          className="rounded overflow-hidden shadow-md  transform transition-transform duration-300 hover:scale-105"
        >
          <div className="aspect-w-16 aspect-h-9">
            {item.id?.videoId && <VideoCard video={item} />}
            {item.id?.channelId && <ChannelCard channelDetail={item} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
