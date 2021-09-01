 import ListingsCard from "./ListingsCard"
 
 export default function Listnings({movies, setRefresh, searchQuary}) {
            return (
            <main>
                {console.log("hello from listnings.js")}
            <h2>We don't have any new movies!</h2>
            <section className="listingContainer">
            
            {movies ? movies.filter(movie => movie.movieName.toLowerCase().includes(searchQuary.searchQuaryText)
             && movie.date.toLowerCase().includes(searchQuary.searchQuaryDate)) 
            .map(obj => <ListingsCard key={obj.id} date={obj.date} time={obj.time} seats={obj.seats} movieName={obj.movieName} runtime={obj.runtime} img={obj.img}/>) : 
            <div>Looking for movies..</div>}

            </section>
            <button onClick={() => setRefresh(true)}>Refresh</button>
            <button onClick={() => console.log(searchQuary)}>log quary states</button>
            </main>
            )
  }



// import ListingsCard from "./ListingsCard"
 

// export default function Listnings({movies, setRefresh, searchQuary}) {


//     function sortListingsCardMoudle() {
//         let { SearchQuaryText, searchQuaryDate} = searchQuary;

//         if(SearchQuaryText === "" || searchQuaryDate === "") {
//             return MapListingCards(sortedMovies)
//         }

//         // return movies ? movies.map(obj => <ListingsCard key={obj.id} movieName={obj.movieName} runtime={obj.runtime} img={obj.img}/>) : 
//         //             <div>Looking for movies..</div>
//         // let {SearchQuaryText, searchQuaryDate} = searchQuary;

//         // if(SearchQuaryText === "" || searchQuaryDate === "") {
//         //     return movies
//         // }
//     }

//             return (
//             <main>
//                 {console.log("hello from listnings.js")}
//             <h2>We don't have any new movies!</h2>
//             <section className="listingContainer">
//                 <ListingsCard sortedMovies={sortListingsCardMoudle}/>
//             </section>
//             <button onClick={() => setRefresh(true)}>Refresh</button>
//             <button onClick={() => console.log(searchQuary)}>log quary states</button>
//             </main>
//             )
//   }

