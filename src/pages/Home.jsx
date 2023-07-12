import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

export function Home () {
  return (
    <div>
      <NothingSelectedView />
      <NoteView />
    </div>
  )
}
