import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
//import { useContext } from "react";
//import { FavoriteContext } from "../../context/FavoriteContext";
import { GiPopcorn } from "react-icons/gi";
export default function NavBar() {
 // const navigate = useNavigate();

  //const { totalFavorites } = useContext(FavoriteContext);

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
          
            <Button
              variant="contained"
              color="primary"
              //onClick={() => navigate("/Alive")}
            >
              HOME
            </Button>

            <Button
              variant="contained"
              color="primary"
              //onClick={() => navigate("Dead")}
            >
            ULTIMOS LANZAMIENTOS
            </Button>

            <Button
              variant="contained"
              color="primary"
             // onClick={() => navigate("/unknown")}
            >
            POPULARES
            </Button>

            <Button
              variant="contained"
              color="primary"
             // onClick={() => navigate("/")}
            >
            BUSCAR
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
