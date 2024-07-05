import ReactDOM from 'react-dom/client'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Sass
import './assets/scss/style.scss'
// Redux
import { store } from './redux/store'
import { Provider } from 'react-redux'
// Router dom
import { createBrowserHistory } from 'history'
export const navigateHistory = createBrowserHistory();
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
// Page
import UserManagement from './pages/UserManagement'
import AdminTemplate from './templates/AdminTemplate'
import Coursemanagement from './pages/Coursemanagement'
import AddUserPage from './pages/AddUserPage'
import AddCoursePage from './pages/AddCoursePage'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HistoryRouter history={navigateHistory}>
      <Routes>
        <Route path='' element={<AdminTemplate></AdminTemplate>}>
          <Route index element={<UserManagement></UserManagement>}></Route>
          <Route path='userManagement' element={<UserManagement></UserManagement>}></Route>
          <Route path='courseManagement' element={<Coursemanagement></Coursemanagement>}></Route>
          <Route path='addUser' element={<AddUserPage></AddUserPage>}></Route>
          <Route path='addCourse' element={<AddCoursePage></AddCoursePage>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
)
