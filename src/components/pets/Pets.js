

export const Pet = ({petObject}) => {

    return <section className="pet" key={`pet--${petObject.id}`}>
        <ul>
            <div className="image__container"><img className="pet__image" src={petObject.image}></img></div>
            <h3>{petObject.name}</h3>
            <p>{petObject.description}</p>
            <footer>{petObject.notes}</footer>
            <br></br>
        </ul>
    </section>
}