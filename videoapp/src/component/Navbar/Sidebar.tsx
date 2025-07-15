import { categories } from "../../utils/constants"
import { useContext } from "react"
import { VideoContext } from "../../context/videoContext"
const Sidebar = () => {
    const {selectedCategory, setSelectedCategory} = useContext(VideoContext)
  return (
 <div className="md:w-60 w-full  border-b md:border-b-0 md:border-r md:h-full ">
     <div className="flex md:flex-col overflow-x-auto md:overflow-y-auto h-full scrollbar-thin scrollbar-thumb-Paledogwood scrollbar-track-Smokyblack-300">
    {categories.map((category)=>(
   <button className={` flex items-center py-2 px-4  my-2 justify-start cursor-pointer  border-0 outline-none rounded-2xl transition-all ${ category.name === selectedCategory ? 'bg-Darkred  text-Seasalt dark:text-Richblack' :'bg-Seasalt  text-Richblack dark:text-Seasalt'} `}
   onClick={()=> setSelectedCategory(category.name)}
   key={category.name}
   >
    <span
    className={`  ${ category.name === selectedCategory ? ' text-Seasalt opacity-1':' text-Richblack opacity-0.8'} `}
   >{category.name}</span>
   </button>
   ))}
  
   <div className="text-Richblack text-sm italic  dark:text-white" > Copyright Base media @2023</div>
   
    </div>
  </div>
  )
}



export default Sidebar