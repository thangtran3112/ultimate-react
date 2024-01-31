import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

/**If we use <a> tag, page will be reloaded
 * Using Link, there is not actual page reloaded
 */
function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
