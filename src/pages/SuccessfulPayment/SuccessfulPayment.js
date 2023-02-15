import "./SuccessfulPayment.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function SuccesfulPayment() {
  return (
    <>
      <Header />
      <div className="payment__firstwrap">
        <div className="payment__first">
          <h1 className="payment__header">
            Thank you for supporting Independent music!.
          </h1>
          <h2 className="payment__content">
            Your contribution has helped this artist towards their goal and has
            helped keep the live music industry alive and give new music artists
            the opportunity to grow. We hope you're vey happy with your
            purchase, any concerns please reach out to info@diggable.com
          </h2>
          <Link to={`/`}>
            <button className="payment__buttons">Return Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SuccesfulPayment;
