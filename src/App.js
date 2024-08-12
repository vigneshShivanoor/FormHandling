import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="col-md-4">
          <label htmlFor="firstName" className="form-label">First name</label>
          <input type="text" className="form-control" id="firstName" value={formData.firstName} onChange={handleChange} required />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="lastName" className="form-label">Last name</label>
          <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleChange} required />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="username" className="form-label">Username</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} required />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">City</label>
          <input type="text" className="form-control" id="city" value={formData.city} onChange={handleChange} required />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="state" className="form-label">State</label>
          <select className="form-select" id="state" value={formData.state} onChange={handleChange} required>
            <option selected disabled value="">Choose...</option>
            <option value="State 1">State 1</option>
            <option value="State 2">State 2</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="zip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="zip" value={formData.zip} onChange={handleChange} required />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label>
            <div className="invalid-feedback">You must agree before submitting.</div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  );
}

export default App;
