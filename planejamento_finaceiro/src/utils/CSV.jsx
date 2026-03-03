
// Funcao que faz o dowload do csv
export default function CSV(data, filename) {
  if (!data || !data.length) return

  const headers = Object.keys(data[0])

  const csvString = [
    headers.join(","), // cabeçalho
    ...data.map(row =>
      headers.map(h => row[h]).join(",")
    )
  ].join("\n")

  
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = `${filename || "download"}.csv`
  link.click()

  URL.revokeObjectURL(url)
}