import {Stack, Typography} from "@mui/material"
import  {Link} from "react-router-dom"
import  SearchBar from "./SearchBar";
import zIndex from "@mui/material/styles/zIndex";
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
const Navbar = () => (
   <Stack direction="row"
    alignItems="center" 
    p={0} sx={{position:"sticky", background:"#252826);", top:0, justifyContent:"space-between", zIndex:"10"}}>
    <Link to="/" style={{display:"flex", alignItems:"center", fontSize:50}}>
    <AppsSharpIcon fontSize="50px" />
      <Typography
      variant="h4" 
      >Base</Typography>
    </Link>
    <SearchBar />
   </Stack>
  )


export default Navbar