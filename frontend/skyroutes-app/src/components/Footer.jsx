import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="container__outer">
      <div className="container__footer">
        <footer className="footer">
          <div className="footer__left">
            <div className="footer__logo click__basic">
              <Link onClick={(event) => event.preventDefault()}>
                <img src={Logo} alt="logo white" />
              </Link>
            </div>

            <div className="footer__social">
              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaInstagram className="footer__social--icon" />
              </Link>

              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaFacebook className="footer__social--icon" />
              </Link>
              <Link
                className="click__basic"
                onClick={(event) => event.preventDefault()}
              >
                <FaXTwitter className="footer__social--icon" />
              </Link>
            </div>
            <p className="p__light">© Copyright 2024 by SkyRoutes.</p>
            <p className="p__light">All rights reserved.</p>
          </div>

          <div className="footer__directories">
            <div>
              <p className=" p__medium">Account</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link "
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Create Account</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link "
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Sign In</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">iOS App</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Android App</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="p__medium">Company</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">About Us</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">For Business</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Partners</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Careers</p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="p__medium">Quick Link</p>
              <ul className="directories">
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Services</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Help Center</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Policy & Terms</p>
                  </Link>
                </li>
                <li className="click__basic">
                  <Link
                    className="directories__link"
                    onClick={(event) => event.preventDefault()}
                  >
                    <p className="p__light">Cookies</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
