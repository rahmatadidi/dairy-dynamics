import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            DairyDynamic
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Beranda
            </Link>
            <Link
              to="/dashboard"
              className="text-sm font-medium hover:text-primary"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              className="text-sm font-medium hover:text-primary"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
