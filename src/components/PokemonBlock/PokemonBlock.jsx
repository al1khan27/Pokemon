import React from 'react'
import './PokemonBlock.scss'
import { Link } from 'react-router-dom'


 const PokemonBlock = ({Allpok,allInfoPoke,Search}) => {
 console.log('tt',Search)
  return (
      // eslint-disable-next-line array-callback-return
      Allpok.filter(obj=>obj.name.toLowerCase().includes(Search.toLowerCase())).map((item)=>{
        return(
        <Link to="/Thumb">
        <div  className='wrapper' key={item.id} onClick={()=>allInfoPoke(item)}>
         <span>#{item.id}</span>
        <Link to="/Thumb"> <img src={item.sprites.other.dream_world.front_default}alt="pokemon"/></Link>
        <h1>{item.name}</h1>
       </div>
        </Link>
        )
       })
      
  
  )
}
export default PokemonBlock;
