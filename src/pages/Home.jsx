import { useSelector } from 'react-redux'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

export function Home () {
  const { workExperienceActive } = useSelector(state => state.portfolio)
  return (
    <div>
      {
        workExperienceActive
          ? <NoteView form={workExperienceActive} />
          : <NothingSelectedView />
      }
    </div>
  )
}
