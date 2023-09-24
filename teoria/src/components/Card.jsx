import "./card.css"
const pokemon = [
    {
        id: 1,
        nombre: "pikachu",
        imagen: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
    },
    {
        id: 2,
        nombre: "charizard",
        imagen: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png"
    }
]

function Card() {
    return (

        pokemon.map((item, index) => {
            return (
                <div className="card"
                    key={index}>
                    <h1>{item.nombre}</h1>
                    <img className="image" src={item.imagen} alt="" />
                </div>
            )
        })

    )
}

export default Card