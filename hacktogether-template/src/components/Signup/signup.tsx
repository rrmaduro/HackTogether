import React, { useEffect } from "react";
import { CircleUserRound, ArrowLeft } from "lucide-react"; // Import ArrowLeft for back icon
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  // UseEffect to disable scrolling on the body and html elements
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    document.documentElement.style.overflow = "hidden"; // Prevent scrolling for the html element

    return () => {
      document.body.style.overflow = ""; // Restore scroll behavior
      document.documentElement.style.overflow = ""; // Restore scroll behavior
    };
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    htmlBody: {
      height: "100%",
      margin: 0,
      overflow: "hidden",
    },
    videoBackgroundContainer: {
      position: "relative",
      height: "100%",
      width: "100%",
    },
    backgroundVideo: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
    },
    containerFluid: {
      zIndex: 1,
      position: "relative",
    },
    backIcon: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      cursor: "pointer",
    },
    bgLight: {
      position: "relative",
      padding: "4rem 3rem",
      borderRadius: "1rem",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent background
      backdropFilter: "blur(10px)", // Soft background blur for a better effect
      maxWidth: "500px",
      margin: "auto",
    },
    input: {
      borderRadius: "0.5rem",
      padding: "0.75rem",
      fontSize: "1rem",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    },
    button: {
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "0.5rem",
      padding: "0.75rem 1.5rem",
      color: "#fff",
      fontSize: "1.1rem",
      width: "100%",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    formLabel: {
      fontWeight: "bold",
      fontSize: "1rem",
      color: "#333",
    },
    icon: {
      width: "10rem",
      height: "10rem",
      marginBottom: "2rem",
    },
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "#007bff";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "";
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

      <nav
        className="container-fluid position-fixed top-50 start-50 translate-middle min-vh-100 d-flex align-items-center justify-content-center"
        style={styles.containerFluid}
      >
        <div
          className="bg-light p-5 rounded shadow text-center"
          style={styles.bgLight}
        >
          {/* Back Arrow */}
          <ArrowLeft style={styles.backIcon} onClick={() => navigate(-1)} />

          <div className="rounded mx-auto d-block">
            <CircleUserRound style={styles.icon} />
          </div>

          <div className="login-form">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label" style={styles.formLabel}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="person-name"
                  aria-describedby="emailHelp"
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label" style={styles.formLabel}>
                  Birthday
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="birthday"
                  id="person-birthday"
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label" style={styles.formLabel}>
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" style={styles.formLabel}>
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  style={styles.input}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                style={styles.button}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                Submit
              </button>
              <Link to="/log-in" className="d-block text-center mt-3">
                Already have an account? Log in
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
