import { Box, Typography,TextField } from "@mui/material";
import CardMovies from "../components/CardMovies";

export default function Buscar() {
  return (
    <div>
      <Typography variant="h4" sx={{
              display: "flex",
              justifyContent:"center",
              mt:"1rem",
              }}>
        Busca tu película
      </Typography>
      <Box sx={{
        width: 500,
        maxWidth: '100%',
        display: "flex",
        alignItems:"center",
      }}
    >
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
      <CardMovies/>
    </div>
  )
}
