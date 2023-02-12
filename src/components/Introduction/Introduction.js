import "./Introduction.scss";

function Introduction() {
  return (
    <>
      <section className="introduction">
        <div className="introduction__firstwrap">
          <div className="introduction__first">
            <h1 className="introduction__header">Find it first on Diggable.</h1>
            <h2 className="introduction__content">
              Diggable is where music fans seeking to support the next big thing
              and find lively, exciting music artists before they hit the
              mainstream and help support them along the way.
            </h2>
            <button className="introduction__buttons">Learn More</button>
          </div>
        </div>
        <div className="introduction__second">
          <h1 className="introduction__header">
            Join the journey from Dig to Gig
          </h1>
          <h2 className="introduction__content">
            With Diggable, you have the opportunity to support aspiring
            musicians and innovative artists from the earliest stages of growth.
            Be sure to evaluate every campaign closely and contribute at a level
            you can afford in the event that the team is unable to complete the
            project as planned. Browse campaigns, read the stories from the
            artists themselves, evaluate the stage of development and any
            potential risks — and then fund the campaigns that you want to help
            succeed.
          </h2>
          <button className="introduction__buttons">Discover Campaigns</button>
        </div>
      </section>
    </>
  );
}

export default Introduction;
