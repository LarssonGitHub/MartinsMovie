export default function Home({searchQuary, setSearchQuary}) {

    //Note how he spreads the name and value! AND uses the none broken thing.. a functuon within a function
    const handleChange = e => {
        const { name, value } = e.target;
        setSearchQuary(d => ({
            ...d,
            [name]: value
        }));        
        };
        
    return (
        <section>
            <h2>Search movies</h2>
            <label htmlFor="textInput">
                Name of movie:
                </label>
                <input
                    name="searchQuaryText"
                    id="textInput"
                    type="text"
                    value={searchQuary.text}
                    onInput={handleChange}/>
         
            {/* TODO, set date so it's always the current date... */} 
            
            < label htmlFor="dateInput" > Search Specific date </label> 
                <input 
                type="date" 
                id="dateInput" 
                name="searchQuaryDate"
                value={searchQuary.date}
                onInput={handleChange}/>
       
        </section>
    )
}
