import React, { useEffect, useState } from "react";


import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <div className="flex overflow-auto flex-col md:flex-row" >
      <div className="h-full md:h-screen border-r-4 border-azure-500 p-0 md:p-2" >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} /> 
         
      </div>

      <div className="p-2 overflow-y-scroll h-full flex-1" p={2} >
         <p className="font-bold" style={{ color: "azure", fontSize:"50px" }} > {selectedCategory} <span style={{ color: "crimson" }}>videos</span></p>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;