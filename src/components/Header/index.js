const Header = () => {
  const MastheadLinks = () => {
    const mastheadLinks = [
      {
        pagePath: 'home',
        href: '/',
        text: 'Featured Products'
      },
      {
        pagePath: 'under10',
        href: '/under-10/',
        text: 'Under $10'
      },
      {
        pagePath: 'under20',
        href: '/under-20/',
        text: 'Under $20'
      },
      {
        pagePath: 'category',
        href: '/category/',
        text: 'Categories'
      },
      {
        pagePath: 'movie',
        href: '/movie/',
        text: 'Movies'
      },
      {
        pagePath: 'license',
        href: '/license/',
        text: 'Licenses'
      }
    ];

    const path = 'home';
    
    return (
      mastheadLinks.map((link, index) => {
        const activeLink = path === link.pagePath ? 'active' : null;
        return (
          <li className={activeLink} key={index}><a href={link.href}>{link.text}</a></li>
        );
      })
    );
  };
  
  return (
    <header className="masthead">
      
      <div className="masthead__upper-wrapper">
        <div className="masthead__upper">
          <a href="/" className="masthead__logo">Cool Movie Merch</a>
          <form action="/search-results" method="GET" className="masthead__search" role="search" data-movie-quote-placeholder="Search Cool Movie Merch...">
            <input type="text" name="search" placeholder="Search Cool Movie Merch..." required />
            <button>Search</button>
          </form>
          <button className="masthead__hamburger">Navigation Menu</button>
        </div>
      </div>

      <nav className="masthead__nav">
        <ul className="masthead__nav-list">
          <MastheadLinks />
        </ul>
      </nav>

    </header>
  );
};

export default Header;