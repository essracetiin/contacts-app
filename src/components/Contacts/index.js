import React, { useState,useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css"

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Esra',
      phone_number: '123456'
    },{
      fullname: 'Ayşe',
      phone_number: '123123'
    },{
      fullname: 'Erdem',
      phone_number: '232323'
    },{
      fullname: 'Burak',
      phone_number: '987654'
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}
