import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom"
import DarkModeToggle from "../Darkmode"

const Appbar = () => {
 
  return (
    
    <header className="fixed top-0 left-0 w-full h-14 bg-Seasalt text-Richblack dark:bg-Richblack dark:text-Seasalt justify-between flex items-center px-4 shadow z-50 " >
    
    <div> 
    <Link to="/" ><i className='bx bxl-deezertext-2xl sm:text-sm md:text-base bg-Seasalt' ></i><span className=' sm:text-sm md:text-2xl' >VideoPlanet</span></Link>
    </div>

   <div>
    <SearchBar />
   </div>
   
   <DarkModeToggle />

   
   </header>
  
  )
}

export default Appbar

