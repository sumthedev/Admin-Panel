function Navbar() {
  return (
    <div className="navbar absolute left-[300px]">
      <div className="search-bar">
        <span>
          <img src="/images/search-normal.svg" alt="search"></img>
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <a href="/#" className="line">
        <svg
          width="1"
          height="28"
          viewBox="0 0 1 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" y1="28" x2="0.5" stroke="#EBE9F1" />
        </svg>
      </a>
      <img src="/images/right.png" alt="img" className="right" />
    </div>
  );
}

export default Navbar;
