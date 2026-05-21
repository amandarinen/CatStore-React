import { useState } from 'react';
import { useCart } from '../Context/CartContext';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [address, setAddress] = useState('');

  function checkout() {
    const catnames = cart.map(cat => cat.name).join(', ');
    setShowModal(false);
    clearCart();
    alert(`Checkout done! Thank you! :3\nYour order: ${catnames}.\nYour information:\nName: ${name}\nEmail: ${mail}\nAddress: ${address}`);
  }

  return (
    <>
      <div className="hero-cart">
        <h1 id="myHeader">Customer Cart</h1>
      </div>

      <Container className="mt-4">
        {cart.length === 0 && <p className="text-center">Your cart is empty.</p>}

        <Row xs={1} sm={2} lg={3} className="g-4">
          {cart.map(cat => (
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
                    onClick={() => removeFromCart(cat)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {cart.length > 0 && (
          <div className="text-center mt-4">
            <Button
              size="lg"
              style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black', borderRadius: '25px'}}
              onClick={() => setShowModal(true)}
            >
              Checkout
            </Button>
          </div>
        )}
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Complete your order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={mail} onChange={(e) => setMail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Shipping address</Form.Label>
              <Form.Control type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button
            style={{backgroundColor: 'rgb(240, 166, 166)', border: 'none', color: 'black'}}
            onClick={checkout}
          >
            Place order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartPage;