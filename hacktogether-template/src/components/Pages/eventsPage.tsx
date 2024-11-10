import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import EventCard from '../Event/event'; // Ensure the path to EventCard is correct

// Import images for events with corresponding event names
import eventImageTraditionalJapaneseTeaCeremony from '../../assets/images/traditional_japanese_tea_ceremony.png'; 
import eventImageParisianArtExhibition from '../../assets/images/parisian_art_exhibition.png'; 
import eventImageMadridFlamencoNight from '../../assets/images/madrid_flamenco_night.png'; 
import eventImageRomeOperaNight from '../../assets/images/rome_opera_night.png';
import eventImageBerlinModernArtShowcase from '../../assets/images/berlin_modern_art_showcase.png';
import eventImageAmsterdamCanalBoatParty from '../../assets/images/amsterdam_canal_boat_party.png';
import eventImageLondonJazzNight from '../../assets/images/london_jazz_night.png'; // Example additional image
import eventImageNewYorkFashionShow from '../../assets/images/new_york_fashion_show.png'; // Example additional image
import eventImageTokyoSushiWorkshop from '../../assets/images/tokyo_sushi_workshop.png'; // Example additional image

const EventsPage: React.FC = () => {
  return (
    <div className="container my-3">
      <div className="row" style={{ marginTop: '7rem' }}>
        {/* Event 1 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageTraditionalJapaneseTeaCeremony}
              eventName="Traditional Japanese Tea Ceremony"
              hostName="Yuki Tanaka"
              eventTime="2:00 PM JST"
              eventLocation="Kyoto Cultural Center"
              attendees={45}
              description="Experience the ancient art of Japanese tea ceremony with master Yuki Tanaka. Learn about the ritual's history, significance, and proper etiquette."
            />
          </Link>
        </div>
        
        {/* Event 2 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageParisianArtExhibition}
              eventName="Parisian Art Exhibition"
              hostName="Marie Dubois"
              eventTime="5:00 PM CET"
              eventLocation="Louvre Museum"
              attendees={80}
              description="Join us for a tour of classic and contemporary art pieces at the Louvre, hosted by renowned Parisian curator Marie Dubois."
            />
          </Link>
        </div>
        
        {/* Event 3 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageMadridFlamencoNight}
              eventName="Madrid Flamenco Night"
              hostName="Carlos Sánchez"
              eventTime="8:00 PM CET"
              eventLocation="Flamenco Theatre Madrid"
              attendees={120}
              description="A passionate night of Flamenco dancing and music, led by expert Carlos Sánchez. Immerse yourself in the culture and rhythm of Spain."
            />
          </Link>
        </div>
      </div>

      <div className="row" style={{ marginTop: '1rem' }}>
        {/* Event 4 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageRomeOperaNight}
              eventName="Rome Opera Night"
              hostName="Giovanni Rossi"
              eventTime="7:00 PM CET"
              eventLocation="Teatro dell'Opera di Roma"
              attendees={150}
              description="Experience an unforgettable night at the opera in the heart of Rome, hosted by acclaimed conductor Giovanni Rossi."
            />
          </Link>
        </div>
        
        {/* Event 5 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageBerlinModernArtShowcase}
              eventName="Berlin Modern Art Showcase"
              hostName="Anna Weber"
              eventTime="6:00 PM CET"
              eventLocation="Berlin Art Gallery"
              attendees={60}
              description="Explore the cutting-edge world of modern art with Anna Weber, a celebrated artist and curator. Discover new perspectives on contemporary art."
            />
          </Link>
        </div>
        
        {/* Event 6 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageAmsterdamCanalBoatParty}
              eventName="Amsterdam Canal Boat Party"
              hostName="Sophie de Vries"
              eventTime="9:00 PM CEST"
              eventLocation="Amsterdam Canal"
              attendees={200}
              description="Enjoy a scenic boat ride through Amsterdam’s canals, with music, food, and drinks. Hosted by local event planner Sophie de Vries."
            />
          </Link>
        </div>
      </div>

      <div className="row" style={{ marginTop: '1rem' }}>
        {/* Event 7 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageLondonJazzNight}
              eventName="London Jazz Night"
              hostName="David Evans"
              eventTime="8:00 PM GMT"
              eventLocation="Royal Albert Hall"
              attendees={180}
              description="Join us for a soulful night of jazz music at the iconic Royal Albert Hall, hosted by renowned saxophonist David Evans."
            />
          </Link>
        </div>

        {/* Event 8 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageNewYorkFashionShow}
              eventName="New York Fashion Show"
              hostName="Chloe Martin"
              eventTime="7:30 PM EST"
              eventLocation="Madison Square Garden"
              attendees={250}
              description="Witness the latest in fashion trends at the New York Fashion Show, hosted by world-renowned designer Chloe Martin."
            />
          </Link>
        </div>

        {/* Event 9 */}
        <div className="col-md-4 mb-4">
          <Link to="/event/1" style={{ textDecoration: 'none' }}>
            <EventCard
              eventImageSrc={eventImageTokyoSushiWorkshop}
              eventName="Tokyo Sushi Workshop"
              hostName="Hiroshi Tanaka"
              eventTime="11:00 AM JST"
              eventLocation="Sushi Academy Tokyo"
              attendees={30}
              description="Learn the art of sushi making from expert Hiroshi Tanaka in a hands-on workshop at the famous Sushi Academy Tokyo."
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
