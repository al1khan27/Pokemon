import React from 'react'
  
const Progressbar = ({progress}) => {
     
    const Parentdiv = {
        height: 12,
        width: '60%',
        backgroundColor: 'whitesmoke',
        borderRadius: 20,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: 'rgb(53, 159, 118)',
        borderRadius:20,
        textAlign: 'right'
      }
      
      const progresstext = {
        paddingLeft: 680,
        color: 'white',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}
  
export default Progressbar;