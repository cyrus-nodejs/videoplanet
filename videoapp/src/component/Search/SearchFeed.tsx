import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import Videos from "../Video/Videos";
import { fetchFromAPI } from "../../utils/fetchFromApi";
type Video = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id: any; // Ideally, define proper types here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snippet: any;
};

const SearchFeed: React.FC = () => {

const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { searchTerm } = useParams<{ searchTerm: string }>();

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      setError(null);

      fetchFromAPI(searchTerm)
        .then((data) => {
          setVideos(data.items);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        });
    }
  }, [searchTerm, setVideos]);

  return (
     <div className="p-14 overflow-y-auto h-[90vh] flex-1">
      <h2 className=" font-bold text-2xl mb-4">
        Search Results for{" "}
        <span className="text-red-600">{searchTerm}</span> videos
      </h2>

      {loading && (
        <div className="text-gray-400 text-lg animate-pulse">Loading...</div>
      )}

      {error && (
        <div className="text-red-500 text-lg font-semibold">{error}</div>
      )}

      {!loading && !error && <Videos videos={videos} />}
    </div>
  );
};

export default SearchFeed;