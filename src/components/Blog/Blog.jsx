import "./Blog.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
        <div className="primaryText blogHeader">
            <h1>Blog</h1>
        </div>
      <div className="paddings innerWidth flexCenter v-container">

        {/* left side */}

          <div className="image-container">
            <img src="./b1.png" alt="" />
          </div>

        {/* right */}

        <div className="flexColStart v-right">

          <span className="primaryText">How to set a Home</span>
          <span className="primaryText">Renovation Budget</span>

          <span className="secondaryText">
            Ready for a living room renovation? The easy part is knowing<br />
            your goal for home remodeling.
          </span>

          <button className="button">Read more</button>
        </div>
      </div>

        <div className="paddings innerWidth flexCenter v-container">

            {/* left side */}

            <div className="image-container">
                <img src="./b2.png" alt="" />
            </div>

            {/* right */}

            <div className="flexColStart v-right">

                <span className="primaryText">5 Ways to Make Your</span>
                <span className="primaryText">Home Office Work</span>

                <span className="secondaryText">
                    In today's remote work environment, you're living in an office.<br />
                    Read more about how to build a home office at home.
                </span>

                <button className="button">Read more</button>
            </div>
        </div>
    </section>
  );
};

export default Value;
