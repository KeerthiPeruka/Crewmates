import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

const CrewmateDetail = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Crewmates')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setCrewmate(data);
    };

    fetchData();
  }, [id]);

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div>
      <h2>Crewmate: {crewmate.name}</h2>
      <p>Color: {crewmate.color}</p>
      <p>Speed: {crewmate.speed} mph</p>
      <Link to={`/edit/${id}`}>Edit Crewmate</Link>
    </div>
  );
};

export default CrewmateDetail;
