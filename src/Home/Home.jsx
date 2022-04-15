import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <div>
            <div className="link">
                <Link to="registration/one" >Go to registration</Link> <br />
                <Link to="/users" >Users</Link>
            </div>
            <div>
                <h2>Home page</h2>
            </div>
        </div>
    )
}