import React, { useState } from 'react'
import full_heart from '../assets/img/full_heart.png'
import null_heart from '../assets/img/null_heart.png'
import comment from '../assets/img/comment.png'

const Article = ({title, content}) => {
  const [isLiked, setIsLiked] = useState(true)
  const [likeCount, setLikeCount] = useState(1)

  const handleLike =() => {
    if (isLiked) {
      setIsLiked(false)
      setLikeCount(0)
    } else {
      setIsLiked(true)
      setLikeCount(1)
    }
  }

  return (
    <div>
      <div id="Article_Wrap">
        <div className="article">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
        </div>
        <div className="icon_group">
            <div className="comment">
                <img src={comment} alt ="" />
                <span>0</span>
            </div>
            <div className="heart" onClick={handleLike}>
                <img src={isLiked ? full_heart : null_heart} alt="" />
                <span>{likeCount}</span>
            </div>
      </div>
      <footer>
        <input className="comment_text" type="text" placeholder='댓글을 입력해주세요!' />
        <button className='comment_btn'>등록</button>
      </footer>
    </div>
</div>
)
}

export default Article
