import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router';
import contacts from './../../data/contacts.json'

const ContactDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    const userFound = contacts.find(user =>  user.id === id)
    setUser(userFound)
  }, [])

  return (
    <div className="container mt-5">
      {user ? <p>{user.name}</p> : "...Loading" }
    </div>
  );
};

export default ContactDetail;