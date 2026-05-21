import { useState, useEffect } from 'react';
import { useCart } from '../Context/CartContext';
import { Container, Row, Col, Card, Button, Form, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const perPage = 10;

function CatPage() {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/breeds?limit=30')
      .then(res => res.json())
      .then(data => setCats(data));
  }, []);

  const filtered = cats.filter(cat =>
    cat.name.toLowerCase().includes(searchText.toLowerCase()) ||
    cat.origin.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (currentPage - 1) * perPage;
  const pageCats = filtered.slice(start, start + perPage);

  function handleSearch(e) {
    setSearchText(e.target.value);
    setCurrentPage(1);
  }

  return (
    <>
      <div className="hero-cat">
        <h1 id="myHeader">Our Cats</h1>
      </div>

      <Container className="mt-4">
        <Form.Label htmlFor="searchbar" className="visually-hidden">Search:</Form.Label>
        <Form.Control
          type="text"
          id="searchbar"
          placeholder="Search for breed or country..."
          value={searchText}
          onChange={handleSearch}
          className="mb-4"
        />

        <Row xs={1} sm={2} lg={3} className="g-4">
          {pageCats.map(cat => (
            <Col key={cat.id}>
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
                  onError={(e) => e.target.src = 'https://placehold.co/200x200?text=No+image'}
                  style={{height: '200px', objectFit: 'cover'}}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cat.name}</Card.Title>
                  <Card.Text>{cat.origin}</Card.Text>
                  <Button
                    className="mt-auto"
                    style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black', borderRadius: '25px'}}
                    onClick={() => addToCart(cat)}>Add to cart
                  </Button>
                  <Button
                    className="mt-2"
                    style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black', borderRadius: '25px'}}
                    onClick={() => navigate(`/cats/${cat.id}`)}>More info
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Pagination className="justify-content-center mt-4" >
          <Pagination.Prev onClick={() => setCurrentPage(p => p - 1)} disabled={currentPage === 1} />
          <Pagination.Item active>{currentPage}/{totalPages}</Pagination.Item>
          <Pagination.Next onClick={() => setCurrentPage(p => p + 1)} disabled={currentPage === totalPages} />
        </Pagination>
      </Container>
    </>
  );
}

export default CatPage;