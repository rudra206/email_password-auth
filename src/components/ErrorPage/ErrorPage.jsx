import { Link, NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    console.log(error);
    return (
        <div className=" text-center">
            <h2>Error!</h2>
            <br />
            <Link to={'/'}> <button className="btn">Home</button></Link> 
        </div>
    );
};

export default ErrorPage;