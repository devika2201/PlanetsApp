// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <div className="planet">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
