import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="bg-black min-h-screen text-white">
          <Routes>

          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App