import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Login() {
    return (
    <nav className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-light p-5 rounded shadow text-center">
            <div className="rounded mx-auto d-block">
                <CircleUserRound style={{ width: "10rem", height: "10rem" }} />
            </div>
            <div className='login-form'>
                <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className='form-control' id='exampleInputPassword1' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <a href="" className='d-block text-center'>Sign up</a>
                </form>
            </div>
        </div>
      </nav>
    );
}