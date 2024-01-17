import * as React from "react"
import BuildingComponent from "../components/version-1";
import BuildingComponentImproved from "../components/version-2";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  let [version, setVersion] = React.useState(1);

  return (
    <main style={pageStyles}>
      <button onClick={() => setVersion(1)}>Version 1</button>
      <button onClick={() => setVersion(2)}>Version 2</button>
      {
        version === 1 && (
          <BuildingComponent></BuildingComponent>
        )
      }
      {
        version === 2 && (
          <BuildingComponentImproved></BuildingComponentImproved>
        )

      }
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
