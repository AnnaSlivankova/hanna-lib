import { useState } from 'react'

import { toast } from 'react-toastify'

import { BookDialog } from '@/components/crm/book-dialog/book-dialog'
import { BooksTable } from '@/components/crm/books-table'
import { DeleteDialog } from '@/components/crm/delete-dialog'
import { Button, Page, Scrollbar } from '@/components/ui'
import {
  Book,
  useCreateNewBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} from '@/services/crm/crm.service'
import { useFetchAllBooksQuery } from '@/services/library/library.service'

export const Crm = () => {
  console.log('Crm was rendered')
  const { currentData: booksCurrentData, data: booksData } = useFetchAllBooksQuery()
  const books = booksCurrentData ?? booksData

  const [bookToDeleteId, setBookToDeleteId] = useState<null | string>(null)
  const [bookToEditId, setBookToEditId] = useState<null | string>(null)
  const [showCreateModal, setShowCreateModal] = useState(false)

  const showConfirmDeleteModal = !!bookToDeleteId
  const showEditModal = !!bookToEditId

  const bookToDeleteTitle = books?.find(b => b.id === bookToDeleteId)?.title

  const bookToEdit = books?.find(b => b.id === bookToEditId)

  const [createBook] = useCreateNewBookMutation()
  const [deleteBook] = useDeleteBookMutation()
  const [updateBook] = useUpdateBookMutation()

  const handleDeleteBookClick = async () => {
    try {
      await deleteBook({ id: bookToDeleteId ?? '' }).unwrap()
      setBookToDeleteId(null)
      toast.success(`a book ${bookToDeleteTitle} was deleted`)
    } catch (e: any) {
      toast.error(e?.data?.error ?? 'Something went wrong during the deleting')
    }
  }

  const handleUpdateBookClick = async (data: Book) => {
    if (!bookToEditId) {
      return
    }

    try {
      await updateBook({ id: bookToEditId, data }).unwrap()
      toast.success(`a book ${data.title} was updated`)
    } catch (e: any) {
      toast.error(e?.data?.error ?? 'Something went wrong during the updating')
    }
  }

  const handleCreateBookClick = async (data: Book) => {
    try {
      await createBook(data).unwrap()
      toast.success(`a book ${data.title} was created`)
    } catch (e: any) {
      toast.error(e?.data?.error ?? 'Something went wrong during the creating')
    }
  }

  return (
    <Page>
      <DeleteDialog
        deletedItemTitle={bookToDeleteTitle ?? 'Удаляемая книга'}
        onCancel={() => setBookToDeleteId(null)}
        onConfirm={handleDeleteBookClick}
        onOpenChange={() => setBookToDeleteId(null)}
        open={showConfirmDeleteModal}
        dialogTitle={'Delete book'}
      />
      <BookDialog
        defaultValues={bookToEdit}
        // key={bookToEditId}
        onConfirm={handleUpdateBookClick}
        onOpenChange={() => setBookToEditId(null)}
        onCancel={() => setBookToEditId(null)}
        open={showEditModal}
        dialogTitle={'Update current book'}
      />
      <Button onClick={() => setShowCreateModal(true)}>Create book</Button>
      <BookDialog
        onCancel={() => setShowCreateModal(false)}
        onConfirm={handleCreateBookClick}
        onOpenChange={setShowCreateModal}
        open={showCreateModal}
        dialogTitle={'Add new book'}
      />
      <Scrollbar type={'scroll'}>
        <BooksTable
          books={books}
          onDeleteClick={setBookToDeleteId}
          onEditClick={setBookToEditId}
          sort={{
            direction: 'asc',
            key: 'title',
          }}
          onSort={() => {}}
        />
      </Scrollbar>
      {/*<InDevelopment />*/}
    </Page>
  )
}
