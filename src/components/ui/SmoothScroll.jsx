import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#fff',
};

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

const options = {
  damping: 0.05,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
}

const Scroll = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('main'), options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector('main'))
    }
  }, [pathname])

  return null;
}

export default Scroll;