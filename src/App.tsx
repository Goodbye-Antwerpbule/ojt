import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MarkdownViewer } from './components/MarkdownViewer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="sidebar">
          <h1>Markdown Viewer</h1>
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/sample">サンプル</Link>
            </li>
            <li>
              <Link to="/about">このサイトについて</Link>
            </li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<MarkdownViewer filePath="/docs/home.md" />} />
            <Route path="/sample" element={<MarkdownViewer filePath="/docs/sample.md" />} />
            <Route path="/about" element={<MarkdownViewer filePath="/docs/about.md" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
