// Write your code here.
import './index.css'

const Tech = props => {
  const {techDetails, key} = props
  const {title, description, imgUrl, className} = techDetails
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="para">{description}</p>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}
export default Tech
