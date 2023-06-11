import React, { Component } from 'react';
import { ContactForm } from './form/Form';
import { ContactList } from './contact/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  handleChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { contacts } = this.state;
    const { name, number } = e.target.elements;

    const isDuplicateContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (isDuplicateContact) {
      const duplicateContact = contacts.find(
        (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
      );
      alert(`${duplicateContact.name} is already in contacts.`);
      return;
    }

    const newContact = {
      name: name.value,
      number: number.value
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));

    name.value = '';
    number.value = '';
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((_, i) => i !== index)
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm handleSubmit={this.handleSubmit} />

        <ContactList
          contacts={filteredContacts}
          filter={filter}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
















// import React, { Component } from 'react';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   };

//   handleChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { contacts } = this.state;
//     const { name, number } = e.target.elements;

//     const isDuplicateContact = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
//     );

//     if (isDuplicateContact) {
//       const duplicateContact = contacts.find(
//         (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
//       );
//       alert(`${duplicateContact.name} is already in contacts.`);
//       return;

//     }

//     const newContact = {
//       name: name.value,
//       number: number.value
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact]
//     }));

//     name.value = '';
//     number.value = '';
//   };

//   handleDelete = (index) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((_, i) => i !== index)
//     }));
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <ContactForm handleSubmit={this.handleSubmit} />

//         <ContactList
//           contacts={filteredContacts}
//           filter={filter}
//           handleChange={this.handleChange}
//           handleDelete={this.handleDelete}
//         />
//       </div>
//     );
//   }
// }

// const ContactForm = ({ handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </label>

//     <label>
//       Number
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//     </label>

//     <button type="submit">Add contact</button>
//   </form>
// );

// const ContactList = ({ contacts, filter, handleChange, handleDelete }) => (
//   <div>
//     <h2>Contacts</h2>

//     <label>
//       Find contacts by name
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </label>

//     {contacts.length === 0 ? (
//       <p>No contacts yet.</p>
//     ) : (
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             {contact.name} : {contact.number}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );








// import React, { Component } from 'react';


// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   };

//   handleChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { contacts } = this.state;
//     const { name, number } = e.target.elements;

//     const isDuplicateContact = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
//     );

//     if (isDuplicateContact) {
//       alert('Цей контакт вже є в телефонній книзі.');
//       return;
//     }

//     const newContact = {
//       name: name.value,
//       number: number.value
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact]
//     }));

//     name.value = '';
//     number.value = '';
//   };

//   handleDelete = (index) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter((_, i) => i !== index)
//     }));
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1>Phonebook</h1>

//         <ContactForm
//           filter={filter}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />

//         <ContactList contacts={filteredContacts} handleDelete={this.handleDelete} />
//       </div>
//     );
//   }
// }

// const ContactForm = ({ filter, handleChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </label>

//     <label>
//       Number
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//     </label>

//     <label>
//       Find contacts by name
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </label>

//     <button type="submit">Add contact</button>
//   </form>
// );

// const ContactList = ({ contacts, handleDelete }) => (
//   <div>
//     <h2>Contacts</h2>
//     {contacts.length === 0 ? (
//       <p>No contacts yet.</p>
//     ) : (
//       <ul>
//         {contacts.map((contact, index) => (
//           <li key={index}>
//             {contact.name} - {contact.number}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );







// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: ''
//   };

//   handleChange = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { contacts } = this.state;
//     const { name, number } = e.target.elements;

//     const isDuplicateContact = contacts.some(
//       (contact) => contact.name.toLowerCase() === name.value.toLowerCase()
//     );

//     if (isDuplicateContact) {
//       alert('Цей контакт вже є в телефонній книзі.');
//       return;
//     }

//     const newContact = {
//       name: name.value,
//       number: number.value
//     };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact]
//     }));

//     name.value = '';
//     number.value = '';
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1>Contact Application</h1>

//         <ContactForm
//           filter={filter}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />

//         <ContactList contacts={filteredContacts} />
//       </div>
//     );
//   }
// }

// const ContactForm = ({ filter, handleChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name:
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//     </label>

//     <label>
//       Phone Number:
//       <input
//         type="tel"
//         name="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//     </label>

//     <label>
//       Filter by Name:
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </label>

//     <button type="submit">Add Contact</button>
//   </form>
// );

// const ContactList = ({ contacts }) => (
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






// import React, { Component } from 'react';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: ''
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const newContact = { name, number };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//       number: ''
//     }));
//   };

//   render() {
//     const { name, number, filter, contacts } = this.state;
//     const filteredContacts = contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//       <div>
//         <h1>Contact Application</h1>

//         <ContactForm
//           name={name}
//           number={number}
//           filter={filter}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />

//         <ContactList contacts={filteredContacts} />
//       </div>
//     );
//   }
// }

// const ContactForm = ({ name, number, filter, handleChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name:
//       <input
//         type="text"
//         name="name"
//         value={name}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={handleChange}
//       />
//     </label>

//     <label>
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

//     <label>
//       Filter by Name:
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </label>

//     <button type="submit">Add Contact</button>
//   </form>
// );

// const ContactList = ({ contacts }) => (
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




// import React, { Component } from 'react';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//     name: '',
//     number: ''
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const newContact = { name, number };

//     this.setState((prevState) => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//       number: ''
//     }));
//   };

//   render() {
//     const { name, number, contacts } = this.state;

//     return (
//       <div>
//         <h1>Contact Application</h1>

//         <ContactForm
//           name={name}
//           number={number}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />

//         <ContactList contacts={contacts} />
//       </div>
//     );
//   }
// }

// const ContactForm = ({ name, number, handleChange, handleSubmit }) => (
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name:
//       <input
//         type="text"
//         name="name"
//         value={name}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//         onChange={handleChange}
//       />
//     </label>

//     <label>
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

//     <label>
//       Filter by Name:
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </label>

//     <button type="submit">Add Contact</button>
//   </form>
// );

// const ContactList = ({ contacts, filter }) => {
//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <div>
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
//   );
// };






// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Form } from './form/Form';

// export class App extends Component {
//   // Конструктор класу
//   constructor(props) {
//     super(props);
//     // Ініціалізувати стан
//     this.state = {
//       contacts: [],
//       name: '' // Додати name в state
//     };
//     // Зв'язати контекст this для кожного методу
//     this.addContact = this.addContact.bind(this);
//   }

//   // Метод для додавання нового контакту в масив
//   addContact(newContact) {
//     this.setState({
//       contacts: [...this.state.contacts, newContact]
//     });
//   }

//   // Метод для рендерингу компоненту
//   render() {
//     return (
//       <div className="App">
//         <h1>Список контактів</h1>
//         <Form addContact={this.addContact} /> 
//         {/* Використати компонент Form і передати йому функцію додавання контакту */}
//         {/* Тут буде список контактів */}
//       </div>
//     );
//   }
// }






// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
