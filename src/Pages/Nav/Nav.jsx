import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import "../../Style/Home/Nav.css";
import Logo from './로고.jpeg';

const NavBar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const navigate = useNavigate();
    const navRef = useRef(null); // nav 바 참조 생성

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setIsNavVisible(false);
        }
    };

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleLogoClick = () => {
        navigate("/");
    };

    const LinktomyPage = () => {
        navigate("/MyPage");
    };

    return (
        <div className={`Nav ${isNavVisible ? 'nav-border' : ''}`} ref={navRef}>
            <Link to="/home" onClick={handleLogoClick}>
                <img src={Logo} alt="" className='Logo_nav' />
            </Link>
            <AiOutlineUser className='MypageIcon' size='24' onClick={LinktomyPage} />
            <AiOutlineMenu size='24' onClick={toggleNav} className='NavIcon' />
            {isNavVisible && (
                <ul className="nav-menu">
                    <Link to="/home"><li>홈</li></Link>
                    <Link to="/routine"><li>루틴</li></Link>
                    <Link to="/Map"><li>전문가 찾기</li></Link>
                </ul>
            )}
        </div>
    );
};

export default NavBar;
