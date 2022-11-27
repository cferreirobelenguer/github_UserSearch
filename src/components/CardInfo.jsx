import React from 'react'

export const CardInfo=(props)=>{
    return(
        <>
            <div className="card_avatarUrl">

            </div>
            <div className="card_info">
                <div className="card_login">
                    <div className="card_username">
                        <h1>The Octocat</h1>
                    </div>
                    <div className="card_date">
                        <p>Fecha</p>
                    </div>
                </div>
                <div className="card_login2">
                    <p>@octocat</p>
                </div>
                <div className="bio">
                    <p>This profile has no bio</p>
                </div>
                <div className="card_container_info1">
                    <div className="card_repos">Repos</div>
                    <div className="card_followers">Followers</div>
                    <div className="card_following">Following</div>
                </div>
                <div className="card_container_info">
                    <div className="card_repos_url"></div>
                    <div className="card_followers_url"></div>
                    <div className="card_following_url"></div>
                </div>
                <div className="card_info2">
                    <div className="city"><p>San Francisco</p></div>
                    <div className="twitter">Not avariable</div>
                </div>
                <div className="card_info3">
                    <div className="url"><p>https://github.blog</p></div>
                    <div className="company">agithub</div>
                </div>
            </div>
        </>
        
    )
}