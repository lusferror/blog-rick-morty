import React from 'react';

export default function Card({name, status, image, location, species }) {
  return (
    <div>
        <div className='col-4'>
            <img src={image} />
        </div>
        <div className='col-8'>
            <strong>{name}</strong><br/>
            {status} - {species} <br />
            <span className='text-secondary'>
                Last know location:
            </span><br />
            {location?.name}<br />
        </div>
    </div>
  );
}
