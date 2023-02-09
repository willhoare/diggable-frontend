import { GoogleLogin } from "react-google-login";

const clientId =
  "45505834200-gd8mjdio7kvo7ktrjn6i1lnsho5c0slq.apps.googleusercontent.com";

function googleLogin() {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText=" Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={`single_host_origin`}
        isSignedIn={true}
      />
    </div>
  );
}

export default googleLogin;
