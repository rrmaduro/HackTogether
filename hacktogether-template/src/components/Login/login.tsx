import React from 'react';
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../../assets/videos/loginVideo.mp4'; // Adjust the path to your video file

export default function Login() {
    const styles: { [key: string]: React.CSSProperties } = {
        // Prevent scrolling
        htmlBody: {
            height: '100%',
            margin: 0,
            overflow: 'hidden', // Disables scrolling
        },
        videoBackgroundContainer: {
            position: 'relative' as 'relative', // Explicit type for position
            height: '100%',
            width: '100%',
        },
        backgroundVideo: {
            position: 'fixed' as 'fixed', // Explicit type for position
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1, // Places video behind the form
        },
        containerFluid: {
            zIndex: 1, // Ensures the form is above the video
        },
    };

    return (
        <div style={styles.videoBackgroundContainer}>
            {/* Background Video */}
            <video autoPlay muted loop style={styles.backgroundVideo}>
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <nav className="container position-fixed top-50 start-50 translate-middle min-vh-100 d-flex align-items-center justify-content-center" style={styles.containerFluid}>
                <div className="bg-light p-5 rounded shadow text-center" style={styles.bgLight}>
                    <div className="rounded mx-auto d-block">
                        <CircleUserRound style={{ width: "10rem", height: "10rem" }} />
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/sign-up">
                                <a href="" className="d-block text-center">Sign up</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
