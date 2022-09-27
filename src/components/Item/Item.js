import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Item = ({title="", img="", id=""}) => {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`/item/${id}`} className="btn btn-primary my-2">Ver Detalles</Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

