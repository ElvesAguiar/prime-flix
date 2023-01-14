
import { useEffect, useState } from "react";
 import api from '../../services/api'
 import { Link } from "react-router-dom"; 
 import './home.css'

//URL DA API: movie/now_playing?api_key=3976d2a147b98c9113783fca3aee342c&language=pt-BR

function Home(){
const [filmes, setFilmes] = useState([]);

  useEffect(()=>{
    async function loadFilmes(){
      const reponse = await api.get("movie/now_playing?api_key=3976d2a147b98c9113783fca3aee342c&language=pt-BR",{
        params:{
          api_key:"3976d2a147b98c9113783fca3aee342c",
          language: "pt-BR",
          page :1
        }
      }
  )
     // console.log(reponse.data.results.slice(0,10));
     setFilmes(reponse.data.results.slice(0,10));
}

    loadFilmes();
  },[])

    return(
      <div className="container">
        <div className="lista-filmes">{
          filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img src = {`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt = {filme.title}/>
                <Link to={`/filme/${filme.id}`} >Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    )
  }
  
  export default Home;