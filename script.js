const keyEnc = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat"
};

function encriptar() {
    let txt=document.getElementById("inputText").value;
    if (!/[^a-z ]/.test(txt)) {     // solo letras minusculas sin tildes
        let textResult=txt.split("").map(e=>{
            if(e=='a') return 'ai';
            else if(e=='e') return 'enter';
            else if(e=='i') return 'imes';
            else if(e=='o') return 'ober';
            else if(e=='u') return 'ufat';
            else return e;
            }).join("");
        document.getElementById("resultado").innerHTML = textResult;
    } else {
        document.getElementById("inputText").value = "Solo texto en minúsculas y sin tildes";
    }
}

function desencriptar() {
    let txt = document.getElementById("inputText").value
    for(const [k, v] of Object.entries(keyEnc)) 
        txt = txt.replaceAll(v, k);
    let textResult = txt;
    document.getElementById("resultado").innerHTML = textResult;
}

function copiaTexto() {
    var clipboard1 = new Clipboard('.copiar');
};

function limpiarTexto() {
    textResult ="";
    document.getElementById("resultado").innerHTML = textResult;
    document.getElementById("inputText").value = textResult;
    
}

limpiarTexto();
