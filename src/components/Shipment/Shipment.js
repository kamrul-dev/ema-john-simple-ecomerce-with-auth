import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumber = event => {
        setPhone(event.target.value);
    }
    const handleCreateUser = event => {
        event.preventDefault();

    }

    return (
        <div className="form-container">
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="password" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone Number</label>
                        <input onBlur={handlePhoneNumber} type="text" name="phone" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                    <p style={{ color: 'red' }}>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default Shipment;