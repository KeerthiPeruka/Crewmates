import { useState } from 'react';
import { supabase } from './supabaseClient';
import { useNavigate } from 'react-router-dom';

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [speed, setSpeed] = useState('');
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('Crewmates')
      .insert([{ name, color, speed }]);

    if (error) {
      alert('Error creating crewmate: ' + error.message);
    } else {
      navigate('/'); 
    }
  };

  return (
    <div>
      <h1>Create New Crewmate</h1>
      <form onSubmit={handleCreate}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Color:
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        </label>
        <label>
          Speed:
          <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
