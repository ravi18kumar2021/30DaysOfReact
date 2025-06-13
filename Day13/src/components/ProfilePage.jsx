import ProfileDetails from "./ProfileDetails";
import ProfileHeader from "./ProfileHeader";

function ProfilePage({name, image, designation, description}) {
    return (
        <div className="border-3 border-yellow-300 rounded-md p-4 w-sm">
            <ProfileHeader name={name} image={image} designation={designation} />
            <ProfileDetails description={description} />
        </div>
    )
}

export default ProfilePage;