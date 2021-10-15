import styled from 'styled-components';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { postArticleAPI } from '../actions';
const PostModal = (props) => {

    const [editorText, setEditortext] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = (e) => {
        const image = e.target.files[0];

        if (image === "" || image === undefined) {
            alert(`not an image, the image file is a ${typeof image} `);
        }
        setShareImage(image);
    };

    const switchAssetArea = (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);
    };

    const postArticle = (e) => {
        console.log(' post !!!!!:rock')
        e.preventDefault();
        if (e.target !== e.currentTarget) {
            return;
        }

        const payload = {
            image: shareImage,
            video: videoLink,
            user: props.user,
            description: editorText,
            timestamp: firebase.firestore.Timestamp.now(),
        };
        props.postArticle(payload);
        reset(e);
    }
    const reset = (e) => {
        setEditortext("");
        setShareImage("");
        setVideoLink("");
        props.handleClick(e);
    };
    return (
        <>
            {props.showModal === 'open' &&
                <Container>
                    <Content>
                        <Header>
                            <h2>Create a post . . .</h2>
                            <button onClick={(event) => { reset(event) }}>
                                <img src='/images/close-icon.svg' alt="" />
                            </button>
                        </Header>
                        <SharedContent>
                            <UserInfo>
                                {props.user.photoURL ? (<img src={props.user.photoURL} alt="" />)
                                    :
                                    (<img src="/images/user.svg" alt="" />)
                                }
                                <span>{props.user.displayName}</span>
                            </UserInfo>
                            <Editor>
                                <textarea
                                    value={editorText}
                                    onChange={(e) => setEditortext(e.target.value)}
                                    placeholder="What do you want to talk about?"
                                    autoFocus={true}
                                />
                                {assetArea === 'image' ? (
                                    <UploadImage>
                                        <button>
                                            <input type="file"
                                                accept="image/gif,image/jpeg,image/png"
                                                name="image" id="file"
                                                style={{ display: "none" }}
                                                onChange={handleChange}
                                            />

                                            <p><label htmlFor="file">Select an image to share</label></p>
                                        </button>
                                        <br />
                                        <br />
                                        {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}

                                    </UploadImage>
                                ) : (
                                    assetArea === 'media' &&
                                    <>
                                        <input type="text"
                                            placeholder="please input a video link.."
                                            value={videoLink}
                                            onChange={(e) => setVideoLink(e.target.value)}
                                        />
                                        {videoLink && (<ReactPlayer width={"100%"} url={videoLink} />)}

                                    </>
                                )}
                            </Editor>
                            <ShareCreation>
                                <AttachAssets>
                                    <AssetButton onClick={() => switchAssetArea("image")}>
                                        <img src='/images/photo-icon.svg' alt='' />
                                    </AssetButton>
                                    <AssetButton onClick={() => switchAssetArea("media")}>
                                        <img src='/images/video-icon.svg' alt='' />
                                    </AssetButton>

                                </AttachAssets>

                                <ShareComment>
                                    <AssetButton>
                                        <img src='/images/nav-messaging.svg' alt='' />
                                        Anyone
                                    </AssetButton>
                                </ShareComment>
                                <PostButton disabled={!editorText ? true : false} onClick={(event) => { postArticle(event) }}>
                                    Post
                                </PostButton>
                            </ShareCreation>
                        </SharedContent>
                    </Content>
                </Container>
            }
        </>
    )
};

const Container = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 9999;
        color: black;
        background-color: rgba(0, 0, 0, 0.6);
        animation: fadeIn 0.9s;
        `;

const Content = styled.div`
        width: 100%;
        max-width: 552px;
        background-color: white;
        max-height: 90%;
        overflow: initial;
        border-radius:5px;
        position: relative;
        display: flex;
        flex-direction: column;
        top: 100px;
        margin: 0px auto;

        `;

const Header = styled.div`
        display: block;
        padding: 16px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        font-size: 16px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.6);
        font-weight:400;
        display: flex;
        justify-content: space-between;
        align-items: center;
    button{
            height: 40px;
            width: 40px;
            min-width: 40px;
            color: rgba(0, 0, 0, 0.15);
            border: none;
            background-color: transparent;
            /* &:hover{
                color:rgba(0,0,0,0.9);
                border-radius:50%;
                background-color:rgba(0,0,0,0.6);
            } */
        }
        svg, img{
            pointer-events: none;
        }
        `;

const SharedContent = styled.div`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
        vertical-align: baseline;
        background: transparent;
        padding: 8px 12px;
        `;
const UserInfo = styled.div`
        display: flex;
        align-items: center;
        padding: 12px 24px;
        svg, img{
            width: 40px;
            height: 40px;
            background-clip: content - box;
            border: 2px solid transparent;
            border-radius: 50%;
        }
    span{
            font-weight: 700;
            margin-left: 10px;
            font-size: 16px;
            line-height: 1.5;
        }
        `;

const ShareCreation = styled.div`
        display: flex;
        justify-content: space - between;
        padding: 12px 24px 12px 16px;
        `;

const AssetButton = styled.button`
        display: flex;
        align-items: center;
        height: 40px;
        min-width: auto;
        color: rgba(0, 0, 0, 0.5);
        `;

const AttachAssets = styled.div`
        display: flex;
        align-items: center;
        padding-right: 8px;
    ${AssetButton} {
            width: 40px;
        }
        `;

const ShareComment = styled.div`
        padding-left: 8px;
        margin-right: auto;;
        border-left: 1px solid rgba(0, 0, 0, 0.15);
    ${AssetButton} {
        svg{
                margin-right: 5px;
            }
        }
        `;

const PostButton = styled.button`
        min-width: 60px;
        border-radius: 18px;
        border: none;
        padding-left: 16px;
        padding-right: 16px;
        background: ${props => props.disabled ? 'rgba(0,0,0,0.5)' : '#0a66c2'};
        color: white;
    &:hover{
            background: ${props => props.disabled ? 'rgba(0,0,0,0.08)' : '#004182'};
        }
        `;

const Editor = styled.div`
        padding: 12px 24px;
    textarea{
            width: 100%;
            /* padding: 8px; */
            margin: auto;
            min-height: 100px;
            resize: none;
            border: none;
        }
    input{
            width: 100%;
            height: 35px;
            font-size: 16px;
            margin-bottom: 20px;
        }
        `;
const UploadImage = styled.div`
text-align: center;
    img{
    width: 100%;
}
button{
    font-weight: 700;
    color:#004187;
    font-size: 16px;
    background-color: rgba(0,0,0,0.05);
    border-radius: 5px;
    border:none;
    text-decoration: underline;
    cursor:auto;
    &:hover{
        /* border:-1px solid #004187; */
        color:#0a66c2;
    }
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    }
}

const mapDispacthToProps = (dispatch) => ({
    postArticle: (payload) => dispatch(postArticleAPI(payload)),
})
export default connect(mapStateToProps, mapDispacthToProps)(PostModal);