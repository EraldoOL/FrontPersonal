/*import React, { useState, useEffect } from 'react';
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

export default StudentList;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error.message);
    }
  };

  // Função para deletar um aluno
  const deleteStudent = async (id) => {
    if (window.confirm('Tem certeza que deseja deletar este aluno?')) {
      try {
        await axios.delete(`http://localhost:5000/students/${id}`);
        alert('Aluno deletado com sucesso!');
        fetchStudents(); // Atualiza a lista de alunos
      } catch (error) {
        console.error('Erro ao deletar aluno:', error.message);
        alert('Erro ao deletar aluno.');
      }
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Alunos</h2>
      <ul className="space-y-4">
        {students.map((student) => (
          <li key={student._id} className="border p-2 flex justify-between items-center">
            <div>
              <p><strong>Nome:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Telefone:</strong> {student.phone}</p>
              <p><strong>Status:</strong> {student.status}</p>
              <p><strong>Pagamento:</strong> {new Date(student.paymentDue).toLocaleDateString()}</p>
            </div>
            <button
              onClick={() => deleteStudent(student._id)}
              className="bg-red-500 text-white p-2 rounded"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;