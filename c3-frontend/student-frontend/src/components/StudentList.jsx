import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/api';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      try {
        const response = await fetchStudents();
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };

    getStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
