import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Utilities/Layout'
import NProgress from 'nprogress'

import "../styles/globals.css";
import "../styles/styles.css";

export function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export const CookieFooter = () => {
  const [isOpen, setOpen] = useState(false)
  const [functionality, setFunctionality] = useState(false)
  const [analytical, setAnalytical] = useState(false)
  const [marketing, setMarketing] = useState(false)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
      if (param[0] === 'cookie_consent_change' && param[1] === "1") {
        setCookie('vert_consent_given', "")
        setCookie('vert_marketing_consent', "")
        setCookie('vert_analytical_consent', "")
      }
    }
    setOpen(!getCookie('vert_consent_given'))
    if (getCookie('vert_analytical_consent') == 'true' && getCookie('vert_consent_given') === 'true') {
      let script1 = document.createElement("script");
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=UA-176249969-1'
      script1.async = true;
      document.body.appendChild(script1);

      let script2 = document.createElement("script");
      script2.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-176249969-1');`
      document.body.appendChild(script2);
    }

    if (getCookie('vert_marketing_consent') == 'true' && getCookie('vert_consent_given') === 'true') {
      let script3 = document.createElement("script");
      script3.innerHTML = `_linkedin_partner_id = "2613281";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();`;
      document.body.appendChild(script3);

      let script4 = document.createElement("script");
      script4.innerHTML = `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','o4q2r');
twq('track','PageView');`
      document.body.appendChild(script4);

      let script5 = document.createElement("script");
      script5.innerHTML = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '573106576948742');
fbq('track', 'PageView');`
      document.body.appendChild(script5);

      let script6 = document.createElement("script");
      script6.src = 'https://www.googletagmanager.com/gtag/js?id=AW-527217461'
      script6.async = true;
      document.body.appendChild(script6);

      let script7 = document.createElement("script");
      script7.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-527217461');`
      document.body.appendChild(script7);
    }
  }, [])
  return (
    <>
      {isOpen && <div style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#71A1A4',
        borderTop: '1px solid white',
        zIndex: 1234,
      }}>
        <div className="container flex flex-col m-auto pt-12 pb-7">
          <div className="flex flex-col px-4 md:px-0">
            <p className="text-2xl font-bold mb-4 border-b" style={{ color: 'rgb(12 74 78)', borderColor: 'rgb(12 74 78)' }}>Cookie Policy</p>
            <div className="flex flex-grow flex-col lg:flex-row">
              <div className="flex flex-grow flex-wrap text-white items-center justify-between">
                <div>
                  <input id="necessary" className="w-4 h-4 cursor-pointer" type="checkbox" checked disabled readOnly />
                  <label htmlFor="necessary" className="ml-2 cursor-pointer text-xs lg:text-lg" style={{ color: '#EDFAFF' }}>Necessary</label>
                </div>
                <div>
                  <input id="functionality" className="w-4 h-4 cursor-pointer" type="checkbox" defaultChecked={functionality} value={functionality}
                    onClick={() => {
                      setFunctionality(!functionality)
                    }}
                  />
                  <label htmlFor="functionality" className="ml-2 cursor-pointer text-xs lg:text-lg" style={{ color: '#EDFAFF' }}>
                    Functionality
                  </label>
                </div>
                <div>
                  <input id="analytical" className="w-4 h-4 cursor-pointer" type="checkbox" defaultChecked={analytical} value={analytical}
                    onClick={() => {
                      setAnalytical(!analytical)
                    }}
                  />
                  <label htmlFor="analytical" className="ml-2 cursor-pointer text-xs lg:text-lg" style={{ color: '#EDFAFF' }}>
                    Analytical
                  </label>
                </div>
                <div>
                  <input id="marketing" className="w-4 h-4 cursor-pointer" type="checkbox" defaultChecked={marketing} value={marketing}
                    onClick={() => {
                      setMarketing(!marketing)
                    }}
                  />
                  <label htmlFor="marketing" className="ml-2 cursor-pointer text-xs lg:text-lg" style={{ color: '#EDFAFF' }}>
                    Marketing
                  </label>
                </div>
              </div>
              <div className="flex flex-grow flex-col justify-center lg:justify-end items-end lg:items-end pt-4 lg:pt-0">
                <button
                  className="text-white lg:w-1/3 p-4 m-2"
                  style={{ backgroundColor: 'rgb(12 74 78)' }}
                  onClick={() => {
                    setFunctionality(true)
                    setAnalytical(true)
                    setMarketing(true)
                    setCookie('vert_consent_given', true)
                    setCookie('vert_marketing_consent', true)
                    setCookie('vert_analytical_consent', true)
                    setOpen(false)
                  }}
                >
                  Accept All
                </button>
                <button className="lg:w-1/3 px-4 py-2 m-2"
                  style={{ color: 'rgb(12 74 78)', backgroundColor: '#EDFAFF' }}
                  onClick={() => {
                    setCookie('vert_consent_given', true)
                    if (marketing) setCookie('vert_marketing_consent', true)
                    else setCookie('vert_marketing_consent', '')
                    if (analytical) setCookie('vert_analytical_consent', true)
                    else setCookie('vert_analytical_consent', '')
                    setOpen(false)
                  }}>Accept</button>
              </div>
            </div>
          </div>
          <p className="text-sm mb-4 text-green-200">Read about our <Link href="/privacy"><a className="text-white">Privacy Policy</a></Link>.</p>
        </div>
      </div>}
      {/* <CookieBanner
        message="Cookies"
        wholeDomain={true}
        policyLink="/privacy"
        onAccept={() => { if (getCookie('rcl_consent_given') != 'true') setCookieInc(cookieInc + 1) }}
        onAcceptPreferences={() => { }}
        onAcceptStatistics={() => { }}
        onAcceptMarketing={() => { }}
        onDeclinePreferences={() => { }}
        onDeclineStatistics={() => { }}
        onDeclineMarketing={() => { }}
        styles={{
          dialog: {
            backgroundColor: 'rgb(248, 247, 247)',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 100000,
            padding: 10,
          }
        }}
      /> */}
    </>
  )
}


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <Layout>
      <Component {...pageProps} />
      <CookieFooter />
    </Layout>
  );
}

export default MyApp;
