import './App.css'
import  { RecipeAuthor, RecipeDescription } from './components/Description';
import RecipePhoto from './components/Photos';


    function App() {
       return (
        <>
    <div className="App">
   <div className="Recipe">
      <RecipePhoto />
      <div>
         <RecipeDescription /> 
         <RecipeAuthor />
   </div>
 </div>
       
          </div>
         
        </>
      )
  }



export default App
