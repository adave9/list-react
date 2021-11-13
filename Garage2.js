function Garage2(){

    const cars=[
        {id: 1, brand:'Ford'},
        {id:2, brand:'Audi'},
        {id:3,brand: 'BMW'},
        {id:4,brand:'TATA'}
    ];
    
    return(
        <div>
            <h2>Following are my cars:</h2>
            <ul className="items">
                {cars.map((car)=><li>{car.id} award goes to {car.brand}</li>)}
            </ul>
        </div>
    );
}

export default Garage2;