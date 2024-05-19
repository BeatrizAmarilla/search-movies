import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import VideocamIcon from '@mui/icons-material/Videocam';


export default function Footer() {

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor:'#002884', }}>
        <Toolbar sx={{display: "flex",
              justifyContent:"center",}}>
          <Typography >
           <VideocamIcon/>
            Movies App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
