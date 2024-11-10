import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
    return (
        <nav className="container-fluid min-vh-100 bg-danger" style={{ width: 'calc(100% - 50px)', marginRight: '0', marginTop: '80px', marginBottom: '0' }}>
            <div className='text-center'>
                <h1>Connect Across</h1>
                <h1>Cultures &</h1>
                <h1>Continents</h1>
                <p>Join a vibrant community where cultures converge. Share traditions, learn languages, and make meaningful connections with people worldwide.</p>
                {/* Wrap the button with Link to navigate to '/events' */}
                <Link to="/events">
                    <button type="submit" className="btn btn-primary">Start Exploring</button>
                </Link>
            </div>
        </nav>
    );
}
