import data from '../data.json';
import { useState } from 'react';

const MyProjects = () => {
   const [index, setIndex] = useState(0);

const handleClick = () => {
   index < data.tarots.length-1 ? setIndex(index + 1) : setIndex(0);
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

    

export default MyProjects;