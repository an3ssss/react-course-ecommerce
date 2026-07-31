// Lottie and lottie player
import Lottie from 'lottie-react';
import cat404Animation from '../Lotties/404 error page with cat.json';

// Ensure we extract the actual React component if bundled as an object
const LottieComponent = Lottie.default || Lottie;

// React Router
import { Link } from "react-router";

// Component
import { HeaderComponent } from '../Components/HeaderComponent.jsx';

// Styles
import '../styles/notfoundpage.css';

export function NotFoundPage() {
    return (
        <>
            <title>404 Page Not Found</title>

            <HeaderComponent />

            <LottieComponent
                className="Lottie"
                animationData={cat404Animation}
                loop={true}
                autoplay={true}
                style={{ width: '400px', height: '400px', margin: '0 auto' }}
            />

            <p className="pagenotfounf-p">404 ERROR !</p>
            <p className="pagenotfounf-p">Page Not Found</p>

            <div className="pagenotfounf-link-container">
                <Link to="/" className="pagenotfounf-link">Back to home page.</Link>
            </div>

        </>
    );
}