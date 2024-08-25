'use client';
import Header from '@/components/auth/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{ useState } from 'react';

export default function page() {

    const router = useRouter()
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
            expiresInMins: 30,
          }),
        });
  
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('authuser', JSON.stringify(data));
          router.push('/dashboard');
        } else {
          alert("Invalid Credentials");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div>
  <Header />
  <section className="login-section">
    <div className="container">
      <div className="login-section-inner">
        <div className="row g-4">
          <div className="col-lg-6 align-self-center">
            <div className="left">
              <h1 className="title">
                Welcome back to Autocare
                Vendor App
              </h1>

              <p className="details">
                Your all-in-one platform for efficiently managing your garage and shop. Seamlessly track services, add
                products, and enhance customer satisfaction.
              </p>

              <div className="user">
                <div className="user-img">
                  <img src="./assets/images/user1.png" alt="userImg" />
                  <img className="img-left" src="./assets/images/user2.png" alt="userImg" />
                  <img className="img-left" src="./assets/images/user3.png" alt="userImg" />
                  <img className="img-left" src="./assets/images/user4.png" alt="userImg" />
                </div>

                <p className="user-text">
                  1k+ peoples joined with us. Now it’s your turn
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="right">
              <div className="login-form">
                <div className="d-flex flex-column gap-3">
                  <h1 className="form-title">
                    Login
                  </h1>

                  <p className="form-details">
                    New User?
                    <a href="./signup.html">Create New Account</a>
                  </p>
                </div>

                <form className="form-inner" onSubmit={handleSubmit}>
                  <div className="inner-input">
                    <label className="input-label" for="phone-number">Phone Number</label>
                    <div className="input-field">
                      <input type="number" name="" id="phone-number" placeholder="Enter number" />
                    </div>
                  </div>

                  <div className="inner-input">
                    <label className="input-label" for="Password">Password</label>
                    <div className="input-field">
                      <input type="password" name="" id="Password" placeholder="Enter password" />
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2.65306 5.482C2.02937 6.21812 1.56494 7.07547 1.28906 8C2.1504 10.892 4.82906 13 7.99973 13C8.66173 13 9.30173 12.908 9.9084 12.7367M4.15173 4.152C5.29349 3.39857 6.63178 2.99792 7.99973 3C11.1704 3 13.8484 5.108 14.7097 7.99867C14.2377 9.57823 13.2244 10.9411 11.8477 11.848M4.15173 4.152L1.99973 2M4.15173 4.152L6.58506 6.58533M11.8477 11.848L13.9997 14M11.8477 11.848L9.4144 9.41467C9.60013 9.22893 9.74746 9.00844 9.84798 8.76577C9.9485 8.52309 10.0002 8.263 10.0002 8.00033C10.0002 7.73767 9.9485 7.47757 9.84798 7.2349C9.74746 6.99223 9.60013 6.77173 9.4144 6.586C9.22866 6.40027 9.00817 6.25294 8.76549 6.15242C8.52282 6.0519 8.26273 6.00016 8.00006 6.00016C7.7374 6.00016 7.4773 6.0519 7.23463 6.15242C6.99196 6.25294 6.77146 6.40027 6.58573 6.586M9.41373 9.414L6.5864 6.58667"
                          stroke="#60637A" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  </div>

                  <p className="forgot">
                    Forgot Password?
                    <a href="#">Reset</a>
                  </p>
                  <button type="submit" className="login-btn">
                     Login
                  </button>
                  {/* <Link href="signup" className="login-btn">
                    Login
                  </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
