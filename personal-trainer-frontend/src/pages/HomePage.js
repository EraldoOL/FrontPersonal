import React from 'react';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestão de Alunos</h1>
      <StudentForm />
      <hr className="my-6" />
      <StudentList />
    </div>
  );
};

export default HomePage;