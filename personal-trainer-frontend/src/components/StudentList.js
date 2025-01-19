import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Erro ao buscar alunos:', error.message);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Alunos</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id} className="border-b py-2">
            <p><strong>Nome:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Status:</strong> {student.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;