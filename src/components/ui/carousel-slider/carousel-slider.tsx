import { ChevronLeft, ChevronRight } from 'lucide-react'
import Carousel from 'nuka-carousel'

import two from '../../../assets/images/carousel-one-v2.png'
import one from '../../../assets/images/carousel-one.png'
import four from '../../../assets/images/carousel-three.png'
import three from '../../../assets/images/carousel-two.png'

const data = [
  { id: 'one', src: one },
  { id: 'two', src: two },
  { id: 'three', src: three },
  { id: 'four', src: four },
]

export const CarouselSlider = () => {
  const settings = {
    nextButtonText: <ChevronRight />,
    prevButtonText: <ChevronLeft />,
    prevButtonStyle: { background: 'transparent' },
    nextButtonStyle: { background: 'transparent' },
  }

  return (
    <Carousel
      cellAlign={'center'}
      slidesToShow={1}
      animation={'fade'}
      autoplay
      autoplayInterval={8000}
      pauseOnHover
      wrapAround
      speed={6000}
      swiping
      defaultControlsConfig={settings}
    >
      {data.map(el => (
        <img key={el.id} src={el.src} alt={el.id} style={{ maxWidth: '100%' }} />
      ))}
    </Carousel>
  )
}
