import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing to individual event pages
import { Carousel, CarouselItem } from 'reactstrap'; // Correct Carousel import from reactstrap
import EventCard from '../Event/event'; // The EventCard component for displaying individual events

// Import event images for this location
import eventImageParisianArtExhibition from '../../assets/images/parisian_art_exhibition.png'; 
import eventImageLondonJazzNight from '../../assets/images/london_jazz_night.png'; 
import eventImageRomeOperaNight from '../../assets/images/rome_opera_night.png';
import eventImageBerlinModernArtShowcase from '../../assets/images/berlin_modern_art_showcase.png';

const SingleLocationPage: React.FC = () => {
  // State to track the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle the next slide
  const next = () => {
    const nextIndex = activeIndex === 3 ? 0 : activeIndex + 1; // Loop back to first item when the last item is reached
    setActiveIndex(nextIndex);
  };

  // Function to handle the previous slide
  const previous = () => {
    const prevIndex = activeIndex === 0 ? 3 : activeIndex - 1; // Loop back to the last item when the first item is reached
    setActiveIndex(prevIndex);
  };

  return (
    <div className="container my-3">
      {/* Location Header */}
      <div className="text-center my-4">
        <h1>Paris</h1>
        <p className="lead">Explore the best events happening in Paris. From art exhibitions to jazz nights, there's something for everyone!</p>
      </div>

      {/* Carousel for Events */}
      <div className="my-4">
        <Carousel
          activeIndex={activeIndex} // Control active index of the carousel
          next={next} // Function to go to the next item
          previous={previous} // Function to go to the previous item
        >
          {/* Event 1 */}
          <CarouselItem>
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
          </CarouselItem>

          {/* Event 2 */}
          <CarouselItem>
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
          </CarouselItem>

          {/* Event 3 */}
          <CarouselItem>
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
          </CarouselItem>

          {/* Event 4 */}
          <CarouselItem>
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
          </CarouselItem>
        </Carousel>
      </div>

      {/* You can add more events listed below or additional content */}
    </div>
  );
};

export default SingleLocationPage;
