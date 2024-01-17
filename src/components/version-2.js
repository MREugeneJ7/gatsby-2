import * as React from "react"

let edificios = [{
    nombre: "Mi casa",
    imagen: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
    antecedentes: "Antes vivia en una madriguera",
    arquitectura: "rocambolesca",
    epoca: "espacial",
    coordenadas: {
        lat: "aqui",
        long: "aca"
    },
    reviews: [
        {
            title: "Guapisimo loco",
            author: "se kinkaso to posse",
            text: "10/10 niño top top"
        },
    ]
},
{
    nombre: "Mi casa 2",
    imagen: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
    antecedentes: "Antes vivia en una madriguera",
    arquitectura: "rocambolesca",
    epoca: "espacial",
    coordenadas: {
        lat: "aqui",
        long: "aca"
    },
    reviews: [
        {
            title: "Guapisimo loco",
            author: "se kinkaso to posse",
            text: "10/10 niño top top"
        },
    ]
},
{
    nombre: "Mi casa 3",
    imagen: "https://i.blogs.es/c68014/casa-3d/840_560.jpeg",
    antecedentes: "Antes vivia en una madriguera",
    arquitectura: "rocambolesca",
    epoca: "espacial",
    coordenadas: {
        lat: "aqui",
        long: "aca"
    },
    reviews: [
        {
            title: "Guapisimo loco",
            author: "se kinkaso to posse",
            text: "10/10 niño top top"
        },
    ]
}]

const BuildingComponentImproved = () => {
    const [index, setIndex] = React.useState(0);
    const [showReviews, setShowReviews] = React.useState(false);

    function showPrevious() {
        if(index === 0) setIndex(edificios.length - 1)
        else setIndex(index - 1)
    }

    function showNext() {
        if(index === edificios.length - 1) setIndex(0)
        else setIndex(index + 1)
    }

    return (
        <div>
            <h2>{edificios[index].nombre}</h2>
            <img src={edificios[index].imagen} alt="Una foto"/>
            <p>Antecedentes: {edificios[index].antecedentes}</p>
            <p> Es una construcción con arquitectura {edificios[index].arquitectura} construido en el periodo {edificios[index].epoca}</p>
            <p>Esta situado en las coordenadas {edificios[index].coordenadas.lat}, {edificios[index].coordenadas.long}</p>
            <button onClick={() => setShowReviews(!showReviews)}>{!showReviews ? 'Ver Reviews' : 'Ocultar Reviews'}</button>
            {showReviews && (
                edificios[index].reviews.map((review, index) => (
                    <div key={index}>
                        <h4>
                            {review.title}
                        </h4>
                        <p>
                            {review.author}
                        </p>
                        <p>
                            {review.text}
                        </p>
                    </div>
                ))
            )}
            <button onClick={() => showPrevious()}>Anterior</button>
            <button onClick={() =>  showNext()}>Siguiente</button>
        </div>
    )
}

export default BuildingComponentImproved