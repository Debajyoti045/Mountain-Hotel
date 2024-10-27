import React from 'react';
import { useParams } from 'react-router-dom';
import { Rooms } from '../Data/Data';
import '../../CSS/RoomDetail.css';

const RoomDetail = () => {
  const { id } = useParams();
  const room = Rooms.find((room) => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="room-detail-container">
      <div className="room-detail-left">
        <h1 className="room-heading">{room.Heading}</h1>
        <p className="room-description">
          {room.roomDescription}
        </p>
        <img src={room.bgImage} alt={room.Heading} className="room-image" />

        <h2 className="section-heading">Room Facilities</h2>
        <p className="room-facilities-description">
          {room.roomFacilityDescription}
        </p>
        <div className="room-facilities">
          <div><img src="../../public/assets/wifi.png" alt="Wifi" /> Wifi</div>
          <div><img src="../../public/assets/housekeeper.png" alt="Coffee" /> Coffee</div>
          <div><img src="../../public/assets/swimmingpoll.png" alt="Bath" /> Bath</div>
          <div><img src="../../public/assets/car.png" alt="Parking" /> Parking Space</div>
          <div><img src="../../public/assets/swimmingpoll.png" alt="Swimming Pool" /> Swimming Pool</div>
          <div><img src="../../public/assets/breakfast.png" alt="Breakfast" /> Breakfast</div>
        </div>
      </div>

      <div className="room-detail-right">
        <div className="reservation-container">
          <h2>Your Reservation</h2>
          <form className="reservation-form">
            <label>Check-in</label>
            <input type="date" />

            <label>Check-out</label>
            <input type="date" />

            <label>Adults</label>
            <select>
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>

            <label>Children</label>
            <select>
              <option>0 Children</option>
              <option>1 Child</option>
              <option>2 Children</option>
            </select>

            <button type="button" className="book-now-btn">Book Now for {room.price}</button>
          </form>
        </div>

        <div className="hotel-rules-container">
          <h2 className="section-heading">Hotel Rules</h2>
          <ul className="hotel-rules">
            <li>Check-in: 3:00 PM - 9:00 PM</li>
            <li>Check-out: 10:30 AM</li>
            <li>No Pets</li>
            <li>No Smoking</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
