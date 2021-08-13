var canvas = new fabric.Canvas('c',{
    width: 400,
    height: 400,

});
// Define an array with all fonts
// var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];

// var textbox1 = new fabric.Textbox('Lorum ipsum dolor sit amet', {
//   left: 50,
//   top: 50,
//   width: 150,
//   fontSize: 20,
//   fontFamily: 'Times New Roman'
// });
// canvas.add(textbox1).setActiveObject(textbox1);
// var textbox2 = new fabric.Textbox('Hello ae mình lad fd', {
//     left: 50,
//     top: 50,
//     width: 150,
//     fontSize: 20,
//     textAlign: 'center',
//     fontFamily: 'Times New Roman'
//   });
//   console.log(textbox2)
//   // textbox.set({fontFamily: "Inconsolata"})
// canvas.add(textbox2).setActiveObject(textbox2);


// const setColorListener = () =>{
//   const picker = document.getElementById("text-color")
//   picker.addEventListener('change',(event)=>{
//       let color = event.target.value
//       canvas.getActiveObject().set({fill: color})
//       canvas.renderAll();
//   })
// }
// setColorListener()
// const changeFont =  () =>{
//   let e = document.getElementById("font-family");
//   e.addEventListener('change',()=>{
//     let giaTri = e.options[e.selectedIndex].text;
//     canvas.getActiveObject().set({fontFamily: giaTri})
//   })
// }

// changeFont()


// add image
function onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();
  var imgtag = document.getElementById("my-image");
  imgtag.title = selectedFile.name;
  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };
  reader.readAsDataURL(selectedFile);
}


const file = document.getElementById("file")
file.addEventListener("change",()=>{
    let imgInstance = new fabric.Image(imgElement, {
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    angle: 30,
    opacity: 0.85
});
canvas.add(imgInstance);
canvas.renderAll() 
})