export default function BookList() {
   let pageTitle = "Favorite Books";
   let book1 = "https://cdn.kobo.com/book-images/0cc3aecf-75b2-4cb2-ac18-82d1d4e45ad0/353/569/90/False/a-game-of-thrones-the-graphic-novel-volume-one.jpg";
   let book2 = "https://d3525k1ryd2155.cloudfront.net/f/460/743/9780679743460.RH.0.l.jpg";
   let book3 = "https://m.media-amazon.com/images/I/71zN6coL+nL._SL1200_.jpg";

   return (
      <div style= {{border:'1px solid black'}}>
         <h3>{pageTitle}</h3>
         <img src={book1} className ="photo" alt="Game of Thrones, GRRM" width={200}/>
         <img src={book2} className="photo" alt="Hard-Boiled Wonderland, and the End of the World, Haruki Murakami" width={200} />
         <img src={book3} className= "photo" alt="Hip Logic, Terrance Hayes" width={200} />
      </div>      
   );
}