import { type Book } from '../types'
import { BookItem } from './BookItem'
import { NotFound } from './NotFound'

interface Props {
  books: Book[]
}

export const BookList: React.FC<Props> = ({ books }) => {
  if (books.length === 0) {
    return <NotFound />
  }

  return (
		<ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 w-full overflow-hidden overflow-y-auto scrollbar-gutter-stable">
			{books.map(book => <BookItem key={book.title} book={book} />)}
		</ul>
  )
}
