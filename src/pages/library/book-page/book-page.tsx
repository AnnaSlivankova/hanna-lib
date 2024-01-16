import { Link, useNavigate, useParams } from 'react-router-dom'

import { PATH } from '@/common/constants'
import { Button, Page, TabContent, Tabs, TabType, Typography } from '@/components/ui'
import { useFetchBookQuery } from '@/services/library/library.service'

export const BookPage = () => {
  const navigate = useNavigate()
  const { id: bookId } = useParams()
  const { data: book, isLoading } = useFetchBookQuery(bookId)

  if (!book) {
    return (
      <div style={{ color: 'red', textAlign: 'center' }}>
        No book selected. Please return to{' '}
        <Button as={Link} to={PATH.CATALOG} variant={'link'}>
          CATALOG
        </Button>
      </div>
    )
  }

  return (
    <Page
      style={{
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        // justifyContent: 'center',
        // gap: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <img
          src={book.imageUrl}
          alt={`${book.title} book cover`}
          style={{ width: '350px', objectFit: 'cover' }}
        />
        <div style={{ width: '500px', minHeight: '225px' }}>
          <Tabs tabs={tabs} defaultValue={'main'}>
            <TabContent value={'main'}>
              <Typography variant={'h3'}>{book.title}</Typography>
              <Typography variant={'h3'}>
                {book.author.firstName + ' ' + book.author.lastName}
              </Typography>
              <Typography variant={'h3'}>{book.tags[0].name}</Typography>
              <Typography variant={'h3'}>reading period: {book.price}</Typography>
            </TabContent>
            <TabContent value={'description'}>
              <Typography variant={'body1'}>
                Unum sem brute interpretaris neque mandamus efficitur hendrerit docendi utinam.
                Placerat libero reformidans dolorem mus sea comprehensam libero dicta.
              </Typography>
            </TabContent>
            <TabContent value={'reviews'}> reviews tab content </TabContent>
          </Tabs>
        </div>
      </div>
      <Button style={{ alignSelf: 'end' }}>Book it</Button>
    </Page>
  )
}

export const tabs: TabType[] = [
  {
    value: 'main',
    title: 'main',
  },
  {
    value: 'description',
    title: 'Описание',
  },
  {
    value: 'reviews',
    title: 'Отзывы',
  },
]
