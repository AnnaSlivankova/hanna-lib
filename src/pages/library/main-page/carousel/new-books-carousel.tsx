import { ChevronLeft, ChevronRight } from 'lucide-react'
import Carousel from 'nuka-carousel'

import s from './new-books-carousel.module.scss'

import { BookCard } from '@/components/library/book-card'
import { useFetchAllBooksQuery } from '@/services/library/library.service'

const settings = {
  // nextButtonText: <ChevronRight />,
  // prevButtonText: <ChevronLeft />,
  // prevButtonStyle: { background: 'transparent' },
  prevButtonStyle: { display: 'none' },
  nextButtonStyle: { display: 'none' },
  // nextButtonStyle: { background: 'transparent' },
  pagingDotsStyle: { display: 'none' },
}

export const NewBooksCarousel = () => {
  const { data: newBooks } = useFetchAllBooksQuery()

  return (
    <div className={s.root}>
      <Carousel
        cellAlign={'center'}
        slidesToShow={4}
        animation={'zoom'}
        autoplay
        autoplayInterval={3000}
        pauseOnHover
        wrapAround
        // speed={6000}
        swiping
        defaultControlsConfig={settings}
      >
        {newBooks?.map(book => (
          <BookCard
            style={{ maxWidth: '100%' }}
            key={book.id}
            onCardClick={() => {}}
            onButtonClick={() => {}}
            id={book.id}
            title={book.title}
            author={`${book.author.firstName} ${book.author.lastName}`}
            category={book.tags[0].name}
            cover={book.imageUrl}
          />
        ))}
      </Carousel>
    </div>
  )
}
