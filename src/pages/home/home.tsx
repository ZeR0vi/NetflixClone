import { useState } from 'react'

import netflix from '../../assets/netflix.png'

import './style.scss'


const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "&api_key=370622c56dad0e3d5722e5ec0ccb8d71"

let Url = BASE_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY 


//https://www.themoviedb.org/

export function Home() {


    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(Url)


  return (
    <div>  
    <header>
      <div className="routes">
          <div className="logo">
             <img className='netflix' src={ netflix } alt="logo" />
          </div>

             <div className="navigations">
                <nav>
                    <ul>  
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Novo</a></li>  
                        <li><a href="#">Lista</a></li>
                    </ul>
                </nav>
        </div>

      </div>
    </header>


    <main>

        <div className="film">
            <h2>The Flash</h2>
            <button type='button'>Assistir</button>
            <button type='button'>Adicionar á lista</button>
        </div>


        <h1>ORIGINAIS DA NETFLIX</h1>
        <h1>MAIS BEM AVALIADO</h1>
        <h1>POPULARES</h1>
        <h1>EM BREVE</h1>
    </main>
</div>
  )
}


