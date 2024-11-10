import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile: React.FC = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Profile</h1>

      {/* Profile Card */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="card-img-top rounded-circle mx-auto mt-3"
              style={{ width: '150px', height: '150px' }} 
            />
            <div className="card-body text-center">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text text-muted">johndoe@example.com</p>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Details</h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Name:</strong> John Doe
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> johndoe@example.com
                </li>
                <li className="list-group-item">
                  <strong>Phone:</strong> +1234567890
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> New York, USA
                </li>
              </ul>
            </div>
          </div>

          {/* Options / Actions */}
          <div className="mt-4">
            <h5>Account Settings</h5>
            <div className="list-group">
              <button className="list-group-item list-group-item-action">
                Edit Profile
              </button>
              <button className="list-group-item list-group-item-action">
                Change Password
              </button>
              <button className="list-group-item list-group-item-action text-danger">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
