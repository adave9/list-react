function Garage(){

    const cars=['Ford','Audi','BMW','TATA'];
    
    return(
        <div>
            <h2>Following are my cars:</h2>
            <ul className="items">
                {cars.map((car)=><li>{car}</li>)}
            </ul>
        </div>
    );
}

export default Garage;