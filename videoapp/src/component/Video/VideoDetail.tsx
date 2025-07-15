import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
import Loader from "../Loader/Index";
import { fetchFromAPI } from "../../utils/fetchFromApi";

interface VideoDetailProps {
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<VideoDetailProps | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [videos, setVideos] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items?.[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  if (!videoDetail) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="min-h-screen pt-16 px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left (Video Player + Info) */}
        <div className="w-full lg:w-2/3">
          <div className="sticky top-20">
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height='400px'
              className="rounded-lg"
            />

            <h2 className="text-xl font-bold dark:text-Seasalt mt-4">{title}</h2>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  text-gray-400 gap-4 mt-4 text-sm sm:text-base">
              <Link to={`/channel/${channelId}`} className="hover:underline">
                <span className="flex items-center gap-2">
                  {channelTitle}
                  <i className="bx bx-check-circle text-blue-500 text-xl"></i>
                </span>
              </Link>

              <div className="flex gap-6 text-gray-400">
                {viewCount && (
                  <span className=''>{parseInt(viewCount).toLocaleString()} views</span>
                )}
                {likeCount && (
                  <span>{parseInt(likeCount).toLocaleString()} likes</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right (Related Videos) */}
        <div className="w-full lg:w-1/3">
          <Videos videos={videos || []} direction="column" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
