const data = `Aku ingin begini
Aku ingin begitu
Ingin ini itu banyak sekali
Semua semua semua
Dapat dikabulkan
Dapat dikabulkan
Dengan kantong ajaib
Aku ingin terbang bebas
Di angkasa
Hei… baling baling bambu
La... la... la...
Aku sayang sekali
Doraemon
La... la... la...
Aku sayang sekali`

const countWords = (data, ...word) => {
    newObj = word.map(word => {
        return {
            kata: word,
            ada: data.match(new RegExp(word, "gi")).length
        }
    })
    console.log(newObj)
}
countWords(data, "aku", "ingin", "dapat")