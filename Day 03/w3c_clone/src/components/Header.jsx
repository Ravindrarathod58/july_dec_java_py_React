function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="icon">
          <img src="../../public/logo.png" alt="icon" />
        </div>
        <nav>
          <div>
            <a href="">Tutorials</a>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="">References</a>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="">Excercises</a>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div>
            <a href="">Certificates</a>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </div>
        </nav>
        <div className="searchBar">
          <div className="search-box">
            <input type="text" placeholder="search.." />
            <span className="material-symbols-outlined">search</span>
          </div>

          <div className="menuBar">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <a href="">spaces</a>
        <a href="">upgrade</a>
        <div className="appBadge">
          <span className="badge">New</span>
          <img src="../../public/badgeIcon.png" alt="" />
          <div className="badgeText">
            <span style={{ fontWeight: "bold" }}>W3Schools app</span>
            <span>Start the Adventure</span>
          </div>
        </div>
        <div className="buttons">
          <button style={{ backgroundColor: "purple" }}>Paid Courses</button>
          <button style={{ backgroundColor: "green" }}>Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
