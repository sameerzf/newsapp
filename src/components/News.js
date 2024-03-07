import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

const News=(props)=> {


    // articles = [
    //     {
    //       "source": {
    //       "id": null,S
    //       "name": "CBS Sports"
    //       },
    //       "author": "",
    //       "title": "What we learned from Super Wild Card weekend, Day 2: Dak Prescott, Cowboys remain frauds - CBS Sports",
    //       "description": "The Cowboys choked in the playoffs again",
    //       "url": "https://www.cbssports.com/nfl/news/what-we-learned-from-super-wild-card-weekend-day-2-dak-prescott-cowboys-remain-frauds/",
    //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/01/15/287a6888-4505-44ca-99c4-8a89a6550dd0/thumbnail/1200x675/ce5fb92c04a80b95a103a52d6c6c4920/newdakmccarthy.jpg",
    //       "publishedAt": "2024-01-15T14:08:00Z",
    //       "content": "The second day of Super Wild Card Weekend did not go as expected, at least for the Dallas Cowboys. Filled with Super Bowl aspirations, the Cowboys fell in the wild card round for the second time in t… [+7046 chars]"
    //       },
    //     {
    //       "source": {
    //       "id": "fox-news",
    //       "name": "Fox News"
    //       },
    //       "author": "Greg Norman, Yonat Friling",
    //       "title": "'Terror attack' in Israel leaves 1 dead, more than a dozen injured, police say - Fox News",
    //       "description": "Two individuals from the West Bank have been arrested after a series of ramming attacks in a city near Tel Aviv, Israel left at least 17 injured, police say.",
    //       "url": "https://www.foxnews.com/world/terror-attack-israel-dead-injured-police-say",
    //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/Israel-ramming-attack-1.jpg",
    //       "publishedAt": "2024-01-15T13:47:49Z",
    //       "content": "Read this article for free!\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you are agreeing… [+2007 chars]"
    //       },
    //     {
    //       "source": {
    //       "id": "usa-today",
    //       "name": "USA Today"
    //       },
    //       "author": "Jay Stahl",
    //       "title": "Miss America 2024 is active-duty Air Force officer, Harvard student: Meet Madison Marsh - USA TODAY",
    //       "description": "Madison Marsh is the 2024 Miss America after being crowned Sunday. She is the first Air Force officer to hold the title in the competition's history.",
    //       "url": "https://www.usatoday.com/story/entertainment/tv/2024/01/15/miss-america-active-duty-air-force-officer/72230028007/",
    //       "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/15/USAT/72230311007-shutterstock-editorial-14300634-g-1.jpg?crop=3999,2250,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
    //       "publishedAt": "2024-01-15T13:41:32Z",
    //       "content": "The newly minted Miss America is the competition's first active-duty Air Force officer.\r\nMiss Colorado Madison Marsh was crowned Miss America during the Sunday night ceremony in Orlando. Marsh is a 2… [+1499 chars]"
    //       }
    //     ]
    const [articles,setArticles]=useState([])
    const [pages,setPages]=useState(1)

    const [totalResults,setTotalResults]=useState(0)
     useEffect(() => {
   updateNews()}, [])
    
    const updateNews = async ()=> {
  
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c779d7b42320429aaabbbd446f13330e&page=${pages}&pageSize=${props.pageSize}`; 
      let data = await fetch(url);
      let parsedData = await data.json()


      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
     }
    //it runs after render method 
    // const  componentDidMount=async()=>{
    //   let url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c779d7b42320429aaabbbd446f13330e&page=1&pageSize=5`
    //   let data = await fetch(url);
    //   let parsedData= await data.json();
    //   setArticles(parsedData.articles)
    //   setTotalResults(parsedData.totalResults)
    // }

     const handleNextClick= async()=>{console.log("next");
     if(pages+1>Math.ceil(totalResults/20)){

     }
     else{
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c779d7b42320429aaabbbd446f13330e&page=${pages+1}&pageSize=5`
    let data = await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles)
    console.log(parsedData)

    setPages(pages+1)}
  }
    const handlePreviousClick=async()=>{console.log("previous")
    ;
    let url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c779d7b42320429aaabbbd446f13330e&page=${pages-1}&pageSize=5`
    let data = await fetch(url);
    let parsedData= await data.json();
    setArticles(parsedData.articles)
    console.log(parsedData)
   setPages(pages-1)
  }


    return (
      <div className='container my-3'>
      
        <div className="row">
        {articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>

        })}
          </div>
      

        <div className="container my-3 d-flex justify-content-between">
        <button type="button" className="btn btn-primary" style={{color:"black"}} onClick={handlePreviousClick}
        disabled={pages<=1}>Previous</button>
        <button type="button" className="btn btn-primary"  style={{color:"black"}} onClick={handleNextClick} disabled={pages+1>Math.ceil(totalResults/20)
}>Next</button>
        </div>
        
        </div> 
    
    )
  }

News.defaultProps={
  category:'general'
  
  }
News.propTypes={
    category:PropTypes.string
  }
export default News
