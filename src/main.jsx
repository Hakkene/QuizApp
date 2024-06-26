/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { quizQuestions } from './constants'
import { banners } from './constants'
import Homepage from './screens/Homepage.jsx'
import Tutorial from './screens/Tutorial.jsx'
import QuizScaffold from './screens/QuizScaffold.jsx'
import Relaxation from './screens/Relaxation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    
  },
  {
    path: '/tutorial',
    element: <Tutorial />,
    
  },
  {
    path: '/quizone',
    element: <QuizScaffold questions={quizQuestions.questionsOne} banners={banners.QuizOne} module={'one'}/>,
  },
  {
    path: '/quiztwo',
    element: <QuizScaffold questions={quizQuestions.questionsTwo} banners={banners.QuizTwo} module={'two'}/>,
  },
  {
    path: '/quizthree',
    element: <QuizScaffold questions={quizQuestions.questionsThree} banners={banners.QuizThree} module={'three'}/>,
  },

  {
    path: '/relaxone',
    element: <Relaxation module={'one'}/>,
  },
  {
    path: '/relaxtwo',
    element: <Relaxation module={'two'}/>,
  },
  {
    path: '/relaxthree',
    element: <Relaxation module={'three'}/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
