// add :점수표기
// 공룡달리는 애니메이션 : 공룡이미지2개 준비해서 번갈아끼우기
// 배경다가오는거
// 장애물 등장 시간 랜덤 

// 네모 그리기 : canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//네모 대신 이미지 넣기
var img2 = new Image();
img2.src = './img/dinosaur.png';

// 등장 캐릭터의 정보를 object자료에 정리해두면 편리
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img2, this.x, this.y)
    }
}

//네모 대신 이미지 넣기
var img1 = new Image();
img1.src = './img/cactus.png';

// 장애물 
// 장애물들은 width, height 각각다를 -> 비슷한 object가 많이 필요할듯

// Cactus 선인장 : 장애물 등장
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        //네모는 hitbox
        // ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y)
    }
}

var cactus = new Cactus();
cactus.draw()

var timer = 0;
var cactus여러개 = []; //장애물들
var 점프timer = 0; // 점프시 프레임마다 +1 됨
var animation; //애니메이션 중단

// 1초에 60번 실행 : requestAnimationFrame
function 프레임마다실행할거(){
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;

    //캔버스 클리어
    ctx.clearRect(0,0, canvas.width, canvas.height);
    
    //장애물들 120프레임마다 그려줌 : array에 보관
    // 끝까지 이동한 장애물들은 제거
    if (timer % 120 === 0) {
        //장애물 여러개 관리하기
        var cactus = new Cactus();
        cactus여러개.push(cactus);
     }

     // 장애물들 다 꺼내서 draw 
     cactus여러개.forEach((a, i, o)=>{
    // 1초에 60px씩 이동 
      
    // x좌표가 0미만이면 제거 
    if ( a.x < 0){
        o.splice(i, 1)
     }
       a.x--;

    충돌하냐(dino, a); //출동체크 : 주인공 vs 모든장애물

      a.draw();
     })
    // dino.x++;
// 스페이스바 누르면 점프 : y -- : 1초에 60번정도 1을 빼줌:점프, 숫자는 속도 
// 100프레임 지나면 dino.y-- 점프 그만해주셈
    if(점프중 == true){
        dino.y--;
        점프timer++;
    }
    //점프중이 아니면 항상 dino.y++ 
    // 최저 y높이를 정해두고 그거 이상으로는 dino.y++금지
    if (점프중 == false){
        if(dino.y < 200){
        dino.y++;
     }
    }

    if (점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }

    dino.draw()
}



프레임마다실행할거 ();

// 3 충돌체크하기

function 충돌하냐(dino, cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if (x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation) //게임중단
    }
}


var 점프중 = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
         점프중 = true;
    }
})