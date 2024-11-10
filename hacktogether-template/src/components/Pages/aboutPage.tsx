import React from 'react';

export default function About() {
    return (
        <div className="container-fluid min-vh-100" style={{ marginTop: '80px' }}>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="text-center mb-5">
                        <h1 className="display-4 text-primary">About Us</h1>
                        <p className="lead text-muted">Empowering global connections and cultural exchange</p>
                    </div>

                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-body p-4">
                            <h3 className="mb-4">Our Mission</h3>
                            <p className="text-justify">
                                Our web application serves as a vibrant platform designed to connect individuals from diverse cultures and countries, fostering a global community built on shared experiences and mutual assistance. It allows users to explore unique recommendations and local insights from people living in various parts of the world.
                            </p>
                            <p className="text-justify">
                                By facilitating conversations and exchanges, the platform encourages members to share the best things to see, taste, and experience in their respective countries. Whether it's hidden gems in a bustling city, authentic local cuisine, or cultural traditions, this app empowers users to explore the richness of different cultures, offering practical advice and recommendations to enhance their travels and broaden their horizons.
                            </p>
                            <p className="text-justify">
                                The goal is to create a supportive network where people can come together, learn from one another, and discover the beauty of the world through the eyes of those who know it best.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-5">
                        <h5 className="text-secondary">Join Us in Creating a Connected World</h5>
                        <p className="text-muted">Be a part of our global community and start sharing today!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
