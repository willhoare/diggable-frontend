import axios from "axios";
import "./CheckoutButton.scss";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import ArtistCard from "../../components/ArtistCard/ArtistCard";

export default CheckoutButton;

function CheckoutButton() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("checkout");
    fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 1, quantity: 1 }],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };
  return (
    <button className="diggButton" onClick={handleClick}>
      Digg it
    </button>
  );
}
