import "./Value.css";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">

        {/* left side */}

          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>

        {/* right side */}

        <div className="flexColStart v-right">

          <span className="primaryText">Claim your best</span>
          <span className="primaryText">living with us!</span>

          <span className="secondaryText">
            With more than 10 years of experience, we will always<br />
            bring you the best value out of your best property. So<br />
            what are you waiting for? Let's talk business!
          </span>

          <button className="button">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Value;
