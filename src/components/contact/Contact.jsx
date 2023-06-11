import PropTypes from 'prop-types';
import { nameStyle, btnDelStyle } from 'components/styles';


export const ContactItem = ({ contact, handleDelete }) => (
  <li style={nameStyle}>
    {contact.name} : {contact.number}
    <button onClick={handleDelete} style={btnDelStyle}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

// import React from 'react';

// export const Contact = (props) => {
//   // Отримати дані про контакт з пропсів
//   const { name, phone, avatar } = props;

//   return (
//     <div className="contact">
//       <img src={avatar} alt={name} /> 
//       <div className="name">{name}</div> 
//       <div className="phone">{phone}</div> 
//     </div>
//   );
// }


