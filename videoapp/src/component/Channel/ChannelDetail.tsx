import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "../Video/Videos";
import { fetchFromAPI } from "../../utils/fetchFromApi";

const ChannelDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [channelDetail, setChannelDetail] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [videos, setVideos] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items?.[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Channel Banner */}
      <div className="h-72 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black mb-[-96px] z-0" />

      {/* Channel Info Card */}
      <div className="flex justify-center z-10 relative">
        <ChannelCard channelDetail={channelDetail} />
      </div>

      {/* Channel Videos */}
      <div className="flex flex-col mt-8 px-4">
        <Videos videos={videos} direction="row" />
      </div>
    </div>
  );
};

export default ChannelDetail;
