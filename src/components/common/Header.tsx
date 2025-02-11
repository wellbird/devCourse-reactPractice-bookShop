import styled from 'styled-components';
import logo from '../../assets/images/logo.png';
import { FaRegUser, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';
import { useAuthStore } from '../../store/authStore';
import { useAlert } from '../../hooks/useAlert';
import Dropdown from './Dropdown';
import ThemeSwitcher from '../header/ThemeSwitcher';

const Header = () => {
  const { category } = useCategory();
  const { isSignedIn, storeSignout } = useAuthStore();
  const { showAlert } = useAlert();

  const handleSignout = () => {
    storeSignout();
    showAlert('로그아웃이 완료되었습니다.');
  };

  return (
    <HeaderStyle>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="book store" />
        </Link>
      </h1>
      <nav className="category">
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

const HeaderStyle = styled.header`
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
`;

export default Header;
