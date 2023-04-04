import {Link, Route, Routes} from 'react-router-dom'

import './index.scss'

const pages = import.meta.glob('./pages/*.jsx', {eager: true})

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  }
})

export function App() {
  return (
    <>
      <nav
        className={'flex items-center justify-between flex-wrap bg-gray-800 p-6'}
      >
        <div className={'flex items-center flex-shrink-0 text-white mr-6'}>
          <span className={'font-semibold text-xl tracking-tight'}>
            Logo
          </span>
        </div>
        <div className={'w-full block flex-grow lg:flex lg:items-center lg:w-auto'}>
          <div className={'text-sm lg:flex-grow'}>
            {routes.map(({name, path}) => (
              <Link
                key={path}
                to={path}
                className={
                  'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                }
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <Routes>
        {routes.map(({path, component: RouteComp}) => {
          return <Route key={path} path={path} element={<RouteComp/>}></Route>
        })}
      </Routes>
    </>
  )
}
