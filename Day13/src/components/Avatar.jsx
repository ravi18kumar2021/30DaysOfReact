function Avatar({name, image}) {
    return (
        <img className="mx-auto border-3 border-green-600 rounded-xl" src={image} alt={name} />
    )
}

export default Avatar;