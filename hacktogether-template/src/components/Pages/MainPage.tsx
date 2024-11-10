import React from 'react';
import { Link } from 'react-router-dom';

// Import the video file
import backgroundVideo from '../../assets/videos/mainPage.mp4';

// Import event images
import eventImageTraditionalJapaneseTeaCeremony from '../../assets/images/traditional_japanese_tea_ceremony.png'; 
import eventImageParisianArtExhibition from '../../assets/images/parisian_art_exhibition.png'; 
import eventImageMadridFlamencoNight from '../../assets/images/madrid_flamenco_night.png'; 
import eventImageRomeOperaNight from '../../assets/images/rome_opera_night.png';
import eventImageBerlinModernArtShowcase from '../../assets/images/berlin_modern_art_showcase.png';
import eventImageAmsterdamCanalBoatParty from '../../assets/images/amsterdam_canal_boat_party.png';

// Import EventCard component
import EventCard from '../Event/event'; // Ensure the path to EventCard is correct

interface MainPageProps {
  isDrawerOpen: boolean;
}

export default function MainPage({ isDrawerOpen }: MainPageProps) {
  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
      style={{
        padding: 0,
        margin: 0, // Ensure no margin that affects layout
        transition: 'width 0.3s ease-in-out', // Smooth transition for width change
      }}
    >
      {/* Hero Section with Video Background */}
      <div
        className="position-relative w-100 d-flex justify-content-center align-items-center text-center"
        style={{
          height: '100vh', // Full height for the hero section
          marginTop:'-23px',
          background: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make the text stand out
          color: 'white', // Text color for visibility
        }}
      >
        {/* Video Background (Only for the Hero Section) */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            zIndex: -1,
            objectFit: 'cover', // Ensure the video covers the entire section
          }}
        >
          <video
            autoPlay
            loop
            muted
            className="w-100 h-100"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              objectFit: 'cover', // Ensures the video fills the entire area without distortion
            }}
          >
            <source
              src={backgroundVideo} // Use the imported video here
              type="video/mp4"
            />
            {/* Optionally add other video formats */}
            <source
              src="your-video-url.webm" // Replace with your video URL (WebM version)
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Text and Button */}
        <div className="text-center position-relative z-index-1">
          <h1 className="display-4 fw-bold">Connect Across</h1>
          <h1 className="display-4 fw-bold">Cultures &</h1>
          <h1 className="display-4 fw-bold">Continents</h1>
          <p className="lead mb-4">
            Join a vibrant community where cultures converge. Share traditions, explore the world's top destinations, and make meaningful connections with people worldwide.
          </p>

          {/* Explore Button */}
          <Link to="/events">
            <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg">
              Start Exploring
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="container py-5">
        <h2 className="text-center text-primary">About CultureConnect</h2>
        <p className="lead text-center">
          CultureConnect is your platform to connect with like-minded individuals across the globe. Whether you're looking to explore new destinations, share your travel experiences, or discover the best places to visit, we make it easy for you to engage with people from all walks of life.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-primary">Key Features</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Travel Events</h5>
                  <p className="card-text">Join exciting travel events and share your favorite destinations with others.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Top Travel Destinations</h5>
                  <p className="card-text">Discover the best places to visit around the world and plan your next adventure.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Travel Networking</h5>
                  <p className="card-text">Connect with other travelers, share experiences, and plan trips with like-minded individuals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container py-5">
        <h2 className="text-center text-primary">What Our Users Say</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"CultureConnect has opened my eyes to new destinations. I've met amazing people and explored hidden gems around the world!"</p>
                <footer className="blockquote-footer">Sarah, New York</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"The travel events are fantastic! I’ve found so many great spots to visit thanks to this platform."</p>
                <footer className="blockquote-footer">John, London</footer>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <p className="card-text">"I’ve discovered incredible travel locations through CultureConnect. It’s the perfect place for global travelers!"</p>
                <footer className="blockquote-footer">Maria, Tokyo</footer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="text-primary">Upcoming Events</h2>
          <p className="lead">Check out some exciting travel events happening soon! Be a part of our global community and share your travel experiences.</p>
          <div className="row">
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
              <Link to="/event/2" style={{ textDecoration: 'none' }}>
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
              <Link to="/event/3" style={{ textDecoration: 'none' }}>
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
        </div>
      </section>

      {/* Call to Action Section at the Bottom */}
      <section className="container text-center py-5 mt-auto">
        <h2 className="text-primary">Ready to Join?</h2>
        <p className="lead mb-4">Become a part of the global travel community and start making connections today!</p>
        <Link to="/sign-up">
          <button className="btn btn-primary btn-lg">Join Now</button>
        </Link>
      </section>
    </div>
  );
}
