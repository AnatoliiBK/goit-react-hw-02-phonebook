export const ContactForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' :][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash, space, or colon. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
  
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
  
      <button type="submit">Add contact</button>
    </form>
  );




// const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//       Phone Number:
//       <input
//         type="tel"
//         name="number"
//         value={number}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//         onChange={handleChange}
//       />
//     </label>

//     <button type="submit">Add Contact</button>
//   </form>
// );






// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';

// export const Form = (props) => {
//   // Отримати функцію додавання контакту з пропсів
//   const { addContact } = props;

//   // Створити стан для імені контакту
//   const [name, setName] = useState('');

//   // Функція для обробки зміни значення поля вводу
//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   // Функція для обробки натискання кнопки "Додати"
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Перевірити чи ім'я не порожнє
//     if (name) {
//       // Створити новий контакт з унікальним id
//       const newContact = {
//         id: nanoid(),
//         name: name
//       };
//       // Викликати функцію додавання контакту з новим контактом
//       addContact(newContact);
//       // Очистити поле вводу
//       setName('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Ім'я:</label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         value={name}
//         onChange={handleChange}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Ім'я може містити тільки літери, апостроф, дефіс та пробіли. Наприклад: Адріан, Якоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
//         required
//       />
//       <button type="submit">Додати</button>
//     </form>
//   );
// }


