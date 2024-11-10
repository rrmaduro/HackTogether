import React from 'react';
import { CircleUserRound, ArrowLeft } from 'lucide-react'; // Import ArrowLeft for the back icon
import { Link, useNavigate } from 'react-router-dom';

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
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background
            backdropFilter: 'blur(10px)', // Soft background blur
            maxWidth: '500px',
            margin: 'auto',
        },
        input: {
            borderRadius: '0.5rem',
            padding: '0.75rem',
            fontSize: '1rem',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
        },
        button: {
            backgroundColor: '#007bff',
            border: 'none',
            borderRadius: '0.5rem',
            padding: '0.75rem 1.5rem',
            color: '#fff',
            fontSize: '1.1rem',
            width: '100%',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
        formLabel: {
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#333',
        },
        icon: {
            width: '10rem',
            height: '10rem',
            marginBottom: '2rem',
        },
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = '#007bff';
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.style.borderColor = '';
    };

    const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.target as HTMLButtonElement).style.backgroundColor = styles.buttonHover.backgroundColor;
    };

    const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.target as HTMLButtonElement).style.backgroundColor = styles.button.backgroundColor;
    };

    return (
        <div style={styles.videoBackgroundContainer}>
            {/* Background Video */}
            <video autoPlay muted loop style={styles.backgroundVideo}>
                Your browser does not support the video tag.
            </video>

            <nav className="container position-fixed top-50 start-50 translate-middle min-vh-100 d-flex align-items-center justify-content-center" style={styles.containerFluid}>
                <div className="bg-light p-5 rounded shadow text-center" style={styles.bgLight}>
                    {/* Back Arrow */}
                    <ArrowLeft style={styles.backIcon} onClick={() => navigate('/')} />

                    <div className="rounded mx-auto d-block mb-4">
                        <CircleUserRound style={styles.icon} />
                    </div>

                    <div className="login-form">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="emailInput" className="form-label" style={styles.formLabel}>
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    aria-describedby="emailHelp"
                                    style={styles.input}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passwordInput" className="form-label" style={styles.formLabel}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    style={styles.input}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                                style={styles.button}
                                onMouseEnter={handleButtonHover}
                                onMouseLeave={handleButtonLeave}
                            >
                                Submit
                            </button>
                            <Link to="/sign-up" className="d-block text-center mt-3">
                                Don't have an account? Sign up
                            </Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
