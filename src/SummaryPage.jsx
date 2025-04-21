import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const SummaryPage = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error); 
        alert('Error fetching crewmates');
      } else {
        setCrewmates(data);
      }
    };

    fetchCrewmates();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (error) {
      alert('Error deleting crewmate: ' + error.message);
    } else {
      setCrewmates((prev) => prev.filter((c) => c.id !== id)); // Update UI
    }
  };

  return (
    <div>
      <h1>Your Crewmates</h1>
      <Link to="/create">
        <button>Create New Crewmate</button>
      </Link>
      <div>
        {crewmates.length === 0 ? (
          <p>No crewmates added yet.</p>
        ) : (
          crewmates.map((crewmate) => (
            <div key={crewmate.id} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
              <h3>{crewmate.name}</h3>
              <p>Color: {crewmate.color}</p>
              <p>Speed: {crewmate.speed}</p>
              <Link to={`/edit/${crewmate.id}`}>Edit</Link>
              <button onClick={() => handleDelete(crewmate.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
