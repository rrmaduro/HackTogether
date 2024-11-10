import React from 'react';
import { CircleUserRound, ArrowLeft } from 'lucide-react'; // Import ArrowLeft for the back icon
import { Link, useNavigate } from 'react-router-dom';
import BackgroundVideo from '../../assets/videos/loginVideo.mp4';

export default function Login() {
    const navigate = useNavigate();

    const styles: { [key: string]: React.CSSProperties } = {
        videoBackgroundContainer: {
            position: 'relative' as 'relative',
            height: '100%',
            width: '100%',
        },
        backgroundVideo: {
            position: 'fixed' as 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
        },
        containerFluid: {
            zIndex: 1,
            position: 'relative',
        },
        backIcon: {
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            cursor: 'pointer',
            color: '#000000',
        },
        bgLight: {
            padding: '5rem 3rem',
            borderRadius: '0.5rem',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            position: 'relative',
        }
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
                    {/* Back Arrow */}
                    <ArrowLeft style={styles.backIcon} onClick={() => navigate('/')} />

                    <div className="rounded mx-auto d-block mb-4">
                        <CircleUserRound style={{ width: "10rem", height: "10rem" }} />
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label">Password</label>
                                <input type="password" className="form-control" id="passwordInput" />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                            <Link to="/sign-up" className="d-block text-center mt-3">Sign up</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
