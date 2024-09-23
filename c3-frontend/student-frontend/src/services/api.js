import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const fetchStudents = () => {
  return axios.get(`${API_URL}/students`);
};

export const addStudent = (studentData, token) => {
  return axios.post(`${API_URL}/students`, studentData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};
