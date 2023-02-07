import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (<Wrapper>
        <h3>Contact Me</h3>
    <div className="ccontainer">

        <div className="scontainer">
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8468.347349315396!2d75.6280063566092!3d26.823998228209497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a2fee1e0bbd%3A0xb92aaf9176f526ce!2sArya%20Institute%20of%20Engineering%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1662981438422!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
           
        </div>
        <div className="form">
            <form action="#" method='POST' className='forminputs'>
               <p> Feel Free to Contact Me:-</p>
                
                <input type="text" name='username' placeholder='Username' className='inputs' />
                <input type="email" name='email' placeholder='Email' className='inputs' />
                <textarea name="description" id="" cols="30" rows="5" className='inputs' placeholder='Discribe here'></textarea>
               <input type="submit" className='btn btnsub'/>
            </form>
        </div>

    </div>
    


  </Wrapper>
 
  )
}
const Wrapper = styled.section`
.ccontainer{
    width: 100vw;
    /* max-width: 120rem; */

    align-items: center;
    display: flex;
    flex-direction: column;
    

.scontainer{
    width: 100%;



.map{
 padding: 1rem;

    margin-top: 2rem;
width: 100%;


}
}
.form{
margin-top: 3rem;

    .forminputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 40rem;

        .inputs{
            width: 100%;
            padding: 1rem;
            outline: none;
            
          

            &:hover,&:active{
               outline: 0.1px solid ${({theme}) => theme.color.btbg};
              

            }
         
        }
        .btnsub{
                cursor: pointer;
                &:hover,&:active{
                    transform: scale(0.9);
                    background-color:${({theme}) => theme.color.white};
                    color:${({theme}) => theme.color.black};
                    border: 1px solid ${({theme}) => theme.color.btbg};
                    transition: all ease 0.2s;
                    
                    
                    
                }
            }
    }
}
}

`;

export default Contact

