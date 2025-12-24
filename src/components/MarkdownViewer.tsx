import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './MarkdownViewer.css'

interface MarkdownViewerProps {
  filePath: string
}

export function MarkdownViewer({ filePath }: MarkdownViewerProps) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`ファイルの読み込みに失敗しました: ${response.statusText}`)
        }
        return response.text()
      })
      .then((text) => {
        setContent(text)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [filePath])

  if (loading) {
    return <div className="markdown-container">読み込み中...</div>
  }

  if (error) {
    return <div className="markdown-container error">エラー: {error}</div>
  }

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
