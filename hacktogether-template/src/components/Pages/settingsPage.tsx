import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Settings() {
    return (
    <nav className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-light p-5 rounded shadow text-center">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="form-control" id="exampleFormControlInput1" />
            </div>
            <div className='mb-3'>
                <label htmlFor="locationSetting" className='form.label'>password</label>
                <input type="text" name="locationSettingsInput" id="locationSettings" />
            </div>
            <div className='mb-3'>
                <label htmlFor="usernameSetting" className='form.label'>username</label>
                <input type="text" name="usernameSettingsInput" id="usernameSettings" />
            </div>
            <div className='mb-3'>
                <label htmlFor="locationSetting" className='form.label'>localidade</label>
                <input type="text" name="locationSettingsInput" id="locationSettings" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea name="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        
      </nav>
    );
}