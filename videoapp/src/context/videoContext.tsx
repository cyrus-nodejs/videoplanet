

import { createContext,   useState } from "react";

import type { vidType } from '../utils/@types';


// eslint-disable-next-line react-refresh/only-export-components
export const VideoContext = createContext<vidType>(null!);


export const  VideoProvider = ({ children}:{ children: React.ReactNode } ) => {
  
    const [channelDetail, setChannelDetail] = useState(null)
 const [videos, setVideos] = useState([])
 
   const [selectedCategory, setSelectedCategory] = useState("New");
   const [searchTerm, setSearchTerm] = useState("")
    const [videoDetail, setVideoDetail] = useState(null);
//   const [videos, setVideos] = useState(null);
 
  
 


  return (
    < VideoContext.Provider
      value={{
        videos,
        setVideos,
        channelDetail,
        setChannelDetail,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        setSearchTerm,
        videoDetail,
        setVideoDetail,
       
      }}
    >
      {children}
    </ VideoContext.Provider>
  );
}