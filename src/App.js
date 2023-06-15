
import './App.scss'
import React from 'react';
import axios from 'axios';
import ThumbPokemon from './pages/ThumbPokemon';
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  const [pokeData,setData]=React.useState([])
  const[nextUrl,setnextUrl]=React.useState()
  const [InfoPokemon,setInfoPokemon]=React.useState()
  // console.log('the info', InfoPokemon)
  // eslint-disable-next-line no-global-assign
 const [URL,setUrl]=React.useState(`https://pokeapi.co/api/v2/pokemon/`)
//"https://pokeapi.co/api/v2/pokemon-species/1");
const PoketmonApi= async()=>{
  const {data}=await axios.get(URL);
  // console.log('2api',data)
  pokemonItem(data.results)
  setnextUrl(data.next)
  
}
React.useEffect(()=>{
  PoketmonApi();
},[URL])

const pokemonItem=async(res)=>{
  res.map(async(item)=>{
    const result=await axios.get(item.url)
    setData(state => {
      state = [...state, result.data]
      state.sort((a, b) => a.id > b.id ? 1 : -1)
      return state;
  })
  })
}
// console.log('the reu',pokeData)
  return (
    
      <div className="App">
          <Routes>
          <Route path='/' element={ <Home  pokeData={pokeData} nextUrl={nextUrl} setInfoPokemon={setInfoPokemon} setUrl={setUrl} />}/>
           <Route path='/Thumb' element={<ThumbPokemon   data={InfoPokemon}/>}/>
           </Routes>
    </div>
  );
}


export default App;
