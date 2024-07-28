import { useState, useEffect } from 'react';

function Uptopo() {
  const [scrollPosition, setScrollPosition]: any = useState(0);
  const [visible, setVisible] = useState('hidden');

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPosition(scrollTop);
    if (scrollTop >= 200) {
      setVisible('flex');
    } else {
      setVisible('hidden');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`w-full ${visible} items-end justify-end fixed right-5 bottom-8`}>
        <div className="w-12 h-12 bg-white shadow-md flex items-center justify-center rounded-full cursor-pointer" onClick={scrollToTop}>
          <p>UP</p>
        </div>
      </div>
    </>
  );
}

export default Uptopo;
