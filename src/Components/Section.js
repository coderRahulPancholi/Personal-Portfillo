import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'



function Section() {
  
    

        
 

  return (
  <Wrapper className='df ac'>
    
        <div className="section-data df jc">
            <div>

           
            <p className='toppara'>Welcome I'm</p>
            <h1 className='myname'>Rahul<b className='surname'> Sharma</b></h1>
            <p className='mydata'>A fornted devopler currently i am learning react js.
            </p>
            <p className='mydata'>
            I have created some beautifull website using it go trough my projects section to see it.

            </p>
            <button className='bt hire-btn btn-text'>Hire Me</button>
            </div>
        </div>
      
    



  </Wrapper>

   
  )
}
const Wrapper = styled.section`
width: 100%;
/* height: 70%; */
height: calc(100vh - 70px);
background-color: ${({theme}) => theme.color.bg1};






.section-data{
    width: 100%;
    /* animation: loadani 1s ease  1  ; */
   
   
    
 
  
    div{
        width: 90%;
        max-width: 1200px;

    display: flex;
    flex-direction: column;
    
    align-self: flex-start;
    /* padding: 20px; */
    
    gap: 10px;
    color: white;
    

    }

h1{
    width: 100%;
    
    /* color: white; */
    font-weight: 100;

}
a{
    text-decoration: none;
    color: black;
    font-weight: 800;
}
p{
    width: 100%;
    /* overflow: hidden; */
    
}
.surname{
    /* width: 100%;  */
    color:${({theme}) => theme.color.btbg};
    
}




}





`

export default Section
