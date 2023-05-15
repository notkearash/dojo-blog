import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2>
            <p>Not found</p>
            <Link to="/">Back to Home...</Link>
        </div>
    );
}

export default NotFound;