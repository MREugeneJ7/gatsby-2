import * as React from "react"
import { graphql } from 'gatsby'


const BuildingComponentImproved = async () => {
    const [index, setIndex] = React.useState(0);
    const [showReviews, setShowReviews] = React.useState(false);

    function showPrevious() {
        if(index === 0) setIndex(data.allApiedificios.edges.length - 1)
        else setIndex(index - 1)
    }

    function showNext() {
        if(index === data.allApiedificios.edges.length - 1) setIndex(0)
        else setIndex(index + 1)
    }

    let data = await graphql`
    query MyQuery {
        allApiedificios {
          edges {
            node {
              antecedentes
              arquitectura
              coordenadas {
                lat
                long
              }
              epoca
              imagen
              nombre
              reviews {
                author
                text
                title
              }
            }
          }
        }
      }
`
    


    return (
        <div>
            <h2>{data.allApiedificios.edges[index].node.nombre}</h2>
            <img src={data.allApiedificios.edges[index].node.imagen} alt="Una foto"/>
            <p>Antecedentes: {data.allApiedificios.edges[index].node.antecedentes}</p>
            <p> Es una construcción con arquitectura {data.allApiedificios.edges[index].node.arquitectura} construido en el periodo {data.allApiedificios.edges[index].node.epoca}</p>
            <p>Esta situado en las coordenadas {data.allApiedificios.edges[index].node.coordenadas.lat}, {data.allApiedificios.edges[index].node.coordenadas.long}</p>
            <button onClick={() => setShowReviews(!showReviews)}>{!showReviews ? 'Ver Reviews' : 'Ocultar Reviews'}</button>
            {showReviews && (
                data.allApiedificios.edges.edges[index].node.reviews.map((review, index) => (
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