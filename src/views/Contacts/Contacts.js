import React from 'react';
import contacts from './../../data/contacts.json'
import { Link, useLocation } from 'react-router-dom';

const Contacts = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className="mt-4">
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <Link
                className="text-primary"
                to={`/contacts/${contact.id}`}
              >
                {contact.name}
              </Link>
            </li>
          )
        })}
      </ul>

    </div>
  );
};

export default Contacts;