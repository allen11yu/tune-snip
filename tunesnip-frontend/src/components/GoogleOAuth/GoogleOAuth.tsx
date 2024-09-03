import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./GoogleOAuth.css";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { User } from "../../types/user";

interface GoogleOAuthProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export function GoogleOAuth({ user, setUser }: GoogleOAuthProps) {
    const handleGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const userInfo = (await signInWithPopup(auth, provider)).user;
        const userObj: User = {
            uid: userInfo.uid,
            pfp: userInfo.photoURL,
            email: userInfo.email
        }
        setUser(userObj);
    }

    const handleSignOut = () => {
        setUser(null);
        signOut(auth);
    }

    const googleSignIn = (
        <button className="btn" onClick={handleGoogle}>
            <p>Sign in with Google</p>
            <FontAwesomeIcon icon={faGoogle} />
        </button>
    );

    const profile = (
        <div className="profile-container">
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={user?.pfp ? user.pfp : ""} alt={"Profile picture for " + user?.email} />
                </div>
            </div>
            <button className="btn" onClick={handleSignOut}>Sign out</button>
        </div>
    );

    return (
        <div className="profile-container">
            {user ? profile : googleSignIn}
        </div>
    );
}