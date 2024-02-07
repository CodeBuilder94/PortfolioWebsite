import React, {useEffect, useState} from "react";
import html5 from "../images/html5.png"//'src/images/html5.png';


const Carousel =()=>
{
    const data =["/src/images/html5.png","2","3","4","5"]
    const altText =["HTML5 logo","2","3","4","5"]
    const attribute =[]
    //<a href="https://www.flaticon.com/free-icons/html5" title="html5 icons">Html5 icons created by Freepik - Flaticon</a>
    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselInfiniteScroll =() =>
    {
        if(currentIndex === data.length-1)
        {
            return setCurrentIndex(0);
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect( ()=>
        {
            const interval = setInterval(() =>{carouselInfiniteScroll()},3000)
            
            return() => clearInterval(interval)
        }
    )

    return(
        <>
            <div className="carousel-container">
                {
                    data.map((item,index)=>
                    {
                        return <img className="carousel-item" style={{transform: `translate(-${currentIndex *100}%)`}} key={index} src={item} alt={altText[index]}/>
                    })
                }
            </div>
            <div className="attribute">
                
            </div>
        </>
    )
}

export default Carousel;