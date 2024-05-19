import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {Button,Link} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
//import { useContext } from "react";
//import { FavoriteContext } from "../../context/FavoriteContext";
import { GiPopcorn } from "react-icons/gi";
import useMovies from "../../hooks/useMovies";
import { useEffect } from "react";
import { Link as LinkDom } from "react-router-dom";

export default function NavBar() {
  //const { totalFavorites } = useContext(FavoriteContext);
const {movies,getMovies}=useMovies()
console.log(movies)
useEffect( ()=>{
getMovies()
},[]
)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:'#002884', }}>
        <Toolbar>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block" },
              fontFamily: "shlop",
            }}
          >
           <GiPopcorn />
          </Typography>
          <Stack direction="row" gap={1}>
            <Link to="/"
            component={LinkDom}
            color="#ffff"
            underline="none"
            >
              HOME
            </Link>

            <Link to="/UltimosLanzamientos"
            component={LinkDom}
            color="#ffff"
            underline="none"
            >
              ULTIMOS LANZAMIENTOS
            </Link>

            <Link to="/Populares"
            component={LinkDom}
            color="#ffff"
            underline="none"
            >
            POPULARES
            </Link>
            <Link to="/Buscar"
            component={LinkDom}
            color="#ffff"
            underline="none"
            >
            BUSCAR
            </Link>
            </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
