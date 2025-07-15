import { useContext, useEffect, useState } from "react"
import { fetchFromAPI } from "../../utils/fetchFromApi"
import { VideoContext } from "../../context/videoContext"
import Sidebar from "../Navbar/Sidebar"
import Videos from "../Video/Videos"

//  import MainContent from "../MainContent"
const Feed = () => {
    const { selectedCategory} = useContext(VideoContext)
    const [videos, setVideos] = useState(null);
    useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory, setVideos]);
  return (
  
 
      
      <div className="pt-14 flex flex-col md:flex-row h-[calc(100vh-56px)]">
    
       <Sidebar />

    
        <main className="flex-1 p-4 overflow-auto scrollbar-thin scrollbar-thumb-Paledogwood scrollbar-track-Smokyblack-300">
          
      <div className=""  >
         <div className="text-2xl text-Richblack dark:text-Seasalt sticky top-0"  > {selectedCategory} <span className=' text-Darkred text-2xl dark:text-Darkred'>videos</span></div>
        
        <Videos videos={videos} />
        
      
</div>
        </main>
      </div>
    

  )
}

export default Feed