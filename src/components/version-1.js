import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const BuildingComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [showReviews, setShowReviews] = React.useState(false);

    function showPrevious() {
        if (index === 0) setIndex(data.allEdificiosJson.edges.length - 1)
        else setIndex(index - 1)
    }

    function showNext() {
        if (index === data.allEdificiosJson.edges.length - 1) setIndex(0)
        else setIndex(index + 1)
    }

    let data = useStaticQuery(graphql`
    query MyQuery {
        allEdificiosJson {
          edges {
            node {
              antecedentes
              arquitectura
              coordenadas {
                lat
                long
              }
              id
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
    )

    console.log(data)
    return (
        <div>
            <h2>{data.allEdificiosJson.edges[index].node.nombre}</h2>
            <img src={data.allEdificiosJson.edges[index].node.imagen} alt="Una foto" />
            <p>Antecedentes: {data.allEdificiosJson.edges[index].node.antecedentes}</p>
            <p> Es una construcción con arquitectura {data.allEdificiosJson.edges[index].node.arquitectura} construido en el periodo {data.allEdificiosJson.edges[index].node.epoca}</p>
            <p>Esta situado en las coordenadas {data.allEdificiosJson.edges[index].node.coordenadas.lat}, {data.allEdificiosJson.edges[index].node.coordenadas.long}</p>
            <button onClick={() => setShowReviews(!showReviews)}>{!showReviews ? 'Ver Reviews' : 'Ocultar Reviews'}</button>
            {showReviews && (
                data.allEdificiosJson.edges[index].node.reviews.map((review, index) => (
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
            <button onClick={() => showNext()}>Siguiente</button>
        </div>
    )
}



export default BuildingComponent