<template>
  <div class="flex justify-center">
    <h5>Drawing with mousemove event</h5>
    <img :src="require('../components/canvas/lungDiagram.jpg')" width="75" height="75"/>
    <canvas id="myCanvas"
            width="560" height="360"
            :src="image"
            @mousemove="showCoordinates"
            @mousedown="beginDrawing"
            @mouseup="stopDrawing"
    >
<!--      <img :src="image"/>
      -->
    </canvas>

    <span>{{ 'x: ', x }}, {{ 'y:', y }}</span>

  </div>
</template>

<script>
import image from '../components/canvas/lungDiagram.jpg'
export default {
  name: "test2D",
  data() {
    return {
      image: image,
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false
    }
  },
  methods: {

    showCoordinates(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
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
    beginDrawing(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    }
  },
  mounted() {
    var c = document.getElementById("myCanvas");
    this.canvas = c.getContext('2d');
    this.image = this.canvas.drawImage(image, 0, 0, 50, 50)
  }
}
</script>

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
img{
  position: relative;
}
</style>
