import logo from "../assets/logo.png";  
import {Link,NavLink} from 'react-router-dom';
export const Header = () => {
  return (
    <header className="border-b-2 mb-4 justify-start">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 rounded-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-6 rounded-lg" alt="Logo" />
            <span className="text-2xl font-semibold dark:text-white mx-2">
              Shopping Cart
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3">
            <span className="text-black text-xl font-serif px-4">
               Cart:2
            </span>
          </div>
          <div>
          <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-lg border rounded px-2 py-1 mx-2 bg-gray-300 text-black" // Active styles
      : "text-lg border rounded px-2 py-1 mx-2 hover:bg-gray-300" // Inactive styles
  }
>
  Home
</NavLink>
<NavLink
  to="/cart"
  className={({ isActive }) =>
    isActive
      ? "text-lg border rounded px-2 py-1 bg-gray-300 text-black" // Active styles
      : "text-lg border rounded px-2 py-1 hover:bg-gray-300" // Inactive styles
  }
>
  Cart
</NavLink>
</div>
        </div>
      </nav>
    </header>
  );
};
