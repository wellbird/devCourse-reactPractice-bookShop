import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import {
  FaAngleRight,
  FaBars,
  FaRegUser,
  FaSignInAlt,
  FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';
import { useAuthStore } from '../../store/authStore';
import { useAlert } from '../../hooks/useAlert';
import Dropdown from './Dropdown';
import ThemeSwitcher from '../header/ThemeSwitcher';
import { useState } from 'react';

const Header = () => {
  const { category } = useCategory();
  const { isSignedIn, storeSignout } = useAuthStore();
  const { showAlert } = useAlert();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSignout = () => {
    storeSignout();
    showAlert('로그아웃이 완료되었습니다.');
  };

  return (
    <HeaderStyle $isMobileSidebarOpen={isMobileSidebarOpen}>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="book store" />
        </Link>
      </h1>
      <nav className="category">
        <button
          className="menu-button"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          {isMobileSidebarOpen ? <FaAngleRight /> : <FaBars />}
        </button>
        <ul>
          {category.map((item) => (
            <li key={item.category_id}>
              <Link
                to={
                  item.category_id === null
                    ? '/books'
                    : `/books?category_id=${item.category_id}`
                }
              >
                {item.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <Dropdown toggleButton={<FaUserCircle />}>
          <>
            {isSignedIn ? (
              <ul>
                <li>
                  <Link to="/cart">장바구니</Link>
                </li>
                <li>
                  <Link to="/orderList">주문내역</Link>
                </li>
                <li>
                  <button onClick={handleSignout}>로그아웃</button>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/signin">
                    <FaSignInAlt />
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <FaRegUser />
                    회원가입
                  </Link>
                </li>
              </ul>
            )}
            <ThemeSwitcher />
          </>
        </Dropdown>
      </nav>
    </HeaderStyle>
  );
};

interface HeaderStyleProps {
  $isMobileSidebarOpen: boolean;
}

const HeaderStyle = styled.header<HeaderStyleProps>`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    .menu-button {
      display: none;
    }
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100px;
      li {
        a,
        button {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
          line-height: 1;
          background: none;
          border: 0;
          cursor: pointer;
          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    height: 52px;
    margin-top: 0;

    .logo {
      padding: 0 0 0 12px;

      img {
        width: 140px;
      }
    }

    .auth {
      position: absolute;
      top: 20px;
      right: 12px;
    }

    .category {
      .menu-button {
        display: flex;
        position: absolute;
        top: 20px;
        right: ${(props) => (props.$isMobileSidebarOpen ? '62%' : '52px')};

        transition: right 0.2s ease-in-out;

        background: #fff;
        border: 0;
        font-size: 1.5rem;
      }

      ul {
        position: fixed;
        top: 0;
        right: ${(props) => (props.$isMobileSidebarOpen ? '0' : '-100%')};
        width: 60%;
        height: 100vh;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: right 0.2s ease-in-out;

        margin: 0;
        padding: 24px;
        z-index: 1000;

        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

export default Header;
