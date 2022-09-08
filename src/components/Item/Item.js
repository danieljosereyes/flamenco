import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Item = ({title="", img="", id=""}) => {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/item/${id}`} className="btn btn-primary my-2">Ver Detalles</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

