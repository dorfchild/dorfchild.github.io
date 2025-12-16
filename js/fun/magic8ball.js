const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
    "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
    "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"
];
let input = document.getElementById("input");
let btxt = document.getElementById("balltext");
let ran = false;
let appearf = [
    {opacity: 0, transform:'translateY(5px)'},
    {opacity: 1,transform:'translateY(0)'}
];
let appeart = {duration: 2000, iterations: 1};
let poly = null;
function predict(e){
    if(e.key=='Enter'){
        if(!ran){
            poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
            poly.setAttribute("points","100, 20, 165, 145, 35, 145");
            poly.setAttribute("fill","blue");
        }
        document.getElementById("circ").setAttribute("fill", "black"); 
        if(!ran){
            document.getElementById("circ").animate([{fill: '#fff'},{fill: '#000'}],{duration:200,iterations:1});
            document.getElementById("answer").appendChild(poly);
        }
        btxt.setAttribute("font-size", "9");
        btxt.textContent=answers[Math.floor(Math.random()*20)];
        btxt.setAttribute("fill", "white");btxt.setAttribute("y","135");
        btxt.setAttribute("x","45");
        document.getElementById("answer").insertBefore(btxt,null);
        poly.animate(appearf,appeart);btxt.animate(appearf,appeart);
        ran=true;
    }
}
input.addEventListener("keydown",predict);