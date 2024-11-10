import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import EventCard from '../Event/event'; // Ensure the path to EventCard is correct

// Import images for events with corresponding event names
import eventImageTraditionalJapaneseTeaCeremony from '../../assets/images/traditional_japanese_tea_ceremony.png';
import eventImageParisianArtExhibition from '../../assets/images/parisian_art_exhibition.png';
import eventImageMadridFlamencoNight from '../../assets/images/madrid_flamenco_night.png';
import eventImageRomeOperaNight from '../../assets/images/rome_opera_night.png';
import eventImageBerlinModernArtShowcase from '../../assets/images/berlin_modern_art_showcase.png';
import eventImageAmsterdamCanalBoatParty from '../../assets/images/amsterdam_canal_boat_party.png';
import eventImageLondonJazzNight from '../../assets/images/london_jazz_night.png';
import eventImageNewYorkFashionShow from '../../assets/images/new_york_fashion_show.png';
import eventImageTokyoSushiWorkshop from '../../assets/images/tokyo_sushi_workshop.png';

// Sample event data
const events = [
  {
    id: 1,
    eventImageSrc: eventImageTraditionalJapaneseTeaCeremony,
    eventName: 'Traditional Japanese Tea Ceremony',
    hostName: 'Yuki Tanaka',
    eventTime: '2:00 PM JST',
    eventLocation: 'Kyoto Cultural Center',
    attendees: 45,
    description: 'Experience the ancient art of Japanese tea ceremony with master Yuki Tanaka.',
  },
  {
    id: 2,
    eventImageSrc: eventImageParisianArtExhibition,
    eventName: 'Parisian Art Exhibition',
    hostName: 'Marie Dubois',
    eventTime: '5:00 PM CET',
    eventLocation: 'Louvre Museum',
    attendees: 80,
    description: 'Join us for a tour of classic and contemporary art pieces at the Louvre.',
  },
  {
    id: 3,
    eventImageSrc: eventImageMadridFlamencoNight,
    eventName: 'Madrid Flamenco Night',
    hostName: 'Carlos Sánchez',
    eventTime: '8:00 PM CET',
    eventLocation: 'Flamenco Theatre Madrid',
    attendees: 120,
    description: 'A passionate night of Flamenco dancing and music.',
  },
  // Add more events as needed
];

const MyEventsPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [likedEventIds] = useState([1, 3]); // For example, the user has liked events 1 and 3

  // Filter events to only show the liked ones
  const likedEvents = events.filter(event => likedEventIds.includes(event.id));

  // Function to handle card click and navigate to event details
  const handleCardClick = (eventId: number) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="container my-3">
      <div className="row" style={{ marginTop: '7rem' }}>
        {likedEvents.length > 0 ? (
          likedEvents.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div 
                onClick={() => handleCardClick(event.id)} // Add click handler
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }} // Pointer cursor and equal height
              >
                <EventCard
                  eventImageSrc={event.eventImageSrc}
                  eventName={event.eventName}
                  hostName={event.hostName}
                  eventTime={event.eventTime}
                  eventLocation={event.eventLocation}
                  attendees={event.attendees}
                  description={event.description}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h3>No liked events found</h3>
            <p>You have not liked any events yet. Start liking some!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEventsPage;
