import react, {useState} from "react";
import "./FeaturedMovie.css"
export default ({item}) => {
    let firsDate = new Date(item.first_air_date);
    let genres = [];
    let overview = item.overview.toString()
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }
    return (
        <section className="featured" style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }}>
            {/* <div>{item.original_name}</div> */}
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">
                            {item.vote_average} pontos
                        </div>
                        <div className="featured--year">{firsDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? "s" : ""}</div>
                        <div className="featured--description">{overview.length > 250 ? overview.substring(250, 0) + "...": overview}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton">&#9658; Assistir</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">+ Minha Lista</a>
                        </div>
                        <div className="featured--genres"><strong>Gêneros</strong> {genres.join(", ")}</div>
                    </div>

                </div>
            </div> 
        </section>
    )
}