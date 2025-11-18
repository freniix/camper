const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg"]
const randomNum = Math.floor(Math.random()*images.length);
document.write(
  `<style>#background{
  background: url("./assets/image/${images[randomNum]}") no-repeat center / cover !important;
  } </style>`
)

