
export default function CSV(data, filename){
    const cabecario = Object.keys(data)
    const conteudo = Object.values(data)

    const csvString = [
        cabecario,
        conteudo
    ]
    .map(linha => linha.join(","))
    .join("\n")

    // criacao do arquivo csv 
    const blob = new Blob([csvString], {type: 'text/csv'})
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename || 'download.csv' 
    document.body.appendChild(link) 
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
}