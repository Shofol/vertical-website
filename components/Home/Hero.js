import styles from './Home.module.css';
import useCoverBg from '../../hooks/useCoverBg'

const Hero = ({ home }) => {

  const carmen = home.find(x => x.fields.title === 'Carmen Spoida')
  const omar = home.find(x => x.fields.title === 'Omar Khan')
  const sid = home.find(x => x.fields.title === 'Sid Viswanathan')

  const user1Bg = useCoverBg(carmen.fields.picture1.fields.file.url)
  const user2Bg = useCoverBg(omar.fields.picture1.fields.file.url)
  const user3Bg = useCoverBg(sid.fields.picture1.fields.file.url)
  
  return (
    <div className={"-mt-28 pb-80 lg:pb-40 " + (styles.hero)}>
      <div className="m-auto max-w-screen-lg text-4xl lg:text-7xl pt-32 lg:pt-40">
        <div className="flex flex-wrap items-center justify-center mb-24">
          <span className="text-vert-green font-bold">We help</span>
          <div className="img-rect mx-10" style={user1Bg}>
            <div className="description px-3 flex flex-col justify-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base font-semibold">Carmen Spoida</p>
              <p className="text-tiny leading-none lg:text-sm">Head of People &amp; Culture</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Vertrical</p>
            </div>
          </div>
          <span className="mr-2 lg:mr-4 my-4 lg:my-0 text-vert-green font-bold">you craft</span>

          <span className="my-4 lg:my-0 text-vert-green font-bold">scalable </span>
          <span className="mr-4 lg:mr-0 text-vert-green font-bold">&nbsp;& compliant</span>
          <div className="userImgPolygon w-44 h-44  lg:ml-10 relative img-polygon" style={user2Bg}>
            <div className="userImgPolygonOutline"></div>
            <div className="description-poly px-5 flex flex-col justify-center items-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base text-center font-semibold">Omar Khan</p>
              <p className="text-tiny leading-none lg:text-sm text-center">Head of Risk &amp; Compliance</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Vertrical</p>
            </div>
          </div>

          <div style={{ flexBasis: '100%' }}></div>
          <div className="w-20 lg:w-40 h-20 lg:h-40 rounded-full bg-white mr-4 lg:mr-10 relative icon-circle" style={user3Bg}>
            <div className="description-circle px-3 flex flex-col justify-center items-center text-white absolute inset-0 w-full h-full bg-black bg-opacity-75">
              <p className="text-tiny leading-none lg:text-base text-center font-semibold">Sid Viswanathan</p>
              <p className="text-tiny leading-none lg:text-sm text-center">Co-Founder &amp; President</p>
              <p className="text-tiny leading-none lg:text-sm font-semibold">@Truepill</p>
            </div>
          </div>
          <span className="text-vert-green font-bold">Digital Health</span>
        </div>
      </div>
    </div>

  );
};

export default Hero;
