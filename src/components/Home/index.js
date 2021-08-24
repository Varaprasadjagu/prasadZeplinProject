import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import ListOfQuestions from '../ListOfQuestions'
import NotFound from '../NotFound'
import ProductCard from '../ProductCard'
import Last from '../Last'
import Header from '../Header'
import Products from '../Products'
import Reviews from '../Reviews'
import Author from '../Author'
import Pricing from '../Pricing'

import AllProductsSection from '../AllProductsSection'

import Cart from '../Cart'
import './index.css'

const statesList = [
  {
    uniqueNo: 1,
    image:
      'https://res.cloudinary.com/du6itsqqj/image/upload/v1629732464/layout-11_zzjiil.png',
    heading: 'Solve Daily Problems',
    description:
      'With lots of unique blocks. You can easily build a page without coding.Build your next landing page quickly',
  },
  {
    uniqueNo: 2,
    image:
      'https://res.cloudinary.com/du6itsqqj/image/upload/v1629732447/layers-3_pngwq2.png',
    heading: 'Key Notes on Each Chapter',
    description:
      'With lots of unique blocks. You can easily build a page without coding.Build your next landing page quickly',
  },
  {
    uniqueNo: 3,
    image:
      'https://res.cloudinary.com/du6itsqqj/image/upload/v1629732484/responsive_ssvgbv.png',
    heading: 'Audio Book Available',
    description:
      'With lots of unique blocks. You can easily build a page without coding.Build your next landing page quickly',
  },
]

const Home = () => (
  <div className="home-container">
    <Header />
    <Cart />
    <div className="hone-container1">
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1629726723/oval_xqxk04.png"
        alt="oval"
      />
      <p className="home-para1">
        OMG!! cannot believe that I have got a brand new landing page <br />
        after getting Omega. It was super easy to edit and publish. <br />
        <span className="cart-para-hard">Jonathan Taylor</span>
      </p>
    </div>
    <div>
      <h1 className="home-heading1">Chapters we,ve covered</h1>
      <p className="home-para2">
        Create custom landing pages with Omega that Converts <br />
        more visitors than any website
      </p>
    </div>
    <div className="home-container2">
      <button type="button" className="button-home1">
        <AiOutlineArrowLeft className="arrow1" />
      </button>
      <p className="home-para3">1</p>
      <div>
        <p className="home-para4">Chapter 01</p>
        <p className="cart-para-hard">What is problem solving?</p>
        <p className="home-para5">
          Create custom landing pages with Omega that converts <br />
          more visitors than any website. With lots of unique blocks, <br />
          You can easily build a page without coding
        </p>
      </div>
      <button type="button" className="button-home2">
        <AiOutlineArrowRight className="arrow2" />
      </button>
    </div>

    <ul className="about-ul">
      {statesList.map(all => (
        <AllProductsSection all={all} key={all.uniqueNo} />
      ))}
    </ul>
    <hr />
    <div className="home-container5">
      <h1 className="heading-home5">Things you ll learn</h1>
      <p className="answer1">
        Create custom landing pages with Omega that converts more visitors than
        any website
      </p>
      <ListOfQuestions />
      <ProductCard />
      <Products />
      <Reviews />
      <Author />
      <Pricing />
      <NotFound />
      <Last />
    </div>
  </div>
)

export default Home
