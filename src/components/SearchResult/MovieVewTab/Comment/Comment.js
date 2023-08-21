import '../../../../css/SearchResult/MovieViewTab/Comment/Comment.css';
import {useEffect} from 'react';
import $ from 'jquery';
import axios from 'axios';
import {useState} from 'react';

function Comment(props){

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [email,setEmail] = useState(false)

  useEffect(()=>{
    
  })        

  const checkAccessToken=()=>{
    console.log('checkAccessToken')
    const token = localStorage.getItem('token')
    if(token===null){
        console.log('토큰정보 존재하지 않음')
        return
    }

    axios({
        url:'/v1/user/access_token_info',
        method:'get',
        headers:{'Authorization':`Bearer ${token}`},
    }).then(
        response=>{
            console.log('checkAccessToken then')
            console.log(response)
            console.log(response.data.expires_in)
            const time_left=response.data.expires_in
            if(time_left > 0){
                console.log('time remain')
                setIsLoggedIn(true)
                getUserInfo()
            }else{
                setIsLoggedIn(false)
                localStorage.removeItem('token')
            }
        }
    ).catch(error => {
        console.log('error')
        console.log(error)
    })
  }

  const getUserInfo=()=>{
    console.log('getUserInfo')
    const token = localStorage.getItem('token')
    axios({
        url:'/v2/user/me',
        method:'get',
        headers:{'Authorization':`Bearer ${token}`},
    }).then(
        reponse=>{
            console.log('getKakaoToken')
            console.log(reponse)
            console.log(reponse.data)
            console.log(reponse.data.kakao_account)
            console.log(reponse.data.kakao_account.email)

        }
    )
  }

  const checkCommentHistory=()=>{
    const result=axios.get('/api/get/comment/history')

  }

  const recommendComment=()=>{
    alert('댓글 추천')
    var recommendationNum = $('#recommendation-num').text()
    $('#recommendation-num').text(recommendationNum+1)
  }

  const nonRecommendComment=()=>{
    alert('댓글 비추천')
  }

  return(
    <div id='comment'>
        <div id='comment-row-01'>
            <div id='rating-star'>
                <span className="grey-star"></span>
                <span className="red-star" style={{width:props.rating*10+'%'}}></span>
            </div>
            <span>{props.rating}</span>
        </div>
        <div id='comment-row-02'>
            {props.comment}
        </div>
        <div id='comment-row-03'>
            <span className='nick-name'>{props.nickname}</span>
            <span className='write-date'>{props.write_date}</span>
            <div id='reco-non-reco-area'>
                <span className='recommendation' onClick={recommendComment}></span>
                <span id='recommendation-num'>0</span>
                <span className='non-recommendation' onClick={nonRecommendComment}></span>
                <span id='non-recommendation-num'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Comment;