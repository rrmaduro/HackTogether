import React from 'react';
import { MapPin } from 'lucide-react';

// Define the types for the props
interface LocationCardProps {
  imageSrc: string;
  city: string;
  country: string;
  fullLocation: string;
  description: string;
}

// Functional component with prop types
const LocationCard: React.FC<LocationCardProps> = ({ imageSrc, city, country, fullLocation, description }) => {
  return (
    <div className="container d-flex justify-content-center my-5">
      <div className="card shadow" style={{ width: '24rem', maxHeight: '37.5rem', overflow: 'hidden' }}>
        {/* Location Image with Overlay */}
        <div className="position-relative">
          <img
            src={imageSrc} // Use the image prop here
            className="card-img-top"
            alt={`${city} background`}
            style={{ maxHeight: '15rem', objectFit: 'cover' }}
          />
          <div
            className="position-absolute bottom-0 start-0 w-100 text-white p-3"
            style={{ background: 'rgba(0, 0, 0, 0.5)' }}
          >
            <h5 className="fw-bold mb-1">{city}</h5>
            <p className="mb-0">{country}</p>
          </div>
        </div>

        {/* Location Details */}
        <div className="card-body">
          <div className="d-flex align-items-center mb-2 text-muted">
            <MapPin className="me-2" size={18} />
            <span>{fullLocation}</span>
          </div>

          <h6 className="fw-bold">About {city}</h6>
          <p className="text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
