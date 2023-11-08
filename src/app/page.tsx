import CoursesItems from "./components/CoursesItems"
import Footer from "./components/Footer"
import Guaranty from "./components/Guaranty"
import Suport from "./components/Suport"
import Statement from "./components/Statement"
import Header from "./components/clientComponents/Header"

export default async function Home() {
  return (
    <>
      <Header/>
      <main className="mx-3">
        <Statement/>
        <CoursesItems/>
      </main>
      <Suport/>
      <Guaranty/>
      <Footer/>
    </>
  )
}
