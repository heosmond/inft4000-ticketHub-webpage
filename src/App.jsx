import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles.css';

function App() {
  const [formData, setFormData] = useState({
    concertId: 34,
    name: '',
    email: '',
    phone: '',
    quantity: '',
    creditCard: '',
    expiration: '',
    securityCode: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required.';
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required.';
    if (!formData.quantity || formData.quantity <= 0 || formData.quantity > 6) newErrors.quantity = 'Quantity must be between 1 - 6';
    if (!formData.creditCard || !/^\d{16}$/.test(formData.creditCard)) newErrors.creditCard = 'Valid 16-digit credit card number is required.';
    if (!formData.expiration || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiration)) newErrors.expiration = 'Expiration date must be in MM/YY format.';
    if (!formData.securityCode || !/^\d{3}$/.test(formData.securityCode)) newErrors.securityCode = 'Valid 3-digit security code is required.';
    if (!formData.address) newErrors.address = 'Address is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    if (!formData.province) newErrors.province = 'Province is required.';
    if (!formData.postalCode || !/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/.test(formData.postalCode)) newErrors.postalCode = 'Valid postal code is required.';
    if (!formData.country) newErrors.country = 'Country is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' }); // Clear error for the field being updated
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch('https://nscc-0493304-tickethub-api-d4b0c7c0fzdze9a2.canadacentral-01.azurewebsites.net/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          concertId: 34,
          name: '',
          email: '',
          phone: '',
          quantity: '',
          creditCard: '',
          expiration: '',
          securityCode: '',
          address: '',
          city: '',
          province: '',
          postalCode: '',
          country: '',
        });
        setErrors({});
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const style = {  
    background: 'linear-gradient(90deg, rgba(77,38,103,1) 0%, rgba(120,48,48,1) 50%, rgba(128,92,41,1) 100%)',
    color: 'white',
    height: '30vh',
  };

  const form = {
    width: '400px',
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Ticket Quantity</label>
                <input type="number" className="form-control" id="quantity" placeholder="Enter ticket quantity" value={formData.quantity} onChange={handleChange} required />
                {errors.quantity && <div className="text-danger">{errors.quantity}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="creditCard" className="form-label">Credit Card</label>
                <input type="text" className="form-control" id="creditCard" placeholder="Enter your credit card number" value={formData.creditCard} onChange={handleChange} required />
                {errors.creditCard && <div className="text-danger">{errors.creditCard}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="expiration" className="form-label">Expiration Date</label>
                <input type="text" className="form-control" id="expiration" placeholder="MM/YY" value={formData.expiration} onChange={handleChange} required />
                {errors.expiration && <div className="text-danger">{errors.expiration}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="securityCode" className="form-label">Security Code</label>
                <input type="text" className="form-control" id="securityCode" placeholder="Enter security code" value={formData.securityCode} onChange={handleChange} required />
                {errors.securityCode && <div className="text-danger">{errors.securityCode}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
                {errors.address && <div className="text-danger">{errors.address}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" className="form-control" id="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
                {errors.city && <div className="text-danger">{errors.city}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="province" className="form-label">Province</label>
                <input type="text" className="form-control" id="province" placeholder="Enter your province" value={formData.province} onChange={handleChange} required />
                {errors.province && <div className="text-danger">{errors.province}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="postalCode" className="form-label">Postal Code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="Enter your postal code" value={formData.postalCode} onChange={handleChange} required />
                {errors.postalCode && <div className="text-danger">{errors.postalCode}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label>
                <input type="text" className="form-control" id="country" placeholder="Enter your country" value={formData.country} onChange={handleChange} required />
                {errors.country && <div className="text-danger">{errors.country}</div>}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>

          {/* Artist Info Card */}
          <div className="col-lg-6 col-12">
            <div className="card m-4">
              <div className="card-body">
                <img src="/trent.jpg" className='img-fluid pb-4 rounded'/>
                <h4 className="card-title bold">Nine Inch Nails</h4>
                <p className="card-text">
                  Nine Inch Nails is an industrial rock project led by multi-instrumentalist Trent Reznor, the only constant member for many years until Atticus Ross officially joined in 2016, often selecting a cast of different band members for live performances. It is known for producing several highly influential records during the 1990s encompassing a wide array of genres, including industrial and electronic rock. After eight studio releases, the project was put on hiatus by Reznor to focus on other projects in 2009 before returning with announced tour dates stretching across the United States and foreign countries on March 11, 2013. Nine Inch Nails has been nominated for 13 Grammy Awards, winning twice for “Wish” and “Happiness In Slavery.”
                </p>
                <a href="#" className="btn btn-secondary">View Other Shows</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
