import Avatar from "./Avatar";

function ProfileHeader({name, image, designation}) {
    return (
        <div className="mb-3">
            <Avatar image={image} />
            <h2 className="text-xl my-2">{name}</h2>
            <h3 className="text-lg">{designation}</h3>
        </div>
    )
}

export default ProfileHeader;