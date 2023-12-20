import one from '../../../assets/images/carusel-one.jpg'
import two from '../../../assets/images/carusel-two.jpg'
import three from '../../../assets/images/carusel-three.jpg'
import s from './Carusel.module.scss'
import sprite from '../../../assets/sprite.svg'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const TextOne = () => {
  return (
    <svg className={s.textOne}>
      <use xlinkHref={`${sprite}#logo`} />
    </svg>
  )
}
const TextTwo = () => {
  return (
    <span className={s.textTwo}>
      бери |<span className={s.textTwo2}> читай </span>| возвращай
    </span>
  )
}
const TextThree = () => {
  return (
    <div className={s.textThree}>
      Все наши добрые дела - ничто без Божьей благодати
      <div className={s.textThree2}>Мартин Лютер</div>
    </div>
  )
}

const pics = [
  {
    id: 0,
    pic: one,
    children: <TextOne />,
  },
  { id: 1, pic: two, children: <TextTwo /> },
  {
    id: 2,
    pic: three,
    children: <TextThree />,
  },
]

export const Carusel = () => {
  return (
    <Carousel
      className={s.container}
      autoPlay={true}
      showStatus={false}
      interval={6000}
      infiniteLoop
      showThumbs={false}
      dynamicHeight
      animationHandler="fade"
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && (
          <svg className={s.arrows} style={{ left: 15 }} onClick={onClickHandler}>
            <use xlinkHref={`${sprite}#arrow-left`} />
          </svg>
        )
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && (
          <svg className={s.arrows} style={{ right: 15 }} onClick={onClickHandler}>
            <use xlinkHref={`${sprite}#arrow-right`} />
          </svg>
        )
      }
    >
      {pics.map(el => (
        <div key={el.id}>
          <img src={el.pic} alt={`carousel pic-${el.id}`} className={s.img} />
          {el.children}
        </div>
      ))}
    </Carousel>
  )
}
