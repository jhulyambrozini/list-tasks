import ButtonAdd from '../componenets/ButtonAdd/ButtonAdd'
import Aside from '../containers/Aside/Aside'
import ListTasks from '../containers/ListTasks/ListTasks'

const Home = () => (
  <>
    <Aside displayFilters />
    <ListTasks />
    <ButtonAdd />
  </>
)

export default Home
