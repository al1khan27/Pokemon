import React from 'react'
import './thumb.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Progressbar from '../components/ProgresBar'
// or
export const ThumbPokemon = ({data}) => {
const [SpecPok,setSpecPok]=React.useState(' ')
console.log("the ot 124214" ,SpecPok)
  const pokSpec=async(res)=>{
    const result =await axios.get(res.species.url)
      //  console.log("the ot",result.data.flavor_text_entries[0].flavor_text)
        setSpecPok(result.data.flavor_text_entries[0].flavor_text)
    //    setSpecPok(state => {
    //     state = [...state, result]
    //     return state;
    // })
  }
  pokSpec(data)
  React.useEffect(()=>{
    pokSpec();
  },[data])
  console.log('umed',data)
  return (
       <div>
        {
          (!data)? '':(
            <div className='Thumb-pok'>
            <div className="up-pok">
            <div className="type"> <h3>grasss</h3><span>poison</span></div>
             <h4>{data.id}</h4>
            </div>
            <div className="main-info">
            <div className="top">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg `}alt="" />
           <div className="text">
           <h1>{data.name}</h1>
           <br/>
             <h2>{SpecPok}
         </h2> 
           </div>
            </div>
             <div className="Chracters">
              {
                data.stats.map(pok=>{
                  return(
                    <h4>{pok.stat.name}<Progressbar  progress={pok.base_stat}/></h4>
                  )
                })
              }
             </div>
            </div>
            <Link to='/'>   <button style={{position:'fixed', bottom:'50px',left:'-450px', padding: '20px 50px',background: 'orange',color:'white',marginLeft: '500px' ,borderRadius:'20px'}}>Back</button></Link>
             </div>
          )
        }

    </div>
  )
 
}
export default ThumbPokemon;