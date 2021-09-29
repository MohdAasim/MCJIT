import React,{useState,useEffect,useContext} from 'react';
import Card from './Card'
import axios from 'axios'
import { Navtype } from "../../App";

function CardnTime(){
    const context = useContext(Navtype)
    const {ntype} = context
    const Base_url ='https://api.themoviedb.org/3/discover/movie?'
    const Api_key = 'api_key=d79871871a6a487d6399be6994791b4b&'
    let ctime=new Date().toLocaleTimeString()
    const [sddata,setsddata] = useState([])
    const [time,final]=useState(ctime);
    const Inctime=()=>{
        ctime=new Date().toLocaleTimeString();
        final(ctime)        
    }
    setInterval(Inctime,1000);
    useEffect(() => {
    let istrue = false;
       const execute = async () => {
            try{
                 if(!istrue){ 
                if(ntype==='Popular')
                   { var res =await axios.get(`${Base_url}${Api_key}language=en-US&sort_by=popularity.desc`)
                  }
                   else if(ntype==='Latest')
                   {  res =await axios.get(`${Base_url}${Api_key}language=en-US&sort_by=release_date.asc`) 
                  }
                   else if(ntype==='Favourites')
                   {  res =await axios.get(`${Base_url}${Api_key}language=en-US&sort_by=vote_average.asc`)   
                  }
                     setsddata(res.data.results)
                  }
                   }catch(err){
                        console.log(err);
                    }
        };
                execute();
                return () => {
                istrue = true
                    }
      },[ntype])
    return(
        <>
        <h1 className="navbar" > Top {sddata.length} {ntype} Web Series {time} </h1>
        {sddata.map((val,index)=>{
        return(
        <Card 
        key={index}
        imgsrc={`https://image.tmdb.org/t/p/w500/${val.poster_path}`}
        category={val.vote_average} 
        title={val.title} 
        overview={val.overview}
        />
        )
       })}
        </>
    )
}
export default CardnTime;