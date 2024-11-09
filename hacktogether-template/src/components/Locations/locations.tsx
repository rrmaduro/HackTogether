import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Locations() {
    return (
    <nav className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-light p-5 rounded shadow ">
            <div className="card-body">
                <h5 className="card-title">Lisbon</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Portugal</h6>
                <p className="card-text">It's the capital of Portugal.</p>
            </div>
        </div>
    </nav>
    );
}