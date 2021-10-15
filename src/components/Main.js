import React, { useState } from 'react';
import styled from "styled-components";
import PostModal from './PostModal';

const Main = (props) => {
    const [showModal, setShowModal] = useState("close");
    const handleClick = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        switch (showModal) {
            case 'open':
                setShowModal('close');
                break;
            case 'close':
                setShowModal('open');
                break;
            default:
                setShowModal('close');
                break;
        }
    }
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src="/images/user.svg" alt="" />
                    <button onClick={handleClick}>Start a post</button>
                </div>
                <div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70b5f9" width="24" height="24" focusable="false"><path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path></svg>
                        <span>Photo</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="rgb(43,206,52)" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                        <span>Video</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="orange" width="24" height="24" focusable="false"><path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path></svg>
                        <span>Event</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="chocolate" width="24" height="24" focusable="false"><path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path></svg>
                        <span>Wtie article</span>
                    </button>
                </div>

            </ShareBox>
            <div>
                <Article>
                    <SharedActor>
                        <a>
                            <img src="/images/user.svg" alt="" />
                            <div>
                                <span>Title</span>
                                <span>Info</span>
                                <span>Date</span>

                            </div>
                        </a>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false"><path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path></svg>
                        </button>
                    </SharedActor>
                    <Description>
                        Description
                    </Description>
                    <SharedImage>
                        <a>
                            <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg 1x, https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg 2x" alt="" />
                        </a>
                    </SharedImage>
                    <SocialCounts>
                        <li>
                            <button>
                                <img src="images/like-thumbnail-linkedin.svg" alt="" />
                                <img src="images/clap-thumbnail-linkedin.svg" alt="" />
                                <span>75</span>
                            </button>
                        </li>
                        <li>
                            <a>
                                2 comments
                            </a>
                        </li>
                    </SocialCounts>
                    <SocialActions>
                        <button>
                            <img src="images/like-icon.svg" alt="" />
                            <span>Like</span>
                        </button>
                        <button>
                            <img src="images/comment-icon.svg" alt="" />
                            <span>Comments</span>
                        </button>
                        <button>
                            <img src="images/share-icon.svg" alt="" />
                            <span>Share</span>
                        </button>
                        <button>
                            <img src="images/send-icon.svg" alt="" />
                            <span>Send</span>
                        </button>
                    </SocialActions>
                </Article>
            </div>
            <PostModal showModal={showModal} handleClick={handleClick} />
        </Container>
    )
};

const Container = styled.div` 
grid-area:main;
/* width:800px; */
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position:relative;
    border:none;
    box-shadow:0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

`;

const ShareBox = styled(CommonCard)`
    display:flex;
    flex-direction:column;
    color:#958b7b;
    margin:0 0 8px;
    background:white;
    div{
        button{
            outline: none;
            color:rgba(0,0,0,0.6);
            font-size:14px;
            line-height: 1.5;
            min-height:48px;
            background: transparent;
            border:none;
            display: flex;
            align-items: center;
            font-weight:600;
        }
        &:first-child{
            display:flex;
            align-items: center;
            padding: 8px 16px 0 16px;
            img{
                width:48px;
                border-radius: 50%;
                margin-right:8px;
            }
            button{
                margin:4px 0;
                flex-grow:1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0,0,0,0.15);
                background-color: white;
                text-align:left;
            }
        }
        &:nth-child(2){
            display:flex;
            flex-wrap:wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button{
                svg{
                    margin:0px 4px 0px -2px;
                }
                span{
                    color:#70b5f9;
                }
            }
        }
    }
`;


const Article = styled(CommonCard)`
    padding:0px;
    margin: 0px 8px;
    overflow:visible;
    /* width:800px; */
    margin:auto;
`;

const SharedActor = styled.div`
    padding-right:40px;
    flex-wrap:nowrap;
    padding:12px 16px 0px;
    margin-bottom: 8px;
    align-items:center;
    display:flex;
    a{
        margin-right: 12px;
        flex-grow:1;
        overflow:hidden;
        display:flex;
        text-decoration:none;
    
    
img{
    width:48px;
    height:48px;
    border-radius: 50%;
    /* margin:auto; */
    /* padding:4px 2px 4px 2px;
    align-items: left; */
}
&  div{
    display:flex;
    flex-direction: column;
    flex-grow:1;
    flex-basis:0;
    margin-left: 8px;
    overflow:hidden;
    span{
        text-align:left;
        &:first-child{
            font-size:14px;
            font-weight:700;
            color:rgba(0,0,0,1);
        }
        & :nth-child(n+1) {
            font-size: 12px;
            color:rgba(0,0,0,0.6);
        }
    }
}
}
button{
    position: absolute;
    right:12px;
    top:0px;
    background: transparent;
    border:none;
    outline:none;

}

`;

const Description = styled.div`
    padding:0px 16px;
    overflow: hidden;
    color:rbga(0,0,0,0.9);
    font-size:14px;
    text-align:left;
`;
const SharedImage = styled.div`
    margin-top: 8px;
    width:100%;
    display: block;
    position:relative;
    background-color: #f9fafb;
    img{
        object-fit:contain;
        width:100%;
        height:100%;
        /* border-radius:5px; */
    }
`;

const SocialCounts = styled.ul`
line-height:1.3;
display: flex;
align-items:flex-start;
overflow:auto;
margin:0px 16px;
padding: 8px 0px;
border-bottom:1px solid #e9e5df;
list-style:none;
li{
    margin-right: 5px;
    font-size:12px;
    button{
        display:flex;
    }
    a{
        color:rgb(10, 102, 194);
        font-weight:500;
        font-size:12px;
        &:hover{
            text-decoration: underline;
        }
    }
    
}
`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin:0;
    min-height:40px;
    padding:4px 8px;
    button{
        display: inline-flex;
        padding: 8px;
        align-items:center;
        color:#0a66c2;
        @media(min-width:768px){
            span{
                margin-left:8px;
            }
        }
    }


`;
export default Main;