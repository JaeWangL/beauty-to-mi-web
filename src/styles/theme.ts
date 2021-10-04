export const defaultTheme = {
  colors: {
    black300: '#283034',
    darkGold400: '#5f5842',
    darkPink400: '#b7948e',
    darkPink500: '#bd857c',
    gray100: '#fefdfc',
    gray300: '#ddd',
    gray400: '#a9a9a9',
    gray500: '#808080',
    gray600: '#727475',
    gray700: '#666666',
    gray800: '#555555',
    navy300: '#465777',
    pink400: '#efa697',
    primary: '#efa697',
    white: '#fff',
  },
};

export const zIndices = {
  header: 999,
  headerMenu: 1031,
  headerMobile: 10002,
  headerMobileMenu: 102,
};

export const breakPoints = {
  xsDown: '(max-width: 320px)',
  smDown: '(max-width: 575px)',
  mdDown: '(max-width: 767px)',
  lgDown: '(max-width: 991px)',
  xlDown: '(max-width: 1199px)',
  xxlDown: '(max-width: 1599px)',
  xxxlDown: '(max-width: 1999px)',
  xsUp: '(min-width: 321px)',
  smUp: '(min-width: 576px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 992px)',
  xlUp: '(min-width: 1200px)',
  xxlUp: '(min-width: 1600px)',
  xxxlUp: '(min-width: 2000px)',
};

export const breakPointsMultiple = {
  xsUpsmDown: `${breakPoints.xsUp} and ${breakPoints.smDown}`,
  mdUplgDown: `${breakPoints.mdUp} and ${breakPoints.lgDown}`,
  lgUpxlDown: `${breakPoints.lgUp} and ${breakPoints.xlDown}`,
};
