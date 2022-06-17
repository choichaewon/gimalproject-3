let rad = 300; // 도형의 너비
let xpos, ypos; // 도형의 시작점

let xspeed = 2.2; // 도형의 속도
let yspeed = 2.2; // 도형의 속도

let xdirection = 1; // 왼쪽 또는 오른쪽
let ydirection = 1; // 위 또는 아래
let img;
let bg;

function setup() {
  createCanvas(600, 400);
  noStroke();
  frameRate(50);
  // ellipseMode(RADIUS);
  // 도형의 시작점 설정
  xpos =0 ;
  ypos = 0 ;
  img = loadImage("eye.png");
  bg = loadImage('265CC15F-A9E5-4DA8-BA7E-A73EACFEF2C8.jpeg');
}

function draw() {
  background(bg);

  // 도형의 위치 업데이트
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // 도형이 화면 경계를 넘어가는 지 테스트
  // 넘어갈 경우, -1을 곱하여 방향을 반대로 돌린다.
  if (xpos > width- 20|| xpos <0) {
    xdirection *= -1;
  }
  if (ypos > height -20|| ypos < 0) {
    ydirection *= -1;
  }

  // 도형 그리기
image(img, xpos, ypos, rad, rad);
}


