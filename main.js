const word=["Pizza","Run","Fly","Eagle","Know","Spider"];
function generateword(){
    const wordindex=Math.floor(Math.random()*word.length);
    const words=word[wordindex];
    document.getElementById("labeli").innerHTML=words;
}