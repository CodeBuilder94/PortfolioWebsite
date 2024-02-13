import React, {useEffect, useState} from "react";
import html5 from "../images/html5.png";//'src/images/html5.png';


const Carousel =()=>
{
    const data =[{icon:"/src/images/html5.png", href:"https://www.flaticon.com/free-icons/html5", title:"html5 icons", main: "Html5 icons created by Freepik - Flaticon"},
    "2","3","4","5"]
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
                        return (<img className="carousel-item" style={{transform: `translate(-${currentIndex *100}%)`}} key={index} src={item.icon} alt={altText[index]}/>)
                    })
                }
            </div>
            <div className="attribute">
            {
                data.map((item,index )=>
                {
                    return (<a className="attribute-item" key={index} href={item.href} title={item.title} style={{transform: `translate(-${currentIndex *100}%)`}}>{item.main}</a>)
                })
            }
            </div>
        </>
    )
}

export default Carousel;