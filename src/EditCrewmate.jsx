import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [speed, setSpeed] = useState('');

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        alert('Error fetching crewmate: ' + error.message);
      } else {
        setName(data.name);
        setColor(data.color);
        setSpeed(data.speed);
      }
    };
    
    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('crewmates')
      .update({ name, color, speed })
      .eq('id', id);

    if (error) {
      alert('Error updating crewmate: ' + error.message);
    } else {
      navigate('/summary'); 
    }
  };

  return (
    <div>
      <h1>Edit Crewmate</h1>
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditCrewmate;
