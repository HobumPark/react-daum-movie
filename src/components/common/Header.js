
import '../../css/common/Header.css'
import { useEffect, useState } from 'react';
import logo_naver from '../../images/header/logo_ci.png'
import logo_svc from '../../images/header/logo_svc.png'
function Header() {
    const [menu,setMenu]=useState('')

    useEffect(() => {
        console.log(window.location)
        console.log(window.location.pathname)
        const pathname = window.location.pathname
        if (pathname ==='/') {
            setMenu(0)
        } else if (pathname ==='/movie/running/current.naver') {
            setMenu(1)
        } else if (pathname ==='/movie/running/premovie.naver') {
            setMenu(2)
        } else if (pathname ==='/movie/running/movieclip.naver') {
            setMenu(3)
        } else if (pathname ==='/movie/sdb/rank/rmovie.naver') {
            setMenu(4)
        } else if (pathname ==='/movie/sdb/browsing/bmovie_nation.naver') {
            setMenu(5)
        } else if (pathname ==='/movie/point/af/list.naver') {
            setMenu(6)
        } else if (pathname ==='/movie/board/review/list.naver') {
            setMenu(7)
        }
         
    },[])

    return(
        <div id='header'>
            <div id='logo'>
                <a href='/'>
                    <img src={logo_naver} alt='네이버 로고'/>
                </a>
                <a href='/'>
                    <img src={logo_svc} alt='영화'/>
                </a>
            </div>
            <nav id='nav'>
                <ul id="gnb">
                    <li>
                        <a href="/"
                        className={menu===0? 'menu home_active':'menu home'}>영화홈</a>
                    </li>
                    <li>
                        <a href="/movie/running/current.naver"
                            className={(menu===1 || menu===2 || menu===3)? 'menu running_active':'menu running'}>상영작·예정작</a>
                        <ul id="lnb" className={(menu===1 || menu===2 || menu===3)? 'open':'close'}>
                            <li>
                                <a href="/movie/running/current.naver"
                                    className={menu === 1 ? 'lnb_active' : ''}>
                                    <span className="lnb_arrow"></span>현재 상영영화</a>
                            </li>
                            <li>
                                <a href="/movie/running/premovie.naver"
                                    className={menu === 2 ? 'lnb_active' : ''}>
                                    <span className="lnb_arrow"></span>개봉 예정영화</a>
                            </li>
                            <li>
                                <a href="/movie/running/movieclip.naver"
                                    className={menu === 3 ? 'lnb_active' : ''}>
                                    <span className="lnb_arrow"></span>예고편</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <a href="/movie/sdb/rank/rmovie.naver"
                            className={(menu===4 || menu===5)? 'menu rank_active':'menu rank'}>상영작·예정작</a>
                        <ul id="lnb" className={(menu===4 || menu===5)? 'open':'close'}>
                            <li>
                                <a href="/movie/sdb/rank/rmovie.naver"
                                className={menu === 4 ? 'lnb_active' : ''}>
                                    <span className="lnb_arrow"></span>랭킹</a>
                            </li>
                            <li>
                                <a href="/movie/sdb/browsing/bmovie_nation.naver"
                                className={menu === 5 ? 'lnb_active' : ''}>
                                    <span className="lnb_arrow"></span>디렉토리</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/movie/point/af/list.naver"
                        className={(menu===6 || menu===7)? 'menu point_review_active':'menu point_review'}>평점·리뷰</a>
                        <ul id="lnb" className={(menu===6 || menu===7)? 'open':'close'}>
                            <li>
                                    <a href="/movie/point/af/list.naver"
                                    className={menu === 6 ? 'lnb_active' : ''}>
                                        <span className="lnb_arrow"></span>네티즌 평점</a>
                            </li>
                            <li>
                                    <a href="/movie/board/review/list.naver"
                                    className={menu === 7 ? 'lnb_active' : ''}>
                                        <span className="lnb_arrow"></span>네티즌 리뷰</a>
                            </li>
                        </ul> 
                    </li>
                    <li>
                        <a href="#"
                        className="menu download">다운로드</a>
                    </li>
                </ul>
            </nav>
            <div id='indi_logo'>
                <a href="#"
                className="menu indi">다운로드</a>
            </div>
        </div>
    )
}

export default Header;