import './index.css'

const Author = () => (
  <div className="author-main-container">
    <h1 className="reviews-heading">About the author</h1>

    <div className="author-main-container1">
      <img
        src="https://res.cloudinary.com/du6itsqqj/image/upload/v1629747452/oval_fopygh.png"
        alt="author"
      />
      <div className="author-main-paras">
        <p className="heading-review">Joseph Williams</p>
        <p className="author-para2">
          Hey! My name is Joseph Williams and im a product designer based in
          Berlin. Most recently I led the design of multiple products at WeWork
          and prior to that I worked with startups buildings their products and
          design culture.
        </p>

        <p className="author-para2">
          Previous products I build for the design community are used by tens of
          thousands of designers working at compaines lke Google, Airbnb, Netfix
          and Boeing. Products I built or designed are featured in wired.
          TechCrunch, TechCrunch, Forbes, Quartz, Smashing, Magazine, Awwwards
          and more{' '}
        </p>

        <p className="author-para2">
          Reach me on <span className="blue-color">Twitter</span> or{' '}
          <span className="blue-color">Email</span>
        </p>
      </div>
    </div>
  </div>
)

export default Author
