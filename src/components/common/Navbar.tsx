import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div>
      <nav className="flex mx-auto container  max-w-7xl justify-between items-center p-4 ">
        <div>
          <Link to="/">
            <img
              src="/budwallet.png"
              alt="budwallet-logo"
              className="w-[130px]"
            />
          </Link>
        </div>

        <div>
          <ul className="flex gap-8 items-center text-lg">
            <Link to="/personal">
              <li>Personal</li>
            </Link>
            <Link to="/business">
              <li>Business</li>
            </Link>
            <Link to="/company">
              <li>Company</li>
            </Link>
            <Link to="/login">
              <li className="rounded-full bg-black text-white px-5 py-1.5">
                Sign up
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
    <div className="border-b border-[#F5F5F5]"></div>
    </>
  );
}

export default Navbar;
