import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../Context/CartContext';

function CatDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?limit=30')
      .then(res => res.json())
      .then(data => {
        const found = data.find(c => c.id === id);
        setCat(found);
      });
  }, [id]);

  if (!cat) return <p className="text-center mt-4">Loading...</p>;

  return (
    <Container className="mt-4">
      <Button
        className="mb-3"
        style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black', borderRadius: '25px'}}
        onClick={() => navigate('/cats')}
      >
        ← Back
      </Button>

      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Img
              variant="top"
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
              onError={(e) => e.target.src = 'https://placehold.co/400x300?text=No+image'}
              style={{height: '300px', objectFit: 'cover'}}
            />
            <Card.Body>
              <Card.Title>{cat.name}</Card.Title>
              <Card.Text><strong>Origin:</strong> {cat.origin}</Card.Text>
              <Card.Text><strong>Temperament:</strong> {cat.temperament}</Card.Text>
              <Card.Text><strong>Life span:</strong> {cat.life_span} years</Card.Text>
              <Card.Text>{cat.description}</Card.Text>
              <Button
                style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black', borderRadius: '25px'}}
                onClick={() => addToCart(cat)}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CatDetailPage;