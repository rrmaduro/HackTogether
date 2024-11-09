import React from 'react';
import { CircleUserRound } from 'lucide-react';

export default function Signup() {
    return (
    <nav className="container-fluid min-vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-light p-5 rounded shadow text-center">
            <div className="rounded mx-auto d-block">
                <CircleUserRound style={{ width: "10rem", height: "10rem" }} />
            </div>
            <div className='login-form'>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Name</label>
                        <input type="text" className='form-control' name="name" id="person-name" aria-describedby="emailHelp"/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>Birthday</label>
                        <input type="date" className='form-control' name="name" id="person-name" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className='form-control' id='exampleInputPassword1' />
                    </div>
                    <div className="mb-3 form-check">
                      <input type="checkbox" name="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Agree with terms</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      </nav>
    );
}