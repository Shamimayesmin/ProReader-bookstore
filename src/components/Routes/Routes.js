import { createBrowserRouter } from "react-router-dom"
import About from "../About"
import BookDetails from "../BookDetails"
import Books from "../Books"
import ErrorPage from "../ErrorPage"
import Home from "../Home"
import Root from "../Root/Root"


const router = createBrowserRouter([
    {
      path : '/',
      element : <Root></Root>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path : '/',
           element : <Home></Home>
         },
        {
          path : '/home',
           element : <Home></Home>
         },
         {
          path : '/about',
          element :<About></About>
        },
        
        {
            path : '/books',
            element : <Books></Books>,
            loader : async()=>{
                return fetch('https://api.itbook.store/1.0/search/mongodb')
            },
            
        },
        {
            path : 'book/:id',
            element : <BookDetails></BookDetails>,
            loader : ({params}) =>
            fetch(`https://api.itbook.store/1.0/books/${params.id}`)
               
        },

        
  
      ]
    },
   
  
  
  ])

  export default router