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
       <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKklEQVR4nO2azU8TURDA9+THQaOJXwcTjGn6XkmJBzzqzfiRqEjnvdiWg3+BgfhfKB40khivHontDLWgnLwS4lkK9ORnIMgZxFAz3dqA3S3d3bcfEiaZZNNuX+eXmXk782Yt60D2qQwUqyczObwnFY0LRdMSsCYA1wXQpq24LhUuNL9TNJ6GqaFLQ3jCSoKkbs4cFopGhKJZCfRbKmp4Uv4N4DuhschrWVHLeT15VGp6JAG/eTbeFQq/SoVjfQ8+HIkEIg3lWxKobgzgHxWAyyKHN0IDYNdLhc/DAugEotfseaMQ2fzUWQn0MSoI2VacvzhcOmMEQtzHC+zu6CHI9ozCJbYhEERKT57mbTQuCPlXger9unrOFwTvHvGEE7mGma8tWip8Gb/xtDvMAF9432ITYLh0DLPy9d6f1kCLsRusXL2y3NNDs/nEToDBshuMptE9vWGXCvEbK7vrl66JzwVgAoxs9KRQLnQDmTX8hytS46AAuty8Nrv2jGs/4asU7wYxXMq2c2+4lDUJIxRupUZmjneAtJoi4xBNgJ3XJmFyeKdztwJ6GgqEbbjTZ8H/C/CJU35MB1+YVoXGAV4vnatIAfjD9TtF3w3AVBxAcCkET/i5p+HBI7VOEKCfoXhir3uDeAZo1QlkM3QI4zC4YQbED4RRGNwIHlpBIEzBgHNoeat4NQ4aStr2BiDsCsCLRxYcQLDqZZG0Ll8xWHqs8FoZwKuBt18+xjRgUKQqgB6HXaJEo1C+3QHCB8qGi8awvfHLsWhshdf7/wcEq44QzYTXWIzbQNm75vdFq9uvJw+5gtjhhWOJDyuFD7tC7PBKLcEQSz2fOPJ8Im6DpaPidiZH13qCaMMonIjfcNqtgM88QbRDTOF8gkJqbs8Ed5N0oXIqEfkCVOdhkxV40BO8DfbvCaDFTO5Nn2VCePwVR5gJhXM8bLLCGYbidkTh9CrU2TvPJ0INNcCa5y3WrzRnKJpGuVQwmAuf+YkdyxsQdhVQLvDhHp/F+siBrVZnmve9tZoW7g34LJaPMYWit60XaNbaL9UoWpNAn7g95c6OmyJxl44ZN+RArGTIH31QF3B1zHiFAAAAAElFTkSuQmCC" alt='Top' />
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
    
   
   
  
   img{
    background-color: ${({theme})=>theme.color.white};
    border-radius: 100%;

   }


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
