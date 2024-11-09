import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import eventImage from '../../assets/images/lisbon.png'; // Import the image

export default function EventCard() {
    return (
        <div className="container d-flex justify-content-center my-5">
            <div 
                className="card shadow" 
                style={{ width: '24rem', maxHeight: '37.5rem', overflow: 'hidden' }} // Set max-height in rem
            >
                {/* Event Image with Overlay */}
                <div className="position-relative">
                    <img 
                        src={eventImage} // Use the imported image here
                        className="card-img-top"
                        alt="Event background"
                        style={{ maxHeight: '15rem', objectFit: 'cover' }} // Limit image height to keep within card max-height
                    />
                    <div 
                        className="position-absolute bottom-0 start-0 w-100 text-white p-3" 
                        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <h5 className="fw-bold mb-1">Traditional Japanese Tea Ceremony</h5>
                        <p className="mb-0">Hosted by Yuki Tanaka</p>
                    </div>
                </div>

                {/* Event Details */}
                <div className="card-body">
                    <div className="d-flex align-items-center mb-2 text-muted">
                        <Calendar className="me-2" size={18} />
                        <span>2:00 PM JST</span>
                        <MapPin className="ms-3 me-2" size={18} />
                        <span>Kyoto Cultural Center</span>
                        <Users className="ms-3 me-2" size={18} />
                        <span>45 attending</span>
                    </div>
                    
                    {/* Event Description */}
                    <h6 className="fw-bold">About this event</h6>
                    <p className="text-muted">
                        Experience the ancient art of Japanese tea ceremony with master Yuki Tanaka. 
                        Learn about the ritual's history, significance, and proper etiquette.
                    </p>
                </div>
            </div>
        </div>
    );
}
