import React, { useState, useEffect, useRef } from 'react';
import { Heart, Bookmark, Users, MessageSquare } from 'lucide-react';
import eventImageParisianArtExhibition from '../../assets/images/parisian_art_exhibition.png';

// Event data for the Parisian Art Exhibition
const event = {
  name: "Parisian Art Exhibition",
  location: "Louvre Museum",
  description: "Join us for a tour of classic and contemporary art pieces at the Louvre, hosted by renowned Parisian curator Marie Dubois.",
  date: "November 20, 2024",
  time: "5:00 PM CET",
  initialLikes: 300,
  initialSaves: 150,
  attendees: 80,
  host: "Marie Dubois",
};

const EventPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Sarah', text: 'Welcome to the live chat!', isUser: false, time: '2:30 PM' },
    { id: 2, user: 'John', text: 'Feel free to share your thoughts!', isUser: false, time: '2:32 PM' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [likes, setLikes] = useState(event.initialLikes);
  const [saves, setSaves] = useState(event.initialSaves);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to send a message
  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: 'You',
        text: newMessage,
        isUser: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage('');
    }
  };

  // Scroll to the latest message when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Event Details Section */}
        <div className="col-lg-8 col-md-12 mb-4">
          <div className="card shadow-lg border-0 rounded">
            <img 
              src={eventImageParisianArtExhibition} 
              alt={event.name} 
              className="card-img-top" 
              style={{ height: '400px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">{event.name}</h2>
              <p className="text-muted">{event.date} at {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Hosted by:</strong> {event.host}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="d-flex align-items-center" onClick={() => setLiked(!liked)}>
                  <Heart className="me-2" style={{ color: liked ? 'red' : 'black' }} /> 
                  <span>{likes} Likes</span>
                </div>
                <div className="d-flex align-items-center" onClick={() => setSaved(!saved)}>
                  <Bookmark className="me-2" style={{ color: saved ? 'gray' : 'black' }} /> 
                  <span>{saves} Saves</span>
                </div>
                <div className="d-flex align-items-center">
                  <Users className="me-2" /> <span>{event.attendees} People Attending</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="col-lg-4 col-md-12 mb-4">
          <div className="card shadow-lg rounded" style={{ height: '100%', border: '2px solid #dee2e6', borderRadius: '15px', backgroundColor: '#f9fafb' }}>
            <div className="card-header text-white text-center" style={{ background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', padding: '10px 0' }}>
              <h4 className="m-0">Live Chat</h4>
            </div>
            <div className="card-body d-flex flex-column" style={{ padding: '20px' }}>
              <div className="chat-box p-3 mb-3 rounded" style={{ height: '483px', overflowY: 'scroll', backgroundColor: '#ffffff', boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.1)' }}>
                {messages.map((message) => (
                  <div key={message.id} className={`mb-3 d-flex ${message.isUser ? 'justify-content-end' : 'justify-content-start'}`}>
                    <div className="p-2 rounded" style={{ maxWidth: '70%', backgroundColor: message.isUser ? '#d1e7dd' : '#f8f9fa', color: message.isUser ? '#0f5132' : '#495057', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '15px' }}>
                      <div className="d-flex justify-content-between">
                        <span className="font-weight-bold">{message.user}</span>
                        <span className="text-muted" style={{ fontSize: '0.75rem' }}>{message.time}</span>
                      </div>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Invisible div to enable auto-scroll */}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  style={{ borderRadius: '5px 0 0 5px' }}
                />
                <button className="btn btn-primary" onClick={handleSendMessage} style={{ borderRadius: '0 5px 5px 0' }}>
                  <MessageSquare />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
