import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Settings() {
    const styles: { [key: string]: React.CSSProperties } = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f8f9fa',
        },
        settingsCard: {
            maxWidth: '500px',
            width: '100%',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        profileIcon: {
            width: '6rem',
            height: '6rem',
            color: '#6c757d',
            marginBottom: '1rem',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.settingsCard}>
                <div className="text-center mb-4">
                    <CircleUserRound style={styles.profileIcon} />
                    <h3 className="mb-3">Account Settings</h3>
                    <p className="text-muted">Update your personal information</p>
                </div>
                
                <form>
                    {/* Email Address - Read-only */}
                    <div className="mb-3">
                        <label htmlFor="emailSettings" className="form-label">Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailSettings" 
                            placeholder="user@example.com"
                            readOnly // Makes the email unchangeable
                        />
                    </div>
                    
                    {/* Other Editable Fields */}
                    <div className="mb-3">
                        <label htmlFor="passwordSetting" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordSetting" placeholder="Enter your password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="usernameSetting" className="form-label">Username</label>
                        <input type="text" className="form-control" id="usernameSetting" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="locationSetting" className="form-label">Location</label>
                        <input type="text" className="form-control" id="locationSetting" placeholder="Enter your location" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descriptionSettings" className="form-label">Description</label>
                        <textarea className="form-control" id="descriptionSettings" rows={3} placeholder="Tell us about yourself"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Save Changes</button>
                </form>
            </div>
        </div>
    );
}
