import React from 'react'

export const CardInfo=({info,style})=>{
    
    return(
        <>
            <div className="card_containerInfo">
                <div className="card_avatarUrl">
                    <img src={info.avatar_url}  alt="" id="card_imagen"></img>
                    
                </div>
                <div className="card_info">
                    <div className="card_username">
                        <h6>{info.name}</h6>
                    </div>
                    <div className="card_login2">
                        <p>{info.login? "@"+info.login:""}</p>
                    </div>
                    <div className="card_date">
                        <p>{info.created_at}</p>
                    </div>
                </div>
            </div>
            <div className="bio">
                {info.bio===null ? <p>This profile has no bio</p> : <p>{info.bio}</p>}
            </div>
            <div className={style?"card_containerInfo2Light":"card_containerInfo2Dark"}>
                <div className="card_container_info1">
                    <div className="card_repos">{info.created_at? <p>Repos</p>:""}</div>
                    <div className="card_followers">{info.created_at? <p>Followers</p>:""}</div>
                    <div className="card_following">{info.created_at? <p>Following</p>:""}</div>
                </div>
                <div className="card_container_info">
                    <div className="card_repos_url">{info.public_repos}</div>
                    <div className="card_followers_url">{info.followers}</div>
                    <div className="card_following_url">{info.following}</div>
                </div>
            </div>
            <div className='card_containerInfo3'>
                <div className="card_info2">
                    <div className="city">{info.city}</div>
                    <div className="twitter">{info.twitter_username===null ? <p>Not Avariable</p>: <p>{info.twitter_username}</p>}</div>
                </div>
                <div className="card_info3">
                    <div className="url"><p>{info.url}</p></div>
                    <div className="company">{info.company}</div>
                </div>
            </div>
            
        </>
        
    )
}