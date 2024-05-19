import {
    Button,
    Card,
    CardMedia,
    Typography,
    CardActions,
  } from "@mui/material";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
  
  export default function CardMovies() {

  
    return (
      
      <Card sx={{
          maxWidth: 345,
          margin: "20px",
          border: "1px solid #a3a2a2",
          boxShadow: "1px 1px 12px 0px rgba(77,74,74,0.75)",}}>
        <CardMedia
          sx={{ height: 250, width: 400 }}
          image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5kGSQKp-kyuyv-k70WFs6GyqZfawzngMUfucAoVWKeYHnJ2VJ"
          title="green iguana"
        />
       <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent:"center",
              alignItems: "center",
              fontWeight: "bold",
              color: "#212120",
            }}>
            propandooooo
        </Typography>
        <CardActions sx={{
              display: "flex",
              justifyContent:"center",
              alignItems: "center",
            }}>
            <Button>
            <RemoveRedEyeIcon/>
            </Button>
            <Button>
              <FavoriteIcon /> {/* corazon lleno */}
            </Button>
            <Button>
              <FavoriteBorderIcon />
            </Button>
        </CardActions>
      </Card>
    );
  }
  
