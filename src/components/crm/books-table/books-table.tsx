import { Pencil, Trash2 } from 'lucide-react'

import {
  Button,
  Column,
  Sort,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Typography,
} from '@/components/ui'
import { Books } from '@/services/library/library.service'

const columns: Column[] = [
  {
    key: 'book_cover',
    title: 'Book cover',
  },
  {
    key: 'book_title',
    title: 'Book title',
    sortable: true,
  },
  {
    key: 'author',
    title: 'Author',
    sortable: true,
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'category',
    title: 'Category',
    sortable: true,
  },
  {
    key: 'pages_count',
    title: 'Pages count',
    sortable: true,
  },
  {
    key: 'reading_period',
    title: 'Reading period',
    sortable: true,
  },
  {
    key: 'available',
    title: 'Available',
    sortable: true,
  },
  {
    key: 'rating',
    title: 'Rating',
  },
  {
    key: 'date_created',
    title: 'Date created',
    sortable: true,
  },
  {
    key: 'date_updated',
    title: 'Date updated',
    sortable: true,
  },
  {
    key: 'actions',
    title: 'Actions',
  },
]

export const BooksTable = ({ books, onDeleteClick, onEditClick, onSort, sort }: Props) => {
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)
  const handleEditClick = (id: string) => () => onEditClick(id)

  const imgStyles = {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    height: '50px',
    width: 'auto',
  }

  return (
    <Table>
      <TableHeader columns={columns} onSort={onSort} sort={sort} />
      <TableBody>
        {books?.map(book => (
          <TableRow key={book.id}>
            <TableCell>
              <img style={imgStyles} src={book.imageUrl} alt={`${book.title} cover`} />
            </TableCell>
            <TableCell>
              <Typography>{book.title}</Typography>
            </TableCell>
            <TableCell>{`${book.author.firstName} ${book.author.lastName}`}</TableCell>
            <TableCell>description</TableCell>
            <TableCell>{book.tags.map(t => t.name)}</TableCell>
            <TableCell>page count</TableCell>
            <TableCell>{`reading period ${book.price}`}</TableCell>
            <TableCell>available</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Date created</TableCell>
            <TableCell>DAte updated</TableCell>
            <TableCell>
              <Button variant={'icon'} onClick={handleDeleteClick(book.id)}>
                <Trash2 color={'var(--color-primary)'} />
              </Button>
              <Button variant={'icon'} onClick={handleEditClick(book.id)}>
                <Pencil color={'var(--color-primary)'} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

type Props = {
  books: Books[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
  onSort: (key: Sort) => void
  sort: Sort
}
