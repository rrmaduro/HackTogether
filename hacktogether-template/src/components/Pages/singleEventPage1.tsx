import ReactTogeth, { useState, useEffect, useRef } from 'react-together';
import { Heart, Bookmark, Users, MessageSquare } from 'lucide-react';
import eventImageTraditionalJapaneseTeaCeremony from '../../assets/images/traditional_japanese_tea_ceremony.png';

// Replace this with the actual Multisync library or WebSocket API you're using
import MultisyncAPI from 'multisync-api-client';  // Hypothetical import, replace with the correct library

const event = {
  name: "Traditional Japanese Tea Ceremony",
  location: "Kyoto Cultural Center",
  description: "Experience the ancient art of Japanese tea ceremony with master Yuki Tanaka. Learn about the ritual's history, significance, and proper etiquette.",
  date: "November 20, 2024",
  time: "2:00 PM JST",
  initialLikes: 245,
  initialSaves: 120,
  attendees: 45,
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

  const messagesEndRef = useRef(null);
  const socket = useRef(null); // Multisync or WebSocket connection

  // Connect to Multisync API when the component mounts
  useEffect(() => {
    // Initialize the Multisync API client with your API key
    socket.current = new MultisyncAPI({ apiKey: '' });

    // Join the chat room or channel for the event
    socket.current.joinRoom('event-chat-room');  // Replace with the actual room name/channel

    // Listen for incoming messages from other users
    socket.current.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on unmount
    return () => {
      socket.current.disconnect();
    };
  }, []);

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

      // Send the new message to the Multisync API server
      socket.current.sendMessage('event-chat-room', newMsg);

      // Optimistically update the local state to display the new message
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage(''); // Clear the input field
    }
  };

  // Handle "Enter" key press to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the default line break behavior
      handleSendMessage();
    }
  };

  // Scroll to the latest message whenever messages change
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
              src={eventImageTraditionalJapaneseTeaCeremony} 
              alt={event.name} 
              className="card-img-top" 
              style={{ height: '400px', objectFit: 'cover' }} 
            />
            <div className="card-body">
              <h2 className="card-title">{event.name}</h2>
              <p className="text-muted">{event.date} at {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
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
                  onKeyDown={handleKeyPress} // This listens for "Enter" key
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
