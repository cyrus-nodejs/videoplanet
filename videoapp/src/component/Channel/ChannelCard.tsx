import { Link } from "react-router-dom";
import { demoProfilePicture } from "../../utils/constants";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ChannelDetail {
  id?: {
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

interface ChannelCardProps {
  channelDetail: ChannelDetail | null;
  marginTop?: string;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channelDetail }) => {
  const channelId = channelDetail?.id?.channelId;
  const title = channelDetail?.snippet?.title || "Channel Title";
  const profileImg = channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const subscribers = channelDetail?.statistics?.subscriberCount
    ? `${parseInt(channelDetail.statistics.subscriberCount).toLocaleString()} Subscribers`
    : null;

  return (
    <div className="flex justify-center items-center w-full">
      <Link
        to={`/channel/${channelId}`}
        className="flex flex-col items-center text-center p-4 bg-gray-900 text-white rounded-lg w-full max-w-xs hover:shadow-lg transition-shadow"
      >
        <div className="w-44 h-44 mb-4">
          <LazyLoadImage
             src={profileImg}
            alt={title}
            effect="blur"
            className="w-full h-full object-cover rounded-full border border-gray-700"
          />
        </div>

        <h3 className="text-lg font-semibold flex items-center text-Richblack dark:text-Seasalt justify-center gap-1">
          {title}
          <i className="bx bx-check-circle text-Richblack sm:text-Seasalt text-base"></i>
        </h3>

        {subscribers && (
          <p className="text-sm text-Richblack sm:text-Seasalt  mt-1">{subscribers}</p>
        )}
      </Link>
    </div>
  );
};

export default ChannelCard;
