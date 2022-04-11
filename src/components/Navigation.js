

function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-container">
          <li className="nav-item">
            <a href="#timetracker" className="nav-link">
              Zeiterfassung
            </a>
          </li>
          <li className="nav-item">
            <a href="#correct" className="nav-link" >
              Korrektur
            </a>
          </li>
          <li className="nav-item">
            <a href="#statistics" className="nav-link">
              Statistik
            </a>
          </li>
          <li className="nav-item">
            <a href="#absence" className="nav-link" >
              Abwesenheit
            </a>
          </li>
          <li className="nav-item">
            <a href="#profile" className="nav-link" >
              Profile
            </a>
          </li>
          <li classNaame="nav-btn">
            <a href="#logout" className="button"> Abmelden</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
