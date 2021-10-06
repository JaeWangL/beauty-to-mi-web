import Link from 'next/link';
import { memo, useCallback, useState } from 'react';
import IsEqual from 'react-fast-compare';
import { useSettingsStore } from '@/hooks';
import {
  DesktopHeaderContainer,
  DesktopHeaderContent,
  HeaderContainer,
  HeaderWrapper,
  LogoContainer,
  MenuNav,
  MenuNavContainer,
  MobileHeaderContainer,
  MobileMenu,
} from './styles';

function Header(): JSX.Element {
  const { settings } = useSettingsStore();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const onMobileToggleClick = useCallback((): void => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const renderHeader = useCallback(() => {
    if (!settings.isMobile) {
      return (
        <DesktopHeaderContainer className="clearfix">
          <DesktopHeaderContent className="clearfix">
            <LogoContainer>
              <Link href="/" passHref>
                <a>
                  <img src="/images/logo.png" width="170" height="50" alt="header-logo" />
                </a>
              </Link>
            </LogoContainer>
            <MenuNavContainer>
              <MenuNav>
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/" passHref>
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#" className="btn btn-color-02 tra-01-hover last-link">
                    Book Now
                  </a>
                </li>
              </MenuNav>
            </MenuNavContainer>
          </DesktopHeaderContent>
        </DesktopHeaderContainer>
      );
    }

    return (
      <MobileHeaderContainer className={`clearfix ${isMobileMenuOpen ? 'active' : ''}`}>
        <span className="smllogo">
          <img src="/images/logo.png" width="170" height="50" alt="mobile-logo" />
        </span>
        <MobileMenu onClick={onMobileToggleClick}>
          <span />
        </MobileMenu>
      </MobileHeaderContainer>
    );
  }, [settings.isMobile]);

  return (
    <HeaderWrapper>
      <HeaderContainer>{renderHeader()}</HeaderContainer>
    </HeaderWrapper>
  );
}

export default memo(Header, IsEqual);
