import { ContactItem } from "./Contact";
import { Filter } from "components/Filter";

export const ContactList = ({ contacts, filter, handleChange, handleDelete }) => (
  <div>
    <h2>Contacts</h2>

    <Filter filter={filter} handleChange={handleChange} />

    {contacts.length === 0 ? (
      <p>No contacts yet.</p>
    ) : (
      <ul>
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            handleDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    )}
  </div>
);




// export const ContactList = ({ contacts }) => (
//   <div>
//     <h2>Contact List</h2>
//     {contacts.length === 0 ? (
//       <p>No contacts yet.</p>
//     ) : (
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             {contact.name} - {contact.number}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );












// import React from 'react';
// import { Contact } from './Contact';

// export const ContactList = (props) => {
//   // Отримати масив контактів з пропсів
//   const { contacts } = props;

//   // Використати map метод для перетворення кожного контакту в JSX елемент
//   const contactItems = contacts.map((contact) => (
//     <li key={contact.id}>
//       <Contact name={contact.name} phone={contact.phone} avatar={contact.avatar} />
//     </li>
//   ));

//   // Повернути список JSX елементів у вигляді ненумерованого списку
//   return <ul>{contactItems}</ul>;
// }


