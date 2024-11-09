import React from 'react';
import { MapPin } from 'lucide-react';
import locationImage from '../../assets/images/lisbon.png'; // Import the image

export default function LocationCard() {
    return (
        <div className="container d-flex justify-content-center my-5">
            <div 
                className="card shadow" 
                style={{ width: '24rem', maxHeight: '37.5rem', overflow: 'hidden' }} // Set max-height in rem
            >
                {/* Location Image with Overlay */}
                <div className="position-relative">
                    <img 
                        src={locationImage} // Use the imported image here
                        className="card-img-top"
                        alt="Location background"
                        style={{ maxHeight: '15rem', objectFit: 'cover' }} // Limit image height to keep within card max-height
                    />
                    <div 
                        className="position-absolute bottom-0 start-0 w-100 text-white p-3" 
                        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <h5 className="fw-bold mb-1">Lisbon</h5> {/* City Name */}
                        <p className="mb-0">Portugal</p> {/* Country */}
                    </div>
                </div>

                {/* Location Details */}
                <div className="card-body">
                    <div className="d-flex align-items-center mb-2 text-muted">
                        <MapPin className="me-2" size={18} />
                        <span>Lisbon, Portugal</span> {/* Full Location */}
                    </div>
                    
                    {/* City Description */}
                    <h6 className="fw-bold">About Lisbon</h6>
                    <p className="text-muted">
                        Lisbon is Portugal's hilly, coastal capital city. Known for its cafe culture 
                        and soulful Fado music, Lisbon offers historic architecture, vibrant nightlife, 
                        and stunning coastal views.
                    </p>
                </div>
            </div>
        </div>
    );
}
