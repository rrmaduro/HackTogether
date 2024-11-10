import React from 'react';
import { Link } from 'react-router-dom'; // For routing to individual location pages
import LocationCard from '../Locations/locations'; // Ensure this path is correct

// Import images for locations
import lisbonImage from '../../assets/images/lisbon.png';
import parisImage from '../../assets/images/paris.png';
import madridImage from '../../assets/images/madrid.png';
import romeImage from '../../assets/images/rome.png';
import berlinImage from '../../assets/images/berlin.png';
import amsterdamImage from '../../assets/images/amsterdam.png';
import londonImage from '../../assets/images/london.png'; // New location image
import newYorkImage from '../../assets/images/new-york.png'; // New location image
import tokyoImage from '../../assets/images/tokyo.png'; // New location image

const LocationsPage: React.FC = () => {
  return (
    <div className="container my-5">
      {/* Row 1 */}
      <div className="row g-4" style={{ marginBottom: '20px' }}>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={lisbonImage}
              city="Lisbon"
              country="Portugal"
              fullLocation="Lisbon, Portugal"
              description="Lisbon is Portugal's coastal capital city. Known for its cafe culture and soulful Fado music, offering historic architecture and stunning coastal views."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={parisImage}
              city="Paris"
              country="France"
              fullLocation="Paris, France"
              description="Paris, France's capital, is known for its art, fashion, gastronomy, and culture. The city is famous for landmarks such as the Eiffel Tower and Notre-Dame Cathedral."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={madridImage}
              city="Madrid"
              country="Spain"
              fullLocation="Madrid, Spain"
              description="Madrid is Spain's central capital, known for its art museums, vibrant nightlife, and historic landmarks, including the Royal Palace and Plaza Mayor."
            />
          </Link>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row g-4" style={{ marginTop: '-7rem' }}>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={romeImage}
              city="Rome"
              country="Italy"
              fullLocation="Rome, Italy"
              description="Rome, the capital of Italy, known for its 3,000 years of cultural influence. Landmarks include the Colosseum, the Roman Forum, and the Vatican City."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={berlinImage}
              city="Berlin"
              country="Germany"
              fullLocation="Berlin, Germany"
              description="Berlin is Germany’s capital and cultural hub, famous for its modern landmarks, such as the Berlin Wall, Brandenburg Gate, and vibrant art scene."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={amsterdamImage}
              city="Amsterdam"
              country="Netherlands"
              fullLocation="Amsterdam, Netherlands"
              description="Capital of the Netherlands, known for its extensive canal system and narrow houses with gabled facades, while being a hub for culture."
            />
          </Link>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row g-4" style={{ marginTop: '-6rem' }}>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={londonImage}
              city="London"
              country="United Kingdom"
              fullLocation="London, United Kingdom"
              description="London, the capital of England, is known for its history, culture, and landmarks like the Tower of London, Big Ben, and Buckingham Palace."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={newYorkImage}
              city="New York"
              country="United States"
              fullLocation="New York, United States"
              description="New York City, the largest city in the United States, is known for its iconic skyline, Central Park, Times Square, and diverse cultural scene."
            />
          </Link>
        </div>
        <div className="col-md-4 d-flex">
          <Link to="/location/lisbon" style={{ textDecoration: 'none' }}>
            <LocationCard
              imageSrc={tokyoImage}
              city="Tokyo"
              country="Japan"
              fullLocation="Tokyo, Japan"
              description="Tokyo, the capital of Japan, is known for its bustling city life, shopping districts like Shibuya, and landmarks like the Tokyo Tower and Senso-ji Temple."
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
