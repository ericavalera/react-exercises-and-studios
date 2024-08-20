import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <div><p className={classes.choresHeading}>Chores List</p>
      <p className= {classes.choresText}><ul><li>Getting Mia ready for school</li>
   <li>Laundry</li>
   <li>Walking the dog</li></ul></p></div>
}