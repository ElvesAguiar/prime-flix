
import { useEffect, useState } from "react";
 import api from '../../services/api'

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
      console.log(reponse.data.results);
}

    loadFilmes();
  },[])

    return(
      <div>
        <h1>BEM VINDO A HOME</h1>
      </div>
    )
  }
  
  export default Home;