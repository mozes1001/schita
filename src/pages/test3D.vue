<template>
  <div class="flex justify-center">
    <h5>Drawing with mousemove event</h5>
    <span>{{'x: ', x}}, {{'y: ', y}}</span>
    <canvas class="flex justify-center" width="150" height="150"
            @mousemove="handleMouseMove"


            id="myCanvas">
<!--      <img class="flex justify-center" id="img" src="../components/canvas/lungDiagram.jpg"
           style="width: 110px; height: 110px;"
           alt=""
            @mousedown="startPainting"
            @mouseup="finishedPainting"
      >-->
    </canvas>
  </div>
</template>

<script>

export default {
  name: "test3D",
  data: () => ({
    x: 0,
    y: 0,
    canvas:null,
  }),
  methods: {
    //adding img
/*    canvasImage: function() {
      const img = new Image();
      this.img.src = './components/canvas/lungDiagram.jpg';
      this.img.onload = function() {
        const w = img.width,
          h = img.height;
        this.ctx.fillText('Source', w * .5, 20);
        this.ctx.drawImage(img, 0, 24, w, h);
      }
    },*/
    handleMouseMove (e) {
      this.showCoordinates(e)
      // this.draw()
    },
    showCoordinates(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.canvas;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
    },
    /*startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      // this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      // this.ctx.beginPath()
    },
    save(){
      this.ctx.save()
    },
    restore(){
      this.ctx.restore()
    }*/
  },
  mounted() {
    let c = document.getElementById("myCanvas");
    this.canvas = c.getContext("2d");
    // this.canvasImage()
    // Resize canvas
/*    this.canvas.height = window.innerHeight -60;
    this.canvas.width = window.innerWidth;*/

   /* //draw a simple triange
    this.strokeStyle = "green"
    this.ctx.strokeRect(100,100,300,300)

    //draw a simple traingle
     this.ctx.beginPath();
     this.ctx.moveTo(100,100)
     this.ctx.lineTo(200,100)
     this.ctx.lineTo(200,150)
     this.ctx.closePath()
     this.stroke()*/
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#myCanvas {
  border: 1px solid black;

}
#img {
  display: block;
  justify-content: center;
  width: 100%;
  padding-bottom: -50%;
}
</style>
