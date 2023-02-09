import { GoogleLogout } from "react-google-login";

const clientId =
  "45505834200-gd8mjdio7kvo7ktrjn6i1lnsho5c0slq.apps.googleusercontent.com";

function googleLogout() {
  const onSuccess = (res) => {
    console.log("Log out successful!");
  };

  return (
    <div id="signOutbutton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default googleLogout;
