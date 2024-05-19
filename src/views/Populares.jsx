import { Typography } from "@mui/material";
import CardMovies from "../components/CardMovies";

export default function Populares() {
  return (
    <div>
      <Typography variant="h3" sx={{
              display: "flex",
              justifyContent:"center",
              mt:"1rem",
              }}>
        Peliculas Populares
      </Typography>
      <CardMovies/>
    </div>
  )
}
