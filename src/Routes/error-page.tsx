import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error : any;
  error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! 💀</h1>
      <p>Sorry, an unexpected error has occurred. 😥</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/Proyecto-React/'}>
          <button> Return to home ✨</button>
      </Link>
    </div>
  );
}