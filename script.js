document.title = "Alchemy for beginners";
console.log(document.title);
document.body.style.backgroundColor = "#FF69B4";
//document.getElementById("content").innerHTML = document.title;
console.dir(document);
console.log(document.domain);   
console.log(document.head);
console.log(document.getElementById("content"));
console.log(document.all);
parentElement = document.getElementById("body-id")
let lastChild = parentElement.lastChild; 
console.log(lastChild)
let firstchild_1 = parentElement.firstChild;
let content = document.getElementById("body-id");
let x = parentElement.firstChild.nodeName;
console.log(firstchild_1);
console.log(x);
let y = lastChild.lastChild
console.log(y);
let children1 = parentElement.childNodes;
let a = document.getElementById('body-id');
// let children = a.children;
console.log(children1);

document.querySelector("p").style.backgroundColor ="blue";
console.log(document.querySelectorAll);


console.log(document.getElementsByTagName("this is an important item"));
console.log(document.all[27]);
document.all[16].textContent="Hello";

// Random color for background

function random_bg_color(){
    var x = Math.floor(Math.random() * 225);
    var y = Math.floor(Math.random() * 225);
    var z = Math.floor(Math.random() * 225);
    var bg_Color= "rgb(" + x + "," + y + "," + z + ")";
    console.log(bg_Color);
    document.body.style.background = bg_Color;
}
    random_bg_color();

    // Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)

    console.log(document.querySelectorAll('body *'));
    const example = document.body;

    for (const child of example.children) {
    console.log(child.tagName);
    }

    // DOM Selectors

//  //query selector

     const abc = document.querySelector('img');
     console.log(abc.title);
     console.log(abc.innerText);
     console.log(abc.src)

    //QuerySelectorAll

    const allImg = document.querySelectorAll('img');
    console.log(allImg);
    console.log(allImg.alt);
    console.log(allImg.width);
    console.log(allImg[0].innerText) 
    console.log(allImg[1].id) // "image2"
    console.log(allImg[1].alt)

    

//didnt work
    //  const boldAnchor = document.querySelector('p#href')
    // console.log(boldAnchor.innerText) // "another link"

    const boldAnchor = document.querySelector('a#bold')
    console.log(boldAnchor.innerText)

    //Select all the img tags and loop through them. If they have no important class, turn their display property to none


    let images = document.getElementsByTagName("img");
    for(const e of images){
    (e.className === "important")? console.log(e): e.style.display = "none";
}

// Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as welllet images = document.getElementsByTagName("img");
    

    let para = document.getElementsByTagName("p");
    for(const e of para){
        console.log(e.innerText);
         (e.className)? console.log(e.className) : console.log("no class");
         //
        //  (e.className)? e.style.color = random_color :  e.style.color = "none";
    }
    //Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

    function random_color(){
        var x = Math.floor(Math.random() * 225);
        var y = Math.floor(Math.random() * 225);
        var z = Math.floor(Math.random() * 225);
        var color_change= "rgb(" + x + "," + y + "," + z + ")";
        console.log(color_change);
        document.body.style.color = color_change;
    }
        random_color();

//3. Create


let random_element1 =Math.floor(Math.random() * 26)
let random_element2 =Math.floor(Math.random() * 26)
let random_element3 =Math.floor(Math.random() * 26)
const changeElements = (johnsonGroup, a ,b,c) => {
    [johnsonGroup[a], johnsonGroup[b], johnsonGroup[c]] = [johnsonGroup[b], johnsonGroup[c], johnsonGroup[a]]
  }
  
  let johnsonGroup =["Andrii", "Anna","Arsenia","Audric","Aurore","Ben","Daria","Edouard","Egide","Estime","geal","Hanna","Harold","Hassan","Jiacinto","Kawtar","Kyubra","Munise","Nattyjojo","Carmen","Nicolas","Obaida"," Pranavi", "Prathima", "Yunese","Youssef",]
  changeElements(johnsonGroup,random_element1,random_element2,random_element3);
console.log(johnsonGroup,random_element1,random_element2,random_element3);

let articleJs = document.getElementById("ArticleJhonson")
       

for(const element of johnsonGroup) {
    var johnsonPara = document.createElement('p');
    johnsonPara.innerHTML =`${element}` ;
    articleJs.appendChild(johnsonPara);
}

const nodeList = document.querySelectorAll(".johnsons article p")
for(let i=0;i<26;i++){
    if(i%2==0){
        let r =Math.floor(Math.random() * 255);
        let g=Math.floor(Math.random() * 255);
        let b =Math.floor(Math.random() * 255);
        let fontColor 
        let bgColor =`rgb(${r},${g},${b})`;
        nodeList[i].style.backgroundColor = `rgb(${r},${g},${b})`;
        hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b) );
        
            // Using the HSP value, determine whether the color is light or dark
            if (hsp>127.5) {
                fontColor =  'black';
            } 
            else {
                fontColor =  'white';     
            }
            nodeList[i].style.color = fontColor;
    }
    else {
        nodeList[i].style.backgroundColor = "white";

    }
}


//Example of first child
const section = document.querySelector('section')
const sectionsChildren = section.children
console.log(sectionsChildren) 

// Get the element that comes after the first child 
console.log(section.children[0].nextElementSibling)

//moving a node example

// const section = document.querySelector('section')
// const a = section.children[0]
// const b = section.children[1]
// b.appendChild(a)

const section2 = document.querySelector('main')
const sectChild = section2.children
console.log(sectChild)
console.log(section2.children[0])