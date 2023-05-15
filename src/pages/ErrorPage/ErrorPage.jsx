import { Link } from 'react-router-dom';
import errorPageImage from '../../assets/error.svg';

const ErrorPage = () => {
    return (
        <div className="text-center">
            <img src={errorPageImage} className="img-fluid mb-4 mx-auto" />
            <h1 className="mb-4">Page Not Found</h1>
            <p>The page you are looking for does not exist or has been moved.</p>
            <Link to="/" className="btn btn-primary mt-4">homepage</Link>
        </div>
    );
};

export default ErrorPage;