import { useState, useEffect } from 'react'
import './DownloadPage.css'

interface FileItem {
  name: string
  path: string
}

export function DownloadPage() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // ファイル一覧を取得
    fetch('/dl/files.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('ファイル一覧の取得に失敗しました')
        }
        return response.json()
      })
      .then(data => {
        setFiles(data.files || [])
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="download-page">
        <h1>ダウンロード</h1>
        <p>読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="download-page">
        <h1>ダウンロード</h1>
        <p className="error">エラー: {error}</p>
        <p className="info">
          ファイル一覧を表示するには、<code>public/dl/files.json</code> を作成してください。
        </p>
      </div>
    )
  }

  return (
    <div className="download-page">
      <h1>ダウンロード</h1>
      <p>以下のファイルをダウンロードできます。</p>

      {files.length === 0 ? (
        <p className="info">ダウンロード可能なファイルはありません。</p>
      ) : (
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-info">
                <span className="file-name">{file.name}</span>
              </div>
              <button
                className="download-button"
                onClick={() => handleDownload(file.path, file.name)}
              >
                ダウンロード
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
