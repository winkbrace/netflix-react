import "./Profile.css";
import profileRobot from '../assets/img/profile_robot.png';

const Profile = (props) => {
    return (
        <div className="profile">
            <img src={profileRobot} alt="profile" />
        </div>
    );
}

export default Profile;