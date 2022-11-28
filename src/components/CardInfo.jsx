import React from 'react'

export const CardInfo=(props)=>{
    
    return(
        <>
            <div className="card_containerInfo">
                <div className="card_avatarUrl">
                    <img src={props.info.avatar_url}  alt="" id="card_imagen"></img>
                    {console.log("componente cardinfo: "+props.style)}
                </div>
                <div className="card_info">
                    <div className="card_username">
                        <h6>{props.info.name}</h6>
                    </div>
                    <div className="card_login2">
                        <p>{props.info.login? "@"+props.info.login:""}</p>
                    </div>
                    <div className="card_date">
                        <p>{props.info.created_at}</p>
                    </div>
                </div>
            </div>
            <div className="bio">
                {props.info.bio===null ? <p>This profile has no bio</p> : <p>{props.info.bio}</p>}
            </div>
            <div className="card_containerInfo2">
                <div className="card_container_info1">
                    <div className="card_repos">{props.info.public_repos? <p>Repos</p>:""}</div>
                    <div className="card_followers">{props.info.followers? <p>Followers</p>:""}</div>
                    <div className="card_following">{props.info.following? <p>Following</p>:""}</div>
                </div>
                <div className="card_container_info">
                    <div className="card_repos_url">{props.info.public_repos}</div>
                    <div className="card_followers_url">{props.info.followers}</div>
                    <div className="card_following_url">{props.info.following}</div>
                </div>
            </div>
            <div className='card_containerInfo3'>
                <div className="card_info2">
                    <div className="city">{props.info.city}</div>
                    <div className="twitter">{props.info.twitter_username===null ? <p>Not Avariable</p>: <p>{props.info.twitter_username}</p>}</div>
                </div>
                <div className="card_info3">
                    <div className="url"><p>{props.info.url}</p></div>
                    <div className="company">{props.info.company}</div>
                </div>
            </div>
            
        </>
        
    )
}