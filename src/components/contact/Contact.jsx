import React from 'react';

export const Contact = (props) => {
  // Отримати дані про контакт з пропсів
  const { name, phone, avatar } = props;

  return (
    <div className="contact">
      <img src={avatar} alt={name} /> 
      <div className="name">{name}</div> 
      <div className="phone">{phone}</div> 
    </div>
  );
}


