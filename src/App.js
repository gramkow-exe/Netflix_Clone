import React, {useEffect, useState} from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie"
import Header from "./components/Header";

export default () =>{

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {
      // Pegando lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter(i=>i.slug === "originals")
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv")
      setFeaturedData(chosenInfo);
    }
    
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY>10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }
    window.addEventListener("scroll", scrollListener);

    return ()=>{
      window.removeEventListener("scroll", scrollListener)
    }
  })

  
  return(
    <div className="page">

      <Header black={blackHeader}/>
      {featuredData && <FeaturedMovie item={featuredData}/>}
      <section className="lists">
        {movieList.map((item, key)=>(
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>
      <footer>
        Feito com <span role="img" aria-label="coração">❤️‍🔥</span> por <span className="autor">Gramkow</span>
        <br />Direitos de imagem para <a style={{textDecoration: "none"}} href="https://netflix.com"><span style={{color:"red"}}>Netflix</span></a>
        <br/>Dados pegos do site Themoviedb.org
        <br/>Suporte por B7Web
      </footer>

      {movieList.length <= 0 && 
        <div className="loading">
          <img style={{width: 800}}src="https://i0.wp.com/www.maggt.com/wp-content/uploads/2021/10/netflix-logo-animated.gif?fit=1000%2C568&ssl=1" alt="Carregando"/>
        </div>
      }
    </div>
  );
}

