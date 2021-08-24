import './index.css'

const AllProductsSection = props => {
  const {all} = props

  return (
    <li className="About-li">
      <img src={all.image} alt="image1" />
      <p className="cart-para-hard">{all.heading}</p>
      <p className="answer">{all.description}</p>
    </li>
  )
}

export default AllProductsSection
