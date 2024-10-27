import React from 'react';
import { useParams } from 'react-router-dom';
import { Rooms } from '../Data/Data';

const RoomDetail = () => {
  const { id } = useParams();
  const room = Rooms.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="room-detail">
      <img src={room.bgImage} alt={room.Heading} className="room-image" />
      <h1>{room.Heading}</h1>
      <p className="room-price">{room.price}</p>
      <div className="room-info">
        <div>
          <img src={room.size.icon} alt="size icon" />
          <span>{room.size.num}</span>
        </div>
        <div>
          <img src={room.guests.icon} alt="guests icon" />
          <span>{room.guests.num}</span>
        </div>
        <div>
          <img src={room.bed.icon} alt="bed icon" />
          <span>{room.bed.num}</span>
        </div>
        <div>
          <img src={room.bathroom.icon} alt="bathroom icon" />
          <span>{room.bathroom.num}</span>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
