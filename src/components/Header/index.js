import {GoTriangleDown} from 'react-icons/go'
import './index.css'

const Header = () => (
  <div className="nav-header">
    <p className="omega">Omega</p>
    <div className="sub-container">
      <p className="para1">
        Domes <GoTriangleDown />
      </p>
      <p className="para2">Pages</p>
      <p className="para2">Support</p>
    </div>
    <button type="button" className="button1">
      Get The book
    </button>
  </div>
)

export default Header
