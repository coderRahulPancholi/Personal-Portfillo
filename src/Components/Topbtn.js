import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import styled from 'styled-components'



function Topbtn() {
    const [topbtnvissible , settopbtnvissible]= useState(false);

    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:'smooth'})

    };
    const listenToScroll=(()=>{
        let mheight = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
     
        console.log(winScroll);
        if(winScroll > mheight){
            settopbtnvissible(true);

        }else{
            settopbtnvissible(false);
        }
    })

    useEffect(()=>{
        window.addEventListener("scroll", listenToScroll);
        return()=> window.removeEventListener("scroll", listenToScroll);

    },[]);

  return (
 <Wrapper>
{topbtnvissible && (
    <div className='topbtn' onClick={goToTop}>
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZ0lEQVR4nL1UO2zTUBR9TLRIfKbCwBoVZciI2j1SkFo6wJaNgSIFNrJkakUXYICmqCRRI2pSFlLiUA9EEShWf5JDHQEFhlA7jRI7Ig7gyM5Ehwv3NTH5OFW68KQjWe9dH513zz2PkP+1TNM8bxjGtKZpCU3TPiFUVV1TVfWOaZojAxMBwHC9Xn9Y0378Xn6ZgenAEnj9YQr8ZuI8VL9rB/l8PgQAQ0eSNRqNC7quf37+ah0mfUFwzcdhlOVh9PX6IVie7uFZjN0ARVEkQRAu9lM2pOv67r2FBIzPMv9I+mBsloG5Jwkol8v7kUjkbA8hXhOVDUJmkc4sU6WCIKz0GIA9m/DND0zWwuTtIO1pIBBwWoSGYdxCA2jPbH668jZLYXfmehSnRnEcd98irNVq7M3AUqcBTUy9ew/KTx0qv3S4ntnpOb+U4AH/FUVxmxByokX4Eceiu/haZocSPf0iUeA37nXXef1hkGV5jxByihJqmtZD2FIW+ipZe8Hdb7ZKvf4wSJKEhIduVyoVrv3KY2+2LWXdalpKscbmyicpIcYJG9syxbm2ATc2P/R1Fs+wxjJllQeGYRbbx2akWq0dTPiCxx6bq82x8Xg8no5ZxGzikGICBiUbn3kGL5KbkE6nk4SQMz3RUxRlD+OECRiEbG6BhWKxWHI6nZdt84xBL5VKMirFBLgex2nT22cOe4aJQmWFQmHf7XZPWfNnt6LR6OlsNruCfUGj6PN1N0RBn69VHrDfqVQq6XA4UFl/svaF2eQ47kEul9uSZVlCiKK4FYvFFpsGdPbsGAsVDBNCzhFCjn5Q/1b/AWEe9cbAL7v1AAAAAElFTkSuQmCC" alt=''/>
    </div>
    )}

 </Wrapper>
  )
};
const Wrapper = styled.section`

.topbtn{
    cursor: pointer;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    z-index: 99;
    animation: topindi 1s ease-in-out 3s infinite ;
  
   


    @keyframes topindi {

      from{
        transform: translateY(-10px);

      }  
      to{
        transform: translateY(0px);

      }
    }
}

`

export default Topbtn
