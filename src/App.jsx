import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles.css';

function App() {
  const style = {  
    background: 'linear-gradient(90deg, rgba(77,38,103,1) 0%, rgba(120,48,48,1) 50%, rgba(128,92,41,1) 100%)',
    color: 'white',
    height: '30vh',
  }

  const form = {
    width: '400px'
  }
  return (
    <>
      {/* navigation */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          🎟️ TicketHub
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Presales</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Policy</a>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link" href="#">Sign In/Register</a>
            </span>
          </div>
        </div>
      </nav>

      {/* Main header content */}
      <div className="container-fluid d-flex align-items-end" style={style}>
        <div>
          <h1 className='display-1 fw-bold'>Nine Inch Nails</h1>
          <p className='ps-1'>Scotiabank Arena | Toronto, Canada</p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          {/* Form Section */}
          <div className="col-lg-6 col-12 mb-4" style={form}>
          <h2>Checkout</h2>
            <form action="https://nscc-0493304-tickethub-api-d4b0c7c0fzdze9a2.canadacentral-01.azurewebsites.net/api/purchase" method="POST">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Ticket Quantity</label>
                <input type="number" className="form-control" id="quantity" placeholder="Enter ticket quantity" required />
              </div>
              <div className="mb-3">
                <label htmlFor="creditCard" className="form-label">Credit Card</label>
                <input type="text" className="form-control" id="creditCard" placeholder="Enter your credit card number" required />
              </div>
              <div className="mb-3">
                <label htmlFor="expiration" className="form-label">Expiration Date</label>
                <input type="text" className="form-control" id="expiration" placeholder="MM/YY" required />
              </div>
              <div className="mb-3">
                <label htmlFor="securityCode" className="form-label">Security Code</label>
                <input type="text" className="form-control" id="securityCode" placeholder="Enter security code" required />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" required />
              </div>
              <div className="mb-3">
                <label htmlFor="province" className="form-label">Province</label>
                <input type="text" className="form-control" id="province" placeholder="Enter your province" required />
              </div>
              <div className="mb-3">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" required />
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" placeholder="Enter your country" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Artist Info Card */}
          <div className="col-lg-6 col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Nine Inch Nails</h5>
                <p className="card-text">
                  Nine Inch Nails is an American industrial rock band founded in 1988 by Trent Reznor in Cleveland, Ohio. Known for their intense live performances and innovative music, they have won multiple awards and are considered pioneers in their genre.
                </p>
                <a href="#" className="btn btn-secondary">View Other Shows</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
