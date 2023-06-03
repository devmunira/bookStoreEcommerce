import {Box} from '@mui/system';
import Image from 'next/image';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {useTheme} from '@mui/material/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({sliders}) => {
    const theme = useTheme()
    return (
        <AutoplaySlider
            animation="foldOutAnimation"
            cssModule={[CoreStyles, AnimationStyles]}
            play={true}
            cancelOnInteraction={false}
            mobileTouch={true}
            interval={6000}
            style={{
            width: '100%',
            height: "450px",
            position: 'relative',
            background: theme.palette.background.light,
            padding: 0,
            margin: 0
        }}
            className="sliderContainer">

            {sliders.length > 0 && sliders.map((item, index) => <div
                style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '450px'
                }}
                className='sliderImageContainer'
                key={index}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/${item.url}`}
                    alt={item.name}
                    quality="100"
                    layout="fill"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                            33vw"
                    // objectFit='contain'
                    />
            </div>)
}
        </AutoplaySlider>
    )
}

export default Slider;