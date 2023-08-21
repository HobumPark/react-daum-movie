
import '../../css/Home/Home.css'
import HomeSlide from './HomeSlide';
import HomeContents01 from './HomeContents01';
import HomeContents02 from './HomeContents02';
import HomeContents03 from './HomeContents03';
import Notice from './Notice';

function Home(){
    return(
        <div id='home'>
            <HomeSlide/>
            <HomeContents01/>
            <HomeContents02/>
            <HomeContents03/>
            <Notice/>
        </div>
    )
}

export default Home;