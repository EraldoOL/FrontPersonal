import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'Active',
    paymentDue: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Garantir que paymentDue seja uma data válida antes de enviar
  const formattedPaymentDue = new Date(formData.paymentDue).toISOString(); // Formato ISO

  try {
    const response = await axios.post('http://localhost:5000/api/students', {
      ...formData,
      paymentDue: formattedPaymentDue, // Usando a data formatada
    });
    alert('Aluno cadastrado com sucesso!');
    console.log(response.data);
    setFormData({
      name: '',
      email: '',
      phone: '',
      status: 'Active',
      paymentDue: '',
    });
  } catch (error) {
    console.error('Erro ao cadastrar aluno:', error.message);
    alert('Erro ao cadastrar aluno.');
  }
};

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Aluno</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefone"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="paymentDue"
          value={formData.paymentDue}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Active">Ativo</option>
          <option value="Inactive">Inativo</option>
        </select>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default StudentForm;