import React, { useState } from 'react';

export default function About() {
    return (
    <nav className="container-fluid min-vh-100 " style={{ width: 'calc(100% - 250px)', marginRight: '0', marginTop: '80px', marginBottom: '0' }}>
        <div className='text-center'>
            <h1>About us</h1>
            <p>Our web application serves as a vibrant platform designed to connect individuals from diverse cultures and countries, fostering a global community built on shared experiences and mutual assistance. It allows users to explore unique recommendations and local insights from people living in various parts of the world. By facilitating conversations and exchanges, the platform encourages members to share the best things to see, taste, and experience in their respective countries. Whether it's hidden gems in a bustling city, authentic local cuisine, or cultural traditions, this app empowers users to explore the richness of different cultures, offering practical advice and recommendations to enhance their travels and broaden their horizons. The goal is to create a supportive network where people can come together, learn from one another, and discover the beauty of the world through the eyes of those who know it best.</p>
        </div>
    </nav>
    );
}