
import '../../../css/SearchResult/MovieViewTab/MakingContents.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Crew from './Crew.js';
function MakingContents(){

    const [actor,setActor]=useState([])
    const [director,setDirector]=useState([])
    const [mainActor,setMainActor]=useState([])

    useEffect(()=>{
        getMovieDirectorActorInfo()
    },[])

    const getMovieDirectorActorInfo=async()=>{
        const result = await axios.get('/api/v2/movie_director_actor.json')
        console.log('movie_direct_actor')
        console.log(result)
        console.log(result.data.movie_res[0])
        const temp_data=result.data.movie_res[0]
        console.log('temp_data1')
        console.log(temp_data)

        temp_data.actor_info = JSON.parse(temp_data.actor_info)
        temp_data.director_info = JSON.parse(temp_data.director_info)
        temp_data.main_actor_info = JSON.parse(temp_data.main_actor_info)
        console.log('temp_data2')
        console.log(temp_data)

        const driector=temp_data.director_info.director;
        const mainActor=temp_data.main_actor_info.main_actor;
        const actor=temp_data.actor_info.actor;

        setDirector(driector)
        setMainActor(mainActor)
        setActor(actor)
    }

    const directorList = director.map(
        (data)=>(<Crew role={data.role} 
            img_name={data.img_name}
            kor_name={data.kor_name}
            eng_name={data.eng_name}/>)
    )

    const mainActorList = mainActor.map(
        (data)=>(<Crew role={data.role} 
            img_name={data.img_name}
            kor_name={data.kor_name}
            eng_name={data.eng_name}/>)
    )

    const actorList = actor.map(
        (data)=>(<Crew role={data.role} 
            img_name={data.img_name}
            kor_name={data.kor_name}
            eng_name={data.eng_name}/>)
    )

    return(
        <div id='making-contents'>
            <div id='director'>
                <h1>감독</h1>
                <div id='director-contents'>
                    {directorList}
                </div>
            </div>
            <div id='main-actor'>
                <h1>주연</h1>    
                <div id='main-actor-contents'>
                    {mainActorList}
                </div>
            </div>
            <div id='actor'>
                <h1>출연</h1>
                <div id='actor-contents'>
                    {actorList}
                </div>
            </div>
            <div id='maker'>
                <h1>제작진</h1>
                <div>

                </div>
            </div>
            <div id='movie-company'>
                <h1>영화사</h1>
                <div>
                    
                </div> 
            </div>
        </div>
    )
}
export default MakingContents;