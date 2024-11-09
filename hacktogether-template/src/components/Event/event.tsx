import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Event() {
    return (
    <nav className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-light p-5 rounded shadow ">
            <div className="card-body">
                <h5 className="card-title">Lisbon, Portugal</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Tiago Nunes</h6>
                <p className="card-text">I'm looking for good food to try in Portugal.</p>
                <p>2/nov 16:45</p>
            </div>
        </div>
    </nav>
    );
}