import React from 'react';
import StudentList from '../components/StudentList';

const TeacherPage = () => {
  return (
    <div className="container">
      <h1>Teacher Dashboard</h1>
      <StudentList />
    </div>
  );
};

export default TeacherPage;
