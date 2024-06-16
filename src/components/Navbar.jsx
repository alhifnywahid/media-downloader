import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const linkData = [
  {
    name: "Tiktok",
    svg: <FaTiktok />,
    url: "/",
  },
  {
    name: "Instagram",
    svg: <FaInstagram />,
    url: "/instagram",
  },
  {
    name: "Facebook",
    svg: <FaFacebook />,
    url: "/facebook",
  },
  {
    name: "Youtube",
    svg: <FaYoutube />,
    url: "/youtube",
  },
  {
    name: "Twitter",
    svg: <FaTwitter />,
    url: "/twitter",
  },
];

// eslint-disable-next-line react/prop-types
function Navbar() {
  return (
    <div className={`btm-nav shadow-3xl lg:hidden bg-slate-200 text-black dark:text-slate-50  dark:bg-base-100`}>
      {linkData.map((data) => (
        <Link key={data.name} to={data.url} className="btn-ghost">
          {data.svg}
          {/* <FaTiktok /> */}
          <span className="btm-nav-label">{data.name}</span>
        </Link>
      ))}
    </div>
  );
}

function Navbar2() {
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        {linkData.map((data) => (
          <li key={data.name}>
            <Link to={data.url} className="btn-ghost">
              {data.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { Navbar, Navbar2 };
