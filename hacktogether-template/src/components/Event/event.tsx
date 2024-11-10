
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Heart as HeartOutline, Heart as HeartFilled, Bookmark } from 'lucide-react';

type EventCardProps = {
  eventImageSrc: string;
  eventName: string;
  hostName: string;
  eventTime: string;
  eventLocation: string;
  attendees: number;
  description: string;
};

const EventCard: React.FC<EventCardProps> = ({
  eventImageSrc,
  eventName,
  hostName,
  eventTime,
  eventLocation,
  attendees,
  description
}) => {
  // State to manage the liked/unliked state, like count, and saved state
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // State to track the number of likes
  const [saved, setSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(0); // State to track the number of saves

  // Toggle the liked state and update the like count
  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1); // Update like count based on the current state
  };

  // Toggle the saved state and update the save count
  const handleSaveClick = () => {
    setSaved(!saved);
    setSaveCount(saved ? saveCount - 1 : saveCount + 1); // Update save count based on the current state
  };

  return (
    <div className="card shadow h-100 d-flex flex-column" style={{ borderRadius: '8px' }}>
      {/* Event Image */}
      <div className="position-relative">
        <img
          src={eventImageSrc}
          className="card-img-top"
          alt={eventName}
          style={{ height: '200px', objectFit: 'cover' }} // Ensure images cover the card
        />
        <div
          className="position-absolute bottom-0 start-0 w-100 text-white p-3"
          style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        >
          <h5 className="fw-bold mb-1">{eventName}</h5>
          <p className="mb-0">{hostName}</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="card-body flex-grow-1 d-flex flex-column">
        <div className="d-flex align-items-center mb-2 text-muted">
          <Calendar className="me-2" size={18} />
          <span>{eventTime}</span>
          <MapPin className="ms-3 me-2" size={18} />
          <span>{eventLocation}</span>
          <Users className="ms-3 me-2" size={18} />
          <span>{attendees} attending</span>
        </div>

        {/* Event Description */}
        <h6 className="fw-bold">About this event</h6>
        <p className="text-muted">{description}</p>

        {/* Buttons container */}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          {/* Heart Button (Like) */}
          <div className="d-flex align-items-center">
            <button
              className="btn p-0"
              style={{ background: 'none', border: 'none' }}
              onClick={handleLikeClick}
            >
              {liked ? (
                <HeartFilled size={24} color="red" />
              ) : (
                <HeartOutline size={24} color="gray" />
              )}
            </button>
            <span className="ms-2">
              {likeCount} {likeCount === 1 ? 'like' : 'likes'}
            </span>
          </div>

          {/* Save Button */}
          <div className="d-flex align-items-center">
            <button
              className="btn p-0"
              style={{ background: 'none', border: 'none' }}
              onClick={handleSaveClick}
            >
              <Bookmark
                size={24}
                color={saved ? 'black' : 'gray'}
              />
            </button>
            <span className="ms-2">
              {saveCount} {saveCount === 1 ? 'save' : 'saves'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
