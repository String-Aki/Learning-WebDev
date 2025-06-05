export default function Entry (props){
    console.log(props)
    return (
        <article className="entry">
            <div className="main-img">
                <img 
                src={props.img.src}
                alt={props.img.alt}
                />
            </div>
            <div className="main-content">
                <img 
                src="/src/assets/marker.png" 
                alt="marker"
                />
                <span>{props.location}</span>
                <a href={props.gmap_link}>View on Google Maps</a>
                <h1 className={"title"}>{props.title}</h1>
                <p className="dates">{props.dates}</p>
                <p className="text">{props.text}</p>
            </div>
        </article>
    )
}