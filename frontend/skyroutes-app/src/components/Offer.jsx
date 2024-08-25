import { Link } from "react-router-dom";
import { IoStarHalfSharp } from "react-icons/io5";
import { VscStarFull } from "react-icons/vsc";
import destination1 from "../images/destination-1.png";
import destination2 from "../images/destination-2.png";
import destination3 from "../images/destination-3.png";
import destination4 from "../images/destination-4.png";

function Offer() {
  return (
    <div className="offer">
      <h2>Best offer destinations</h2>
      <div className="offer__text">
        <p className="p__normal">
          Discover our top recommended destination with our special offers.
        </p>
        <Link
          className="offer__view"
          onClick={(event) => event.preventDefault()}
        >
          View All
        </Link>
      </div>
      <ul className="offer__list">
        <li className="offer__item">
          <div className="offer__box">
            <div className="offer__box--img">
              <img src={destination1} alt="" />
            </div>
            <div className="offer__box--text">
              <div className="offer__box--row-1">
                <div>
                  <div className="offer__box--title">Ko Phi Phi Leh</div>
                  <div className="offer__box--location">📍Krabi, Thailand</div>
                </div>
                <div>
                  <p className="offer__box--discount align__end">🔥 25% OFF</p>
                  <p className="offer__box--discount2 align__end">
                    On beach side stays!
                  </p>
                </div>
              </div>
              <div className="offer__box--row-2">
                <p>
                  <span>
                    <VscStarFull /> <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <IoStarHalfSharp />
                  </span>
                  (4.8/5)
                </p>
                <div className="offer__detail click__basic">
                  <Link
                    className="offer__detail-text"
                    onClick={(event) => event.preventDefault()}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="offer__item">
          <div className="offer__box">
            <div className="offer__box--img">
              <img src={destination2} alt="" />
            </div>
            <div className="offer__box--text">
              <div className="offer__box--row-1">
                <div>
                  <div className="offer__box--title">Liberty Island</div>
                  <div className="offer__box--location">📍 New York, USA</div>
                </div>
                <div>
                  <p className="offer__box--discount align__end">🔥 20% OFF</p>
                  <p className="offer__box--discount2 align__end">
                    On admission tickets!
                  </p>
                </div>
              </div>
              <div className="offer__box--row-2">
                <p>
                  <span>
                    <VscStarFull /> <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <IoStarHalfSharp />
                  </span>
                  (4.8/5)
                </p>
                <div className="offer__detail click__basic">
                  <Link
                    className="offer__detail-text"
                    onClick={(event) => event.preventDefault()}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="offer__item">
          <div className="offer__box">
            <div className="offer__box--img">
              <img src={destination3} alt="" />
            </div>
            <div className="offer__box--text">
              <div className="offer__box--row-1">
                <div>
                  <div className="offer__box--title">Eiffel Tower</div>
                  <div className="offer__box--location">📍 Paris, France</div>
                </div>
                <div>
                  <p className="offer__box--discount align__end">🔥 20% OFF</p>
                  <p className="offer__box--discount2 align__end">
                    On Paris tours!
                  </p>
                </div>
              </div>
              <div className="offer__box--row-2">
                <p>
                  <span>
                    <VscStarFull /> <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <IoStarHalfSharp />
                  </span>
                  (4.8/5)
                </p>
                <div className="offer__detail click__basic">
                  <Link
                    className="offer__detail-text"
                    onClick={(event) => event.preventDefault()}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="offer__item">
          <div className="offer__box">
            <div className="offer__box--img">
              <img src={destination4} alt="" />
            </div>
            <div className="offer__box--text">
              <div className="offer__box--row-1">
                <div>
                  <div className="offer__box--title">Vatican City</div>
                  <div className="offer__box--location">
                    📍 Vatican City, Vatican
                  </div>
                </div>
                <div>
                  <p className="offer__box--discount align__end">🔥 20% OFF</p>
                  <p className="offer__box--discount2 align__end">
                    On historical tours!
                  </p>
                </div>
              </div>
              <div className="offer__box--row-2">
                <p>
                  <span>
                    <VscStarFull /> <VscStarFull />
                    <VscStarFull />
                    <VscStarFull />
                    <IoStarHalfSharp />
                  </span>
                  (4.8/5)
                </p>
                <div className="offer__detail click__basic">
                  <Link
                    className="offer__detail-text"
                    onClick={(event) => event.preventDefault()}
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Offer;
