import classes from './HobbyLinks.module.css';
export default function HobbyLinks(){
    let pageTitle = <b>Favorite Hobbies</b>;

    let hobbyLinks=["https://chaninicholas.com/", "https://bonadrag.com/", "https://www.moma.org/", "https://www.typewolf.com/"];
    return(
        <div className={classes.hobbylinkText}>
        {pageTitle}<p>
        <ul>
       <li><a href = {hobbyLinks[0]}>Astrology</a></li>
        <li><a href = {hobbyLinks[1]}>Fashion</a></li>
        <li><a href = {hobbyLinks[2]}>Art</a></li>
        <li><a href = {hobbyLinks[3]}>Design</a></li>
        </ul>
        </p>
        </div>

    )
}