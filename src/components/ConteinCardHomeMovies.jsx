import CardHomeMoviesPopular from "../components/CardHomeMoviesPopular"
import CardHomeMoviesRated from "../components/CardHomeMoviesRated"
import { Row,Col} from 'reactstrap';

export default function ConteinCardHomeMovies() {
  return (
      <Row>
        <Col sm="6">
        <CardHomeMoviesPopular/>
        </Col>
        <Col sm="6">
        <CardHomeMoviesRated/>
        </Col>
      </Row>

  )
}
