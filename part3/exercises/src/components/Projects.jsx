import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

  function handleClick() {
   if (index < data.tarots.length-1)
   {
      setIndex(index + 1);
   }
   else
   {
      setIndex(0);
   }
  }

  let tarots = data.tarots;
  let project = tarots[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>{project.card} by {project.designer}
      </h2>
      <img src={project.photoUrl} alt={project.alt} />
    </div>
  );
}

    

