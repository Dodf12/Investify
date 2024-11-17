export default function Card({name, role, description, profileImg}) {
    
    return (
        <div className="card bg-white500 w-[20vw] shadow-xl pb-8 text-black">
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p><strong>Role: </strong>{role}</p>
            <p><strong>Description: </strong>{description}</p>
            </div>
        <figure>
            <img
                className="rounded-2xl"
                src={profileImg}
                alt={`Profile Photo for ${name}`}
                style={{ width: "75%", height: "75%"}}/>
        </figure>
        </div>
    )
}