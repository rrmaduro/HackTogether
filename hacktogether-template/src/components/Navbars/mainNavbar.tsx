import { Globe, Users, Video, BookOpen, Calendar, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Globe className="me-2" />
          CultureConnect
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <form className="d-none d-lg-flex mx-lg-4 flex-grow-1">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search cultural events, workshops..." 
              />
              <button className="btn btn-outline-light" type="submit">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <Video className="me-2" />
                Live Exchange
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <Calendar className="me-2" />
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <BookOpen className="me-2" />
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center" href="#">
                <Users className="me-2" />
                Community
              </a>
            </li>
          </ul>

          <form className="d-lg-none mt-3">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search cultural events..." 
              />
              <button className="btn btn-outline-light" type="submit">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}