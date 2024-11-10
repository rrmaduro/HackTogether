import React, { useEffect } from 'react';
import { CircleUserRound } from 'lucide-react';
import { Link } from "react-router-dom";
import BackgroundVideo from "../../assets/videos/signUpVideo.mp4";


export default function Signup() {
    // UseEffect to disable scrolling on the body and html elements
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scrolling
        document.documentElement.style.overflow = 'hidden'; // Prevent scrolling for the html element

        return () => {
            document.body.style.overflow = ''; // Restore scroll behavior
            document.documentElement.style.overflow = ''; // Restore scroll behavior
        };
    }, []);

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
            {/* Background Video - Optional, if you want to add a background video */}
            <video autoPlay muted loop style={styles.backgroundVideo}>
                <source src={BackgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <nav className="container-fluid position-fixed top-50 start-50 translate-middle min-vh-100 d-flex align-items-center justify-content-center" style={styles.containerFluid}>
                <div className="bg-light p-5 rounded shadow text-center" style={styles.bgLight}>
                    <div className="rounded mx-auto d-block">
                        <CircleUserRound style={{ width: "10rem", height: "10rem" }} />
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" id="person-name" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthday" className="form-label">Birthday</label>
                                <input type="date" className="form-control" name="birthday" id="person-birthday" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" name="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Agree with terms</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link to="/log-in">
                                <a href="" className="d-block text-center">Already have an account? Log in</a>
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
