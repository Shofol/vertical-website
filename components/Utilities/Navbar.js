import { useEffect, useState, createRef } from "react";
import Link from "next/link";
import Contact from "./Contact";
import Image from "next/image";
import styles from '../Home/Home.module.css'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { useRouter } from 'next/router'

const Navbar = () => {

  const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  const [stickyNavbar, setStickyNavbar] = useState(false);

  const handleScroll = debounce(() => {
    window.scrollY > 0
      ? setStickyNavbar(true)
      : setStickyNavbar(false);
  }, stickyNavbar ? 25 : 10);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [logoWidth, setlogoWidth] = useState(158)
  const [logoHeight, setlogoHeight] = useState(30)

  const targetRef = createRef();


  useEffect(() => {
    let targetElement = null;

    targetElement = targetRef.current;

    if (showMobileNavbar) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  }, [showMobileNavbar, targetRef]);

  useEffect(() => {

    if (window.innerWidth < 768) {
      setlogoWidth(100);
      setlogoHeight(20);
    }

    return () => {
      clearAllBodyScrollLocks();
    };

  }, []);

  const router = useRouter()

  useEffect(() => {

    const handleStop = () => {
      setShowMobileNavbar(false);
    }

    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])



  return (
    <nav className={"flex justify-between z-50 px-2 py-3 lg:py-4 lg:px-8 rounded bg-white h-12 lg:h-16 transition-all duration-100 " + (stickyNavbar ? 'fixed left-0 top-0 right-0' : 'm-4 lg:m-6 relative')} ref={targetRef}>
      <Link href="/" >
        <a className="flex justify-center items-center">
          <Image className="logo" src="/logo.svg" width={logoWidth} height={logoHeight} alt="vertical logo" />
        </a>
      </Link>

      <div className="flex ml-auto items-center text-vert-green text-xl lg:text-sm align-bottom">
        {/* Menu items */}
        <div className={showMobileNavbar ? `fixed bottom-0 left-0 right-0 top-16 ${styles.mobileNav}` : 'flex items-center'}>
          <div className={"items-center space-y-12 lg:space-y-0 lg:space-x-12 lg:space-x-0 pt-12 lg:pt-0 " + (showMobileNavbar ? "flex flex-col " : "hidden lg:flex lg:flex-row")}>
            <div className="text-left pt-1" >
              <Link href="/gdpr-for-us"  >GDPR for US</Link>
            </div>
            <a target="_blank" rel="noreferrer" href="https://career.vertrical.com/" className="text-left pt-1" >Career</a>
            <Link href="/about" >
              <a className="text-left pt-1" >About Us</a>
            </Link>
          </div>
          <div className={"lg:ml-12 " + (showMobileNavbar ? "flex justify-center items-center mt-12" : "")}>{<Contact classes={"bg-vert-green " + (showMobileNavbar ? "px-10 py-3" : "")}></Contact>}</div>
        </div>
        <button className="ml-4 flex lg:hidden items-center" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
          {!showMobileNavbar && <Image src="/burger.svg" width="32px" height="14px" alt="show mobile menu" />}
          {showMobileNavbar && <Image src="/close.svg" width="32px" height="14px" alt="close mobile menu" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
