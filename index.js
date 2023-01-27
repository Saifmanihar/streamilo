// FOR CALLING THE DATE AND TIME AND CLASS BY CLASS TAG

// let mydate=new Date();
// console.log(mydate);
// let ele=document.getElementsByClassName("container");
// ele.ClassList.add(container);

// let element=document.getElementsByClassName("button");
// console.log(element);
// let elementclass=document.getElementsByClassName("container");
// console.log(elementclass);

// THIS IS USED FOR CHECKING HOW MANY ELEMENT ARE PRESENT IN TAG

// let element=document.getElementsByClassName("container");
// console.log(element[0].innerHTML);
// console.log(element[0].innerText);

//SELCTING THE ELEMENT BY TAG 
// let doc=document.getElementsByTagName("button");
// console.log(doc);
// let div=document.getElementsByTagName("div");
// console.log(div);
//for adding the element///


// createdelement =document.createElement('p');
// createdelement.innerHTML="this is bold text";
// doc[0].appendChild(createdelement);

//EVENTS FOR JS
//BUTTON CLICKED FUNTION 
// function Clicked(){
//     console.log('button was clicked');
// }
// //DOCUMENT LOAD FUNCTION
// window.onload=function(){
//     console.log("document was loaded");
// }
// container.addEventListener('click',function(){
//     console.log("click hogaya..");
// })
// firstcontiner.addEventListener('mouseover',function(){
//     console.log("mouse on continer...");
// })

//MOUSE OUT OF CONTAINER EVENT....
// firstcontiner.addEventListener('mouseout',function(){
//     console.log("mouse out of continer");
// })
firstcontainer.addEventListener('mouseup',function(){
    console.log("mouse up on container");
})


firstcontainer.addEventListener('mousedown',function(){
    console.log("mouse down of continer");
})
