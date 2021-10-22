import React from 'react';
import styled from "styled-components";
const RightSide = (props) => {
    return (
        <Container>
            <FollowCard>
                <Title>
                    <h2>Add to your Feed</h2>
                    <img src="/images/feed-icon.svg" alt="" />
                </Title>
                <FeedList>
                    <li>
                        <a>
                            <Avatar>
                                <img src="/images/hash-logo.PNG" alt="" />
                            </Avatar>
                        </a>
                        <div>
                            <span>
                                #Linkedin
                            </span>
                            <button>
                                Follow
                            </button>
                        </div>
                    </li>
                    <li>
                        <a>
                            <Avatar>
                                <img src="/images/hash-logo.PNG" alt="" />
                            </Avatar>
                        </a>
                        <div>

                            <span>
                                #Video
                            </span>
                            <button>
                                Follow
                            </button>
                        </div>
                    </li>
                </FeedList>
                <Recommendations>
                    View all recommendation
                </Recommendations>
            </FollowCard>
            <BannerCard>
                <img src="" alt="" />
            </BannerCard>
        </Container>
    )
};

const Container = styled.div` 
grid-area:rightside;


`;

const FollowCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border:none;
    box-shadow:0 0 0 1px rgb(0 0 0 / 15%),0 0 0 rgb(0 0 0 / 20%);
    padding: 12px;
`;

const Title = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width:100%;
    color:rgb(0,0,0,0.6)

`;


const FeedList = styled.ul`
    margin-top: 16px;
    li{
        display: flex;
        align-items: center;
        margin:12px 0px;
        position:relative;
        font-size: 14px;
        & > div{
            display: flex;
            flex-direction: column;
        }
        button{
            background-color: whitesmoke;
            color:rbga(0,0,0,0.6);
            /* box-shadow:inset 0 0 0 1px rgba(0,0,0,0.6); */
            padding:10px;
            border-radius: 25px;
            box-sizing:border-box;
            font-weight: 600;
            display: inline-flex;
            justify-content:center;
            max-height: 32px;
            max-width:480px ;
            text-align: center;
            border-color:#0a66c2;
            /* outline: none; */
        }
    }
`;
const Avatar = styled.div`
    /* background-image: url('/images/hash-logo.PNG'); */
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 48x;
    height:48px;
    margin-right: 8px;
    img{
        margin-top:14px;
        border-radius: 50%;
        width:40px;
        height:40px;
    }

`;

const Recommendations = styled.div``;
const BannerCard = styled.div``;
export default RightSide;