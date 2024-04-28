import { useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    };

    const handleLogout = () => {
        // Handle logout logic here
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <header className="header">
                <nav className="h-nav">
                    <div className="h-logo">
                        <h2>LabAssist</h2>
                    </div>
                    <div className="nav-menu">
                        <ul className="h-nav-list">
                            <li className="h-nav-item"><a className="h-nav-link" href="./home.html">Home</a></li>
                            <li className="h-nav-item"><a className="h-nav-link" href="./profile.html">Profile</a></li>
                            <li className="h-nav-item"><button className="h-nav-link" onClick={handleLogout}>Log out<i className="fa fa-sign-out logout-icon" style={{ fontSize: '30px' }}></i></button></li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section>
                {/* Side nav */}
                <div className="side-nav grid-item-1" id="side-nav">
                    <button className="side-close-btn" id="sidenav-close-btn"><i className="fa fa-close"></i></button>
                    <div className="profile">
                        <img id="pro-pic" src="images/propic1.png" alt="" />
                        <div className="name" id="name">Nomanur Rahman Noman</div>
                        <div className="role" id="user-type">
                            <p>Student</p>
                        </div>
                    </div>
                    <div className="side-nav-url">
                        <div className="url">
                            <ul>
                                <li><button id="item-btn"><a href="./product.html" id="item-list">Item List</a></button></li>
                                <li><button id="request-btn"><a href="" id="req-list">Request</a></button></li>
                                <li><button id="inventory-btn"><a href="" id="db-edit">Inventory</a></button></li>
                                <li><button id="searching-btn"><a href="" id="std-search">Searching</a></button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <section className={`edit-profile-section animate ${isEditing ? 'active' : ''}`} id="edit-profile-section">
                    <button className="profile-close-btn" id="profile-close-btn" onClick={toggleEditing}><i className="fa fa-close close"></i></button>
                    <div className="edit-profile-modal">
                        <form onSubmit={handleSubmit}>
                            <h3>Edit Profile</h3>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" placeholder="Your name" id="name" />

                            <label htmlFor="uname">Username</label>
                            <input type="text" name="uname" placeholder="User name" id="uname" />

                            <label htmlFor="uid">User ID</label>
                            <input type="text" name="uid" placeholder="University ID" id="uid" />

                            <label htmlFor="session">Session</label>
                            <input type="text" name="session" placeholder="Your session" id="session" />

                            <label htmlFor="dept">Department</label>
                            <input type="text" name="dept" placeholder="Your department" id="dept" />

                            <label htmlFor="phone-no">Phone no</label>
                            <input type="tel" name="phone-no" placeholder="Your phone no" id="phone-no" />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Your email address" id="email" />

                            <label htmlFor="">Upload Profile Photo</label>
                            <input type="file" name="profile-image" id="profile-image" accept="image/*" />
                            <button type="submit" className="submit-btn" id="submit-btn">Submit</button>
                        </form>
                    </div>
                </section>

                <div className="info-section grid-item-2">
                    <button className="side-toggle-btn" id="sidenav-toggle-btn"><i className="fa fa-bars"></i></button>
                    <h2>User's info:</h2>
                    <div className="card">
                        <div className="card-body">
                            <button id="edit-icon" onClick={toggleEditing}><i className="fa fa-pencil edit"></i></button>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="tags">Name</td>
                                    <td>:</td>
                                    <td id="td-name">Nomanur Rahman Noman</td>
                                </tr>
                                <tr>
                                    <td className="tags">User Type</td>
                                    <td>:</td>
                                    <td id="td-usertype">Student</td>
                                </tr>
                                <tr>
                                    <td className="tags">Username</td>
                                    <td>:</td>
                                    <td id="td-username">noman2001011</td>
                                </tr>
                                <tr>
                                    <td className="tags">ID</td>
                                    <td>:</td>
                                    <td id="td-uid">2001011</td>
                                </tr>
                                <tr>
                                    <td className="tags">Department</td>
                                    <td>:</td>
                                    <td id="td-dept">IRE</td>
                                </tr>
                                <tr>
                                    <td className="tags">Session</td>
                                    <td>:</td>
                                    <td id="td-session">2020-21</td>
                                </tr>
                                <tr>
                                    <td className="tags">Phone no</td>
                                    <td>:</td>
                                    <td id="td-phn">01641578822</td>
                                </tr>
                                <tr>
                                    <td className="tags">Email</td>
                                    <td>:</td>
                                    <td id="td-email">2001011@iot.bdu.ac.bd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
