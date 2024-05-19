import { CardColumns,Card,CardImg,CardBody,CardTitle,Button} from 'reactstrap';


export default function CardHomeMoviesPopular() {
  return (
    <CardColumns
    style={{
      width: '18rem',
      marginLeft:"5rem",
  
    }}
  >
    <CardTitle tag="h5">
          PELICULAS POPULARES
    </CardTitle>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <Button color="primary">
            Click Me
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
    </Card>
    <Card>
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <Button color="primary">
            Click Me
        </Button>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        alt="Card image cap"
        src="https://picsum.photos/256/186"
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">
          Card title
        </CardTitle>
        <Button color="primary">
          Click Me
        </Button>
      </CardBody>
    </Card>
  </CardColumns>
  )
  
}
