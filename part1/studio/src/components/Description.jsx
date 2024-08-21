import styles from './Description.module.css';
import React from 'react';
import RecipeIngredients from './Ingredients';

export class RecipeDescription extends React.Component{
    render(){
        return(
            <div>
                <div className= {styles.RecipeDescription}>
                    <h1>Banana Pudding</h1>
                    <p>This quick and easy banana pudding just might be the perfect dessert! The no-bake treat requires only 5 ingredients and 15 minutes of prep. With Nilla wafers, Jello instant pudding, ripe bananas, and Cool Whip, it’s ideal for those days when you don’t want to spend hours in the kitchen!</p>
                </div>
                <RecipeIngredients/>
            </div>
        )
    }
}

export function RecipeAuthor(){
    let authorLink = "https://www.theseasonedmom.com/summer-quick-and-easy-banana-pudding/";
    let authorPhoto ="https://www.theseasonedmom.com/wp-content/uploads/2021/10/Blair-Head-Shot-2-Small-500x500.jpg";
    let authorName= "Blair Lonergan";

    return(
        <div className = {styles.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text"  className={styles.imageAuthor} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>The Seasoned Mom</a>
            </div>
        </div>
        

    );
};

