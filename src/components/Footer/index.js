const Footer = () => {
  const date = new Date();
  
  return (
    <footer className="footer">
      
      <div className="footer__license-grid-wrapper">
        <div className="footer__license-grid">
          <ul className="footer__license-grid-list">
            <li><a href="/license/?id=1"><img src="/images/license-logos/harry-potter.png" alt="Harry Potter" loading="lazy" /></a></li>
            <li><a href="/license/?id=2"><img src="/images/license-logos/disney.png" alt="Disney" loading="lazy" /></a></li>
            <li><a href="/license/?id=3"><img src="/images/license-logos/star-wars.png" alt="Star Wars" loading="lazy" /></a></li>
            <li><a href="/license/?id=4"><img src="/images/license-logos/jurassic-park.png" alt="Jurassic Park" loading="lazy" /></a></li>
            <li><a href="/license/?id=5"><img src="/images/license-logos/marvel.png" alt="Marvel" loading="lazy" /></a></li>
            <li><a href="/license/?id=6"><img src="/images/license-logos/deadpool.png" alt="Deadpool" loading="lazy" /></a></li>
            <li><a href="/license/?id=7"><img src="/images/license-logos/james-bond-007.png" alt="James Bond 007" loading="lazy" /></a></li>
          </ul>
          <ul className="footer__license-grid-list">
            <li><a href="/license/?id=8"><img src="/images/license-logos/the-mandalorian.png" alt="The Mandalorian" loading="lazy" /></a></li>
            <li><a href="/license/?id=9"><img src="/images/license-logos/back-to-the-future.png" alt="Back to the Future" loading="lazy" /></a></li>
            <li><a href="/license/?id=10"><img src="/images/license-logos/indiana-jones.png" alt="Indiana Jones" loading="lazy" /></a></li>
            <li><a href="/license/?id=20"><img src="/images/license-logos/john-wick.png" alt="John Wick" loading="lazy" /></a></li>
            <li><a href="/license/?id=12"><img src="/images/license-logos/star-trek.png" alt="Star Trek" loading="lazy" /></a></li>
          </ul>
          <ul className="footer__license-grid-list">
            <li><a href="/license/?id=13"><img src="/images/license-logos/batman.png" alt="Batman" loading="lazy" /></a></li>
            <li><a href="/license/?id=14"><img src="/images/license-logos/pokemon.png" alt="Pokémon" loading="lazy" /></a></li>
            <li><a href="/license/?id=15"><img src="/images/license-logos/ghostbusters.png" alt="Ghostbusters" loading="lazy" /></a></li>
            <li><a href="/license/?id=16"><img src="/images/license-logos/pixar.png" alt="Pixar" loading="lazy" /></a></li>
            <li><a href="/license/?id=17"><img src="/images/license-logos/dc.png" alt="DC" loading="lazy" /></a></li>
            <li><a href="/license/?id=18"><img src="/images/license-logos/gremlins.png" alt="Gremlins" loading="lazy" /></a></li>
            <li><a href="/license/?id=19"><img src="/images/license-logos/teenage-mutant-ninja-turtles.png" alt="Teenage Mutant Ninja Turtles" loading="lazy" /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer__newsletter-wrapper">
        <div className="footer__newsletter">
          <div className="footer__newsletter-blurb">
            <h2>Receive very occasional emails with cool new merch.</h2>
            <h3>(Promise not to share your email with anybody else!)</h3>
          </div>
          <form className="footer__newsletter-form" method="post" action="/newsletter.php">
            <input type="email" name="email" placeholder="email@example.com" />
            <button><span>Sign Me Up!</span></button>
          </form>
        </div>
      </div>

      <nav className="footer__links">
        <a href="/" className="footer__links-logo">Cool Movie Merch</a>
        <ul className="footer__links-list">
          <li><a href="/">Featured Products</a></li>
          <li><a href="/under-10/">Under $10</a></li>
          <li><a href="/under-20/">Under $20</a></li>
          <li><a href="/category/">Categories</a></li>
          <li><a href="/movie/">Movies</a></li>
          <li><a href="/license/">Licenses</a></li>
        </ul>
        <ul className="footer__links-list">
          <li><a href="/about/">About</a></li>
          <li><a href="/privacy/">Privacy</a></li>
          <li><a href="/contact/">Contact</a></li>
          <li><a href="/terms/">Terms</a></li>
        </ul>
      </nav>

      <div className="footer__social-wrapper">
        <div className="footer__social">
          <small>&copy; {date.getFullYear()} Cool Movie Merch. All Rights Reserved.</small>
          {/*
          <ul className="footer__social-links">
            <li className="instagram"><a href="/">Instagram</a></li>
            <li className="facebook"><a href="/">Facebook</a></li>
            <li className="twitter"><a href="/">Twitter</a></li>
            <li className="pinterest"><a href="/">Pinterest</a></li>
          </ul>
          */}
        </div>
      </div>

    </footer>
  );
};

export default Footer;