import streetMap from '../assets/street_map.png';

function OwnerPage() {
  return (
    <>
      <div className="hero-owner">
        <h1 id="myHeader">About Us</h1>
      </div>

      <main>
        <section>
          <div className="about-us">
            <h3>Where to find us:</h3>
            <p>You find us on the sunnier side of the city on Sun Street 1!</p>
            <img src={streetMap} alt="Our Location" width="400" style={{display: 'block'}} />

            <h3>How to reach us:</h3>
            <p>Contact us on phone 08-123456789 or email catstore@catstore.com</p>
            <p>Or even better: swing by!</p>

            <h3>Company info:</h3>
            <p>We are a small business with passion for cats!</p>
            <p>Org.nr: 55123456789</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default OwnerPage;