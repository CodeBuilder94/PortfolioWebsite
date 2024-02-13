import React, {useEffect, useState} from "react";



const Carousel =()=>
{
    const data =[{icon:"/src/images/html5.png", href:"https://www.flaticon.com/free-icons/html5", title:"html5 icons", main: "Html5 icons created by Freepik - Flaticon"},
    {icon:"/src/images/css-3.png", href:"https://www.flaticon.com/free-icons/css-3", title:"css 3 icons", main:"Css 3 icons created by Freepik - Flaticon"},
    {icon:"/src/images/java-script.png", href:"https://www.flaticon.com/free-icons/java", title:"java icons", main:"Java icons created by Pixel perfect - Flaticon"},
    {icon:"/src/images/react.png", href:"https://www.flaticon.com/free-icons/react", title:"react icons", main:"React icons created by Freepik - Flaticon"},
    {icon:"/src/images/postgresql.png", href:"https://www.flaticon.com/free-icons/postgresql",title:"postgresql icons",main:"Postgresql icons created by LAFS - Flaticon"}]

    const altText =["HTML5 logo","Css3 logo","JavaScript logo","REACT logo","Postgresql logo",]
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