import {AiFillCheckSquare} from 'react-icons/ai'
import './index.css'

const Cart = () => (
  <div className="cart-container">
    <img
      src="https://res.cloudinary.com/du6itsqqj/image/upload/v1629721329/b-1_ohwy5l.jpg"
      alt="cart"
      className="cart-img"
    />
    <div className="paras-container1">
      <h1 className="cart-heading">
        Solve your daily life <br />
        problems in 1 minute
      </h1>
      <p className="para2">
        <AiFillCheckSquare />
        12 Chapter with detail illustrations
      </p>
      <p className="para2">
        <AiFillCheckSquare />
        Learn from the export with 24 years experience
      </p>
      <p className="para2">
        <AiFillCheckSquare />
        Audio version is included with the purchase
      </p>
      <button type="button" className="cart-button">
        Get this book - Starts from $29
      </button>
      <p className="para2 level1">
        <span className="cart-para-hard">Interested </span> in a
        <span className="cart-para-hard">free chapter</span>? Get it now
      </p>
    </div>
  </div>
)

export default Cart
