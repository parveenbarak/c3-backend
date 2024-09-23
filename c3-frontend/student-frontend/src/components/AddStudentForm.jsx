import React, { useState } from 'react';
import { addStudent } from '../services/api';

const AddStudentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddStudent = async () => {
    try {
      const token = localStorage.getItem('token');
      await addStudent({ name, email }, token);
      alert('Student added successfully!');
    } catch (error) {
      console.error('Failed to add student', error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudentForm;
