import React, { useState } from 'react';
import { Heart, Bookmark, Users, MessageSquare } from 'lucide-react';

import eventImageTraditionalJapaneseTeaCeremony from '../../assets/images/traditional_japanese_tea_ceremony.png';

// Dummy data for the event
const event = {
  name: "CultureConnect Meetup",
  location: "New York, Central Park",
  description: "Join us for a cultural exchange in Central Park. Meet new people, share ideas, and have fun!",
  date: "November 20, 2024",
  time: "3:00 PM",
  initialLikes: 245,
  initialSaves: 120,
  attendees: 50,
};

const EventPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]); // For chat messages
  const [newMessage, setNewMessage] = useState<string>(''); // New message input state

  // States for likes, saves, and liked status
  const [likes, setLikes] = useState<number>(event.initialLikes);
  const [saves, setSaves] = useState<number>(event.initialSaves);
  const [liked, setLiked] = useState<boolean>(false); // Track if the event is liked
  const [saved, setSaved] = useState<boolean>(false); // Track if the event is saved

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  // Handle like button click
  const handleLikeClick = () => {
    setLiked(!liked); // Toggle the liked state
    setLikes(liked ? likes - 1 : likes + 1); // Increment or decrement likes based on current state
  };

  // Handle save button click
  const handleSaveClick = () => {
    setSaved(!saved); // Toggle the saved state
    setSaves(saved ? saves - 1 : saves + 1); // Increment or decrement saves based on current state
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Event Details Section */}
        <div className="col-md-8">
          <img 
            src={eventImageTraditionalJapaneseTeaCeremony} 
            alt={event.name} 
            className="img-fluid rounded" 
            style={{ maxHeight: '400px', objectFit: 'cover' }} 
          />
          <h2>{event.name}</h2>
          <p className="text-muted">{event.date} at {event.time}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Description:</strong> {event.description}</p>
          
          {/* Event Stats */}
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center" onClick={handleLikeClick}>
              {/* Conditional color for the heart icon */}
              <Heart className="me-2" style={{ color: liked ? 'red' : 'black' }} /> 
              <span>{likes} Likes</span>
            </div>
            <div className="d-flex align-items-center" onClick={handleSaveClick}>
              {/* Conditional color for the bookmark icon */}
              <Bookmark className="me-2" style={{ color: saved ? 'gray' : 'black' }} /> 
              <span>{saves} Saves</span>
            </div>
            <div className="d-flex align-items-center">
              <Users className="me-2" /> <span>{event.attendees} People Attending</span>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="col-md-4">
          <div className="border rounded p-3">
            <h4>Live Chat</h4>
            <div className="chat-box" style={{ height: '300px', overflowY: 'scroll' }}>
              {messages.map((message, index) => (
                <div key={index} className="mb-3">
                  <div className="bg-light p-2 rounded">{message}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                className="btn btn-primary ms-2"
                onClick={handleSendMessage}
              >
                <MessageSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
