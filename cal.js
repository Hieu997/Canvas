//Vẽ hình tròn
function drawCricle() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d"); //Khai báo vẽ 2d
  ctx.beginPath(); //Bắt dầu vẽ theo kiẻu đen trắng
  ctx.arc(50, 50, 20, 0, 2 * Math.PI); //Vẽ hình tròn (x,y,)
  ctx.fillStyle = "green";
  ctx.fill();
}
//drawCricle();

//Vẽ hình chữ nhật
function drawRect() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d"); //Khai báo vẽ 2d
  ctx.beginPath(); //Bắt dầu vẽ theo kiẻu đen trắng
  ctx.rect(100, 100, 100, 50); //x, y, w, h
  ctx.fillStyle = "red";
  ctx.fill();
}
//drawRect();

//Vẽ chữ
function drawString() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d"); //Khai báo vẽ 2d
  ctx.font = "30px Arial";
  ctx.fillStyle = "purple"; //Khai báo màu trước chữ
  ctx.fillText("Hello World", 100, 200);
}
//drawString();

//Hình ảnh

//Di chuyển vật thể (toạ độ x, y di chuyển)
let xCricle = 100;
let yCricle = 100;
let radiusCricle = 20;
//tạo biến cờ chỉ định hướng đi
let direction = "up";
//dời 2 biến ra ngoài thành biến toàn cục
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d"); //Khai báo vẽ 2d
function drawCricle(xCricle, yCricle, radiusCricle) {
  ctx.beginPath(); //Bắt dầu vẽ theo kiẻu đen trắng
  ctx.arc(xCricle, yCricle, radiusCricle, 0, 2 * Math.PI); //Vẽ hình tròn (x,y,)
  ctx.fillStyle = "green";
  ctx.fill();
}
drawCricle(xCricle, yCricle, radiusCricle);

function autoMoveCricle() {
  ctx.clearRect(0, 0, 400, 400); //Xoá vị trí trước đó
  drawRect(xRect, yRect, wRect, hRect); // ghi lại giá trị hình chữ nhật
  //Va chạm
  if (yCricle + radiusCricle >= 400) {
    direction = "up";
  } else if (yCricle == radiusCricle) {
    direction = "down";
  }
  //kiểm tra hướng nào và di chuyển
  switch (direction) {
    case "up":
      yCricle -= 5;
      break;
    case "down":
      yCricle += 5;
      break;
  }
  drawCricle(xCricle, yCricle, radiusCricle);
}
setInterval(autoMoveCricle, 50); //di chuyển tự động, mili giây

//hình chữ nhật
let xRect = 150;
let yRect = 300;
let wRect = 100;
let hRect = 20;
function drawRect(xRect, yRect, wRect, hRect) {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d"); //Khai báo vẽ 2d
  ctx.beginPath(); //Bắt dầu vẽ theo kiẻu đen trắng
  ctx.rect(xRect, yRect, wRect, hRect); //x, y, w, h
  ctx.fillStyle = "blue";
  ctx.fill();
}
drawRect(xRect, yRect, wRect, hRect);

//Hình chữ nhạt di chuyển (gán nút di chuyển)
window.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 37:
      xRect -= 5;
      break;
    case 39:
      xRect += 5;
      break;
  }
});
