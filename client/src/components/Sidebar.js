import {Stack} from "@mui/material"

import {categories} from "../utils/constants"

const Sidebar = (props) =>(
   <Stack
   direction="row"
   sx={{
    overflowY:"auto",
    height: {sx:"auto", md:"95%" },
    flexDirection: {md:"column"},
    paddingTop:"20px"
   }}
   >
   {categories.map((category)=>(
   <button className="category-btn"
   onClick={()=> props.setSelectedCategory(category.name)}
   style={{background: category.name === 
   props.selectedCategory && "crimson", 
   color:"white"
   }}
   key={category.name}
   >
    <span style={{color: category.name === props.selectedCategory ? "white" :
     "crimson", marginRight:"15px"}}>{category.icon}</span>
    <span style={{opacity: category.name === props.selectedCategory ? "1" :
    "0.8"}}>{category.name}</span>
   </button>
   ))}
   <p className="text-sm text-white" style={{ color: "white",  paddingTop:"50px" }}> Copyright Base media @2023</p>
   </Stack> 
  )


export default Sidebar;