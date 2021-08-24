import {BsArrowRight} from 'react-icons/bs'
import './index.css'

const Pricing = () => (
  <div className="pricing-container1">
    <h1 className="pricing-header">Pricing & Plans</h1>
    <p className="pricing-para1">
      Create custom landing with omega that converts more visitors than any
      website.
    </p>

    <div className="pricing-small-container">
      <div className="pricing-cont">
        <p className="para-last">Limited</p>
        <div className="classified">
          <h1>Free</h1>
          <p className="pra12">Get a free chapter of our book right now.</p>
          <p className="pra12">Email address</p>
        </div>
        <button type="button" className="button-last first-color">
          Send free chapter
        </button>
      </div>

      <div className="pricing-cont">
        <p className="para-last">Only eBook</p>
        <div className="classified">
          <h1>$29</h1>
          <p className="pra13">One time purchase</p>
          <p className="pra12">
            Get a eBook version + Audio version of the book.
          </p>
        </div>
        <button type="button" className="button-last second-color">
          Send free chapter
        </button>
      </div>

      <div className="pricing-cont">
        <p className="para-last">Everything</p>
        <div className="classified">
          <h1>$49</h1>
          <p className="pra13">One time purchase</p>
          <p className="pra12">
            Hardcoer + eBook version + Audio version of the book.
          </p>
        </div>
        <button type="button" className="button-last third-color">
          Buy from Amazon
        </button>
      </div>
    </div>
    <div className="last-row1">
      <div className="last-row2">
        <BsArrowRight className="arrow-spec" />
        <div>
          <h1 className="heading99">Can I use Omega for my clients?</h1>
          <p className="para99">
            Absolutely. The Envato Theme license allows you to build a websites
            for personal use or for a client. User Omega for your clients.
          </p>
        </div>
      </div>

      <div className="last-row2">
        <BsArrowRight className="arrow-spec" />
        <div>
          <h1 className="heading99">Do I get free updates?</h1>
          <p className="para99">
            Yes. We update all of our themes regularly, plus are constantly
            adding new components, pages, and features to our themes . Purchase
            once and get lifetime updates.
          </p>
        </div>
      </div>

      <div className="last-row2">
        <BsArrowRight className="arrow-spec" />
        <div>
          <h1 className="heading99">Does it work with WordPress?</h1>
          <p className="para99">
            Create custom landing pages with Omega that converts more visitors
            than any website. Wite lots of unique blocks, You can easily build a
            page without any design or custom coding.
          </p>
        </div>
      </div>

      <div className="last-row2">
        <BsArrowRight className="arrow-spec" />
        <div>
          <h1 className="heading99">Will you provide support?</h1>
          <p className="para99">
            With lots of unique blocks, you can easily build a page without any
            design or custom coding. With Omega that converts more visitors than
            any websites.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Pricing
