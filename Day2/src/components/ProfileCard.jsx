function ProfileCard({image, name, role, location}) {
    return (
        <div style={{
            
            padding: "5px"
        }}>
            <img src={image} alt={name} style={{
                border: "5px solid red",
                borderRadius: "15px"
            }} />
            <h3>{name}</h3>
            <p>{role}</p>
            <p>{location}</p>
        </div>
    )
};

export default ProfileCard;