import benefitImg from "../images/benefit.png";
import { IoOptionsSharp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
function Benefit() {
  return (
    <div className="benefit">
      <div className="benefit__text">
        <h2>Benefits</h2>
        <p className="p__normal">
          Book smarter with our platform, offering great options and support.
        </p>
        <ul className="benefit__list">
          <li className="benefit__item">
            <div className="benefit__item--bg">
              <IoOptionsSharp className="benefit__item--icon" />
            </div>
            <div>
              <p className="p__lg">Extensive Flight Options</p>
              <p className="p__normal">
                Find the perfect flight from a wide range of choices across
                various airlines.
              </p>
            </div>
          </li>
          <li className="benefit__item">
            <div className="benefit__item--bg">
              <GiReceiveMoney className="benefit__item--icon" />
            </div>
            <div>
              <p className="p__lg">Extensive Flight Options</p>
              <p className="p__normal">
                Find the perfect flight from a wide range of choices across
                various airlines.
              </p>
            </div>
          </li>
          <li className="benefit__item">
            <div className="benefit__item--bg">
              <MdSupportAgent className="benefit__item--icon" />
            </div>
            <div>
              <p className="p__lg">24/7 Support</p>
              <p className="p__normal">
                Get help anytime with our around-the-clock customer support
                team.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="benefit__image">
        <img src={benefitImg} alt="" />
      </div>
    </div>
  );
}

export default Benefit;
