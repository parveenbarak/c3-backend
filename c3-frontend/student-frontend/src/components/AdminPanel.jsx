import React from 'react';
import AddStudentForm from './AddStudentForm';
import StudentList from './StudentList';

const AdminPanel = () => {
  return (
    <div className="container">
      <h1>Admin Panel</h1>
      <AddStudentForm />
      <StudentList />
    </div>
  );
};

export default AdminPanel;
