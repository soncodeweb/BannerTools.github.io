const initCanvas = () => {
  return new fabric.Canvas("canvas", {
    width: 700,
    height: 700,
    backgroundColor: "#a2bad2",
  });
};
const setImageCanvas = (canvas, img) => {
  fabric.Image.fromURL(img, (image) => {
    image.scaleToHeight(700);
    canvas.backgroundImage = image;
    canvas.renderAll();
  });
  // implement
};
const addText = () => {
  const textbox = new fabric.Textbox("Nhập text", {
    left: 50,
    top: 50,
    fontSize: 20,
    fill: "white",
    fontFamily: "hoefler",
  });
  canvas.add(textbox).setActiveObject(textbox);
};

const setColorListener = () => {
  const picker = document.getElementById("color");
  picker.addEventListener("change", (event) => {
    let color = event.target.value;
    canvas.getActiveObject().set({ fill: color });
    canvas.renderAll();
  });
};

const changeFont = () => {
  let e = document.getElementById("font-family");
  e.addEventListener("change", () => {
    let giaTri = e.options[e.selectedIndex].value;
    canvas.getActiveObject().set({ fontFamily: giaTri });
  });
};

const changeTextAlign = () => {
  let e = document.getElementById("text-align");
  e.addEventListener("change", () => {
    let giaTri = e.options[e.selectedIndex].value;
    canvas.getActiveObject().set({ textAlign: giaTri });
  });
};
const changeFontStyle = () => {
  let e = document.getElementById("font-style");
  e.addEventListener("change", () => {
    let giaTri = e.options[e.selectedIndex].value;
    canvas.getActiveObject().set({ fontStyle: giaTri });
  });
};
const changeFontSize = () => {
  let e = document.getElementById("number");
  e.addEventListener("change", (event) => {
    let giaTri = event.target.value;
    canvas.getActiveObject().set({ fontSize: giaTri });
  });
};

const deleteObject = () => {
  const object = canvas.getActiveObject();
  canvas.remove(object);
};
const groupObjects = (canvas, group , shouldGroup) => {
  if(shouldGroup){
      const object = canvas.getObjects()
      console.log(group.val)
      group.val=new fabric.Group(object,{cornerColor: 'white'})
      console.log(object)
      clearCanvas(canvas)
      canvas.add(group.val)
      canvas.requestRenderAll()
  }else{
      group.val.destroy()
      const oldGroup = group.val.getObjects()
      canvas.remove(group.val)
      canvas.add(...oldGroup)
      group.val = null
      canvas.requestRenderAll()
  }
}


let readFile = function(e) {
  inputforupload = e.target;
  readerobj = new FileReader();

  readerobj.onload = function(){
        var imgElement = document.createElement('img');
        imgElement.src = readerobj.result;

        imgElement.onload = function() {
      /** seltsam aber scheinbar muss alles in die onload Funktion gepackt werden damit die Bildbröße verfügbar ist...
          ausserhalb kommen die Variablen für die Bildgröße nicht an... **/

            console.log(imgElement.width);
            console.log(imgElement.height);

            /** Methode um ein Bild in fabric.js einzufügen **/
            var imageinstance = new fabric.Image(imgElement, {
                  angle: 0,
                  opacity: 1,
                  cornerSize: 30,
                });
        /** Bild skalieren damit es in das Canvas Objekt reinpasst */
        /** check ob canvas portrait oder landscape format ist **/
        var cw = $(".canvas-container").width();
        var ch = $(".canvas-container").height();
        if(cw > ch){
          /** canvas ist landscape **/
          imageinstance.scaleToWidth($(".canvas-container").width() - 500);
          imageinstance.scaleToHeight($(".canvas-container").height() - 500);

        }else{
          /** canvas ist portrait **/
        imageinstance.scaleToHeight($(".canvas-container").height() - 500);
        imageinstance.scaleToWidth($(".canvas-container").width() - 500);

        }

        // imageinstance.setControlsVisibility(HideControls);
        //imageinstance.cornerSize(40);
      //  imageinstance["cornerSize"] = parseFloat(40);
// removes the right top control
        canvas.add(imageinstance);
        canvas.centerObject(imageinstance);


      };


  };

  readerobj.readAsDataURL(inputforupload.files[0]);
};
let imgElement = "";
let inputforupload = "";
let readerobj = "";
let group = {}
const canvas = initCanvas();
const img =
  "https://png.pngtree.com/background/20210710/original/pngtree-black-gold-year-end-grand-ceremony-year-end-grand-event-background-picture-image_1047991.jpg";
const a =
  "https://anonyviet.com/wp-content/uploads/2018/01/5aae503e4f037a5a4375944d8861fb6a.png";
setImageCanvas(canvas, img);
document.getElementById('filereader').addEventListener('change', readFile);



