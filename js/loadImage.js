// function onFileSelected(event) {
//   var selectedFile = event.target.files[0];
//   var reader = new FileReader();

//   var imgtag = document.getElementById("myimage");
//   imgtag.title = selectedFile.name;

//   reader.onload = function(event) {
//     imgtag.src = event.target.result;
//   };
//   reader.readAsDataURL(selectedFile);
//   console.log(imgtag)
// }

// const imaget = new fabric.Image("onFileSelected()",{
//     width: 200,
//     height: 200
// })

// canvas.add(imaget)

// canvas.renderAll();
// function onFileSelected(event) {
//     var selectedFile = event.target.files[0];
//     var reader = new FileReader();
  
//     var imgtag = document.getElementById("myimage");
//     imgtag.title = selectedFile.name;
//     console.log(imgtag.title)
//     reader.onload = function(event) {
//       imgtag.src = event.target.result;
//     };
//     reader.readAsDataURL(selectedFile);
//     console.log(imgtag)
//   }