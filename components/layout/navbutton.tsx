interface Props {
	active: any
	setActive: any
}

const NavButton = ({ active, setActive }: Props) => {
  const baseStyle = {
    strokeWidth: 0.8,
    strokeLinecap: 'butt',
    strokeLinejoin: 'miter',
    strokeMiterlimit: 4,
    fill: 'none',
    strokeDasharray: '10 70'
  };
  const upperLine: any = !active ? baseStyle : { ...baseStyle, strokeDasharray: '22 44', strokeDashoffset: -36 }
   const bottomLine: any = !active ? { ...baseStyle, strokeDasharray: '11 40' } : { ...baseStyle, strokeDasharray: '0 40', strokeDashoffset: '-5.5' };

  return (
    <div className='fixed right-0 mr-3 md:hidden cursor-pointer z-20 after:h-[50px] after:w-[50px] after:block after:bg-accent skew-x-3'>
      <svg
        width="70"
        height="50"
      	onClick={() => setActive(!active)}
        className={`svg ${!active ? 'active' : ''} absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] `}
        viewBox="0 0 18.520834 13.229167"
        version="1.1"
        id="svg14379">
        <path
          className='stroke-light default-animation faster elay-first'
          style={bottomLine}
          d="M 3.9687501,5.6885419 H 14.552081"
          id="path16385-6-5" />
        <path
          className='stroke-light default-animation'
          style={upperLine}
          d="M 14.552081,3.0427084 H 3.9687501 v 0 c 0,0 -2.2982262,-0.1648702 -2.1458762,1.1952196 0.15235,1.3600898 5.6342813,7.391698 5.2709275,8.048963 C 6.7304477,12.944156 0.80429418,12.14576 0.65290348,11.450679 0.57265251,11.082223 2.6825391,10.879718 4.3490689,10.147119 5.8263864,9.4976976 6.8791669,8.2895919 6.8791669,8.2895919 L 12.170834,3.0427084"
          id="path16385-6-5-1" />
        <path
          className='stroke-light default-animation faster delay-last'
          style={bottomLine}
          d="M 3.9687501,8.3344089 14.552081,8.3343753"
          id="path16385-6-5-4" />
        <path
          className='stroke-light default-animation'
          style={upperLine}
          d="M 3.9687501,3.0427084 H 14.552081 v 0 c 0,0 2.298226,-0.1648702 2.145876,1.1952196 -0.15235,1.3600898 -5.634281,7.391698 -5.270927,8.048963 0.363353,0.657265 6.289507,-0.141131 6.440898,-0.836212 0.08025,-0.368456 -2.029636,-0.570961 -3.696166,-1.30356 C 12.694445,9.4976976 11.641664,8.2895919 11.641664,8.2895919 L 6.3499972,3.0427084"
          id="path14839" />
      </svg >
    </div>
  )
}

export default NavButton;
