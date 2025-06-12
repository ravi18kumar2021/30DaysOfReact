// import styles from './ProfileCard.module.css'

// export default function ProfileCard({name, image, designation, description}) {
//     return (
//         <div className={styles.card}>
//             <img className={styles.image} src={image} alt={name} />
//             <div className={styles.details}>
//                 <h2>{name}</h2>
//                 <h4>{designation}</h4>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

export default function ProfileCard({ name, image, designation, description }) {
    return (
        <div className="border-4 border-red-300 mt-4 p-2 shadow-md font-serif">
            <img className="mx-auto rounded-md border-3 border-blue-400 my-2" src={image} alt={name} />
            <div className="bg-gray-200 p-4 rounded-t-md">
                <h2 className="text-gray-800 text-2xl">{name}</h2>
                <h4 className="text-gray-600 text-xl">{designation}</h4>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    )
}