import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import About from "./components/About/About";
import QuizDetails from "./components/QuizDetails/QuizDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "quiz/:quizId",
          loader: ({ params }) =>
            fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizDetails></QuizDetails>,
        },
      ],
    },
  ]);
  return (
    <div className="App container md:mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
