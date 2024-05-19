
import { Typography } from "@mui/material";
import CardMovies from "../components/CardMovies";

export default function UltimosLanzamientos() {
  return (
    <div>
      <Typography variant="h3" sx={{
              display: "flex",
              justifyContent:"center",
              mt:"1rem",
              }}>
        Ultimos Lanzamientos
      </Typography>
      <CardMovies/>
    </div>
  )
}
