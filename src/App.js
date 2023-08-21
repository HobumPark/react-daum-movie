
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
import SearchInput from './components/common/SearchInput.js';

import Home from './components/Home/Home.js';
import Login from './components/common/Login.js';
import KakaoLoginPage from './components/common/KakaoLoginPage.js';
import SearchResult from './components/SearchResult/SearchResult.js';
import MovieView from './components/SearchResult/MovieView.js';
import MovieRunning from './components/MovieRunning/MovieRunning.js';
import MovieRanking from './components/MovieRanking/MovieRanking.js';
import MoviePointReview from './components/MoviePointReview/MoviePointReview.js';
import MoviePoint from './components/MoviePointReview/MoviePoint.js';
import MovieReview from './components/MoviePointReview/MovieReview.js';

import btn_top from './images/home/btn_top.png';

function App(){

    return(
      <div id='App'>
        <BrowserRouter>
          <Header/>
          <div id='main'>
            <SearchInput/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/search' element={<SearchResult />} />
                <Route path='/login' element={<Login />} />
                <Route path='/kakao' element={<KakaoLoginPage />} />
                <Route path='/movie/view/*' element={<MovieView />} />
                <Route path='/movie/running/*' element={<MovieRunning />} />
                <Route path='/movie/sdb/*' element={<MovieRanking />} />
                <Route path='/movie/*/list.naver' element={<MoviePointReview />} />
                <Route path='/movie/point/af/list.naver' element={<MoviePoint />} />
                <Route path='/movie/board/review/list.naver' element={<MovieReview />} />
            </Routes> 
            <Footer/>
          </div>
          <div id="top">
                <img src={btn_top} alt='탑'/>
          </div>
         </BrowserRouter>
      </div>
  )
}

export default App;
