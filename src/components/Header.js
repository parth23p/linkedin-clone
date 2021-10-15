import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import { signOutAPI } from '../actions';

const Header = (props) => {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" />
                    </a>
                </Logo>
                <Search>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                    <div>
                        <input type="text" placeholder="Search for jobs, people, posts..." />
                    </div>

                </Search>
                <Nav>
                    <NavListWrap>
                        <NavList className="active">
                            <a>
                                <img src="/images/nav-home.svg" alt="" />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-network.svg" alt="" />
                                <span>My network</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-messaging.svg" alt="" />
                                <span>Messages</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a>
                                <img src="/images/nav-notifications.svg" alt="" />
                                <span>Notification</span>
                            </a>
                        </NavList>
                        {/* <NavList>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>Work</span>
                            </a>
                        </NavList> */}

                        <NavList>
                            <a>
                                <img src="/images/nav-jobs.svg" alt="" />
                                <span>Jobs</span>
                            </a>
                        </NavList>
                        <User>
                            <a>
                                {
                                    props.user && props.user.photoURL ? (<img src={props.user.photoURL} alt="" />) : (
                                        <img src="/images/user.svg" alt="" />)
                                }
                                <span>Me
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                            <SignOut onClick={() => { props.signOut() }}>
                                <a>Sign Out</a>
                            </SignOut>
                        </User>
                        <Work>
                            <a>
                                <img src="/images/nav-work.svg" alt="" />
                                <span>Work
                                    <img src="/images/down-icon.svg" alt="" />
                                </span>
                            </a>
                        </Work>

                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
};

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    left:0;
    padding: 0px 24px;
    position: fixed;
    top:0;
    width:100%;
    z-index:100;
    /* height:77px; */
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height:70px;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div{
        max-width: 280px;
        input{
            border:none;
            box-shadow:none;
            
            background-color: #eef3f8;
            border-radius: 2px;
            color:rgba(0,0,0,0.9);
            width:218px;
            padding: 0px 8px 0px 24px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14x;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }

    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index:1;
    top:10px;
    left:-7px;
    border-radius: 0px 2px 2px 0px;
    margin:auto;
    pointer-events: none ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Nav = styled.nav`
    margin-left:auto;
    display: block;
    @media(max-width:768px){
        position: fixed;
        left: 0;
        bottom:0;
        background: white;
        width:100%;

    }
`;

const NavListWrap = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: nowrap;

    .active{
        span:after{
            content: '';
            transform:scaleX(1);
            border-bottom: 2px solid var(--white,#fff);
            left:0;
            bottom:0;
            position: absolute;
            transition:transform 0.2s ease-in-out;
            width:100%;
            border-color:rgba(0,0,0,0.9);
        }
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 10px;
        font-family: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;

        span{
            color: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
        }
        @media(max-width:768px){
            min-width: 70px;
        }
        &:hover,&:active{
            a{
                span{
                    color: rgba(0,0,0,0.9);
                }
            }
        }
    }
`;

const SignOut = styled.div`
    position: absolute;
    top:45px;
    background-color: white;
    border-radius: 0px 0px 5px 5px;
    /* width:100px; */
    height:40px;
    font-size:16px;
    transition-duration:167ms;
    display: none;
    text-align:center;

`;

const User = styled(NavList)`

    a > img{
        width: 25px;
        height:25px;
        border-radius: 50%;
         }
   span{
        display:flex;
        align-items: center;
        }
    &:hover{
        ${SignOut}{
            align-items:center;
            display:flex;
            justify-content:center;
            color:#0a66c2;
            font-weight:700;
            font-size:20px;
            background-color: #dce6c1;
        }
    }
`;


const Work = styled(User)`
border-left:1px solid rgba(0,0,0,0.1);
margin-left:14px;
`;


const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI())
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);