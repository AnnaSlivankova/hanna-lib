// import { books } from '@/common/data-for-tests'
import { useNavigate } from 'react-router-dom'

import { PATH } from '@/common/constants'
import { BookCard } from '@/components/library/book-card'
import { Page } from '@/components/ui'
import { useFetchAllBooksQuery } from '@/services/library/library.service'

export const CatalogPage = () => {
  const { data: books, isLoading } = useFetchAllBooksQuery()

  const navigate = useNavigate()

  const handelOnBookClick = (title: string) => {
    alert(`book ${title} was booked`)
  }
  const handelOnCardClick = (id: string | number) => {
    navigate(`${PATH.CATALOG}/${id}`)
  }

  return (
    <Page>
      <div style={{ color: 'green', marginBottom: '20px' }}>CatalogPageTitle</div>

      <div style={{ color: 'green', marginBottom: '20px' }}>search bar</div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        {books?.map(book => (
          <BookCard
            key={book.id}
            onButtonClick={handelOnBookClick}
            onCardClick={handelOnCardClick}
            id={book.id}
            title={book.title}
            author={`${book.author.firstName} ${book.author.lastName}`}
            category={book.tags[0].name}
            pageCount={book.price.toString()}
            cover={book.imageUrl}
            rating={4}
            isNew={true}
          />
        ))}
      </div>
      <div style={{ color: 'green' }}>pagination</div>
    </Page>
  )
}
