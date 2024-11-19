import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {div} from "@mui/material"

import {Videos, ChannelCard} from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI";


const ChannelDetail = () => {
 const [channeldetail, setChannelDetail] = useState(null)
 const [videos, setVideos] = useState([])
  const {id} = useParams()
  
  useEffect(() =>{
   fetchFromAPI(`channels?part="snippet&id=${id}`)
   .then((data) => setChannelDetail(data?.items[0]))

   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
     .then((data) => setVideos(data?.items))
  },[id])
     
  return (
    <div className="" minHeight="95vh">
     <div>
      <div style={{background: "#262626",
      zIndex:10, 
      height:"300px"
      }}/>
      <ChannelCard channelDetail={channeldetail} marginTop="-110px"/>
     </div>
     <div display="flex" p="2">
         <div sx={{mr: {sm:"100px"}}}/>
          <Videos videos={videos} />
     </div>
    </div>
  )
}

export default ChannelDetail;