
const en = document.getElementById("en")
const br = document.getElementById("br")
const jp = document.getElementById("jp")

en.addEventListener('click',function(){const en = "http://localhost:5000/en"
    updateByFlag(en)
})

br.addEventListener('click',function(){const br = "http://localhost:5000/"
    updateByFlag(br)
})

jp.addEventListener('click',function(){const jp = "http://localhost:5000/jp"
    updateByFlag(jp)
})


function updateByFlag(lang){
    const header1 = document.getElementById("header1")
    const header2 = document.getElementById("header2")
    const header3 = document.getElementById("header3")
    const header4 = document.getElementById("header4")
    const sub = document.getElementById("subtitle")
    fetch(lang).then(res=>res.json()).then(dados=>{
        header1.innerHTML = dados.header[0]
        header2.innerHTML = dados.header[1]
        header3.innerHTML = dados.header[2]
        header4.innerHTML = dados.header[3]
        sub.innerHTML = dados.subtitulo
    })
}