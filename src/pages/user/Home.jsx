import Sidebar from "../../components/Sidebar.jsx"
import Header from "../../components/Header.jsx"

function Home() {
  return (
    <>
      <Header />
      <div className="flex overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 bg-green-400 p-2 lg:ml-80 lg:p-8 w-full max-w-full min-h-screen overflow-x-hidden pt-14 lg:pt-0">
          <h1 className="text-4xl font-bold text-white">Welcome to Home</h1>
        </div>
      </div>
    </>
  )
}

export default Home






