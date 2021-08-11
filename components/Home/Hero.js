import styles from './Home.module.css';
import useCoverBg from '../../hooks/useCoverBg'

const Hero = () => {

  const user1Bg = useCoverBg('/user.jpg')
  const user2Bg = useCoverBg('/user.jpg')
  const user3Bg = useCoverBg('/user.jpg')

  return (
    <div className={"-mt-28 pb-80 lg:pb-40 " + (styles.hero)}>
      <div className="m-auto max-w-screen-lg text-4xl lg:text-7xl pt-32 lg:pt-40">
        <div className="flex flex-wrap items-center justify-center mb-24">
          <span className="text-vert-green font-bold">We help</span>
          <div className="img-rect mx-10" style={user1Bg}>
            <div className="description px-3 flex flex-col justify-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base font-semibold">Scott Arden-Jones</p>
              <p className="text-tiny leading-none lg:text-sm">Head of UK Engineering</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Truepill</p>
            </div>
          </div>
          <span className="mr-2 lg:mr-4 my-4 lg:my-0 text-vert-green font-bold">you craft</span>

          <span className="my-4 lg:my-0 text-vert-green font-bold">scalable </span>
          <span className="mr-4 lg:mr-0 text-vert-green font-bold">& compliant</span>
          <div className="userImgPolygon w-44 h-44  lg:ml-10 relative img-polygon" style={user2Bg}>
            <div className="userImgPolygonOutline"></div>
            <div className="description-poly px-5 flex flex-col justify-center items-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base text-center font-semibold">Scott Arden-Jones</p>
              <p className="text-tiny leading-none lg:text-sm text-center">Head of UK Engineering</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Truepill</p>
            </div>
          </div>

          <div style={{ flexBasis: '100%' }}></div>
          <div className="w-20 lg:w-40 h-20 lg:h-40 rounded-full bg-white mr-4 lg:mr-10 relative icon-circle" style={user3Bg}>
            <div className="description-circle px-3 flex flex-col justify-center items-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base text-center font-semibold">Scott Arden-Jones</p>
              <p className="text-tiny leading-none lg:text-sm text-center">Head of UK Engineering</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Truepill</p>
            </div>
          </div>
          <span className="text-vert-green font-bold">Health Tech</span>
        </div>
      </div>
    </div>

  );
};

export default Hero;
