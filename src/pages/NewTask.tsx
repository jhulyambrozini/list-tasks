import Aside from '../containers/Aside/Aside'
import Form from '../containers/Form/Form'

const NewTask = () => {
  return (
    <>
      <Aside displayFilters={false} />
      <Form />
    </>
  )
}

export default NewTask
