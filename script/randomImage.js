const images = ["../assets/bg/bg1.jpg", "../assets/bg/bg2.jpg", "../assets/bg/bg3.jpg"]
const randomNum = Math.floor(Math.random()*images.length);
document.write(
  `<style>#background{
  background: url("${images[randomNum]}") no-repeat center / cover !important;
  } </style>`
)
