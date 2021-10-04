import Link from 'next/link';
import { memo, useCallback, useState } from 'react';
import IsEqual from 'react-fast-compare';
import { useSettingsStore } from '@/hooks';
import {
  HeaderContainer,
  HeaderWrapper,
  MenuContainer,
  MenuInnerContainer,
  MenuListContainer,
  MobileMenu,
  MobileMenuContainer,
} from './styles';

function Header(): JSX.Element {
  const settings = useSettingsStore();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const onMobileMenuClick = useCallback(() => {
    setMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const renderHeader = useCallback(() => {
    if (!settings.settings.isMobile) {
      return (
        <MenuContainer className="clearfix">
          <MenuInnerContainer className="clearfix">
            <div className="logo-desktop">
              <Link href="/" passHref>
                <img src="/images/logo.png" width="170" height="50" alt="header-logo" />
              </Link>
            </div>
            <MenuListContainer className="clearfix">
              <ul>
                <li>
                  <Link href="/">홈</Link>
                </li>
                <li>
                  <Link href="/">요금 가격표</Link>
                </li>
                <li>
                  <Link href="/">아트 갤러리</Link>
                </li>
                <li>
                  <Link href="/">오시는길</Link>
                </li>
                <li>
                  <a href="#" className="btn-reservation last-link">
                    예약하기
                  </a>
                </li>
              </ul>
            </MenuListContainer>
          </MenuInnerContainer>
        </MenuContainer>
      );
    }

    return (
      <MobileMenuContainer className="clearfix">
        <span className="logo-small">
          <img src="/images/logo.png" width="170" height="50" alt="mobile-logo" />
        </span>
        <MobileMenu onClick={onMobileMenuClick}>
          <span />
        </MobileMenu>
      </MobileMenuContainer>
    );
  }, [settings.settings.isMobile]);

  return (
    <HeaderWrapper>
      <HeaderContainer>{renderHeader()}</HeaderContainer>
    </HeaderWrapper>
  );
}

export default memo(Header, IsEqual);
