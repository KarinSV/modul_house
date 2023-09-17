import "./Search.css";

const Search = () => {
  return (
    <section className="search-wrapper">
      <div className="paddings innerWidth flexCenter search-container">

        {/* left side */}

        <div className="flexColStart search-left">
          <div className="search-title">
            <h1>
              We will help you <br />
              to find your<br />
              perfect home
            </h1>
          </div>
          <div className="flexColStart secondaryText">
            <span>Every dream starts with a passion and every living start</span>
            <span>with a dream of perfect life. Here we are helping you to</span>
            <span>get your perfect house</span>
          </div>
          <div className="flexCenter">
            <button className="button">Search</button>
          </div>
        </div>

        {/* right side */}

        <div className="flexCenter">
          <div className="image-container">
            <img src="./search-image.png"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
