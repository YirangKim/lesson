// 버튼0누르면 
// - 모든버튼에 붙은 orange 클래스명 제거
// - 버튼0 클릭하면 오렌지 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0 클릭하면 show 클래스명 추가 


// Todo : var 버튼 변수 적용
// var 버튼 = $('.tab-button');

// Mission : dataset 문법 - 간단해지는
// html태그에 몰래 정보 숨기기 가능 : data-자료이름="값"
// 숨겼던 자료출력은 셀렉터.dataset.자료이름

$('.list').click(function(e){
    // 탭열기(지금누른버튼:e.target 숨겨져있는 data-id)
    // console.log(e.target.dataset.id);
    탭열기(e.target.dataset.id)
    // Todo : 탭열기(0) 숫자로 변환해서 쓰면 더 정확
  })


// Mission :  탭 다른 방식 만들기
// 이벤트리스터 1개만 쓰기 
// 이벤트버블링 알고있으면 이벤스리스터 많이 필요없음 : e.target

  // $('.list').click(function(e){

  //     // 지금 누른게 버튼0 이면 탭열기(0)
  //     if (e.target == document.querySelectorAll('.tab-button')[0] ){
  //       탭열기(0)
  //     }

  //     // 지금 누른게 버튼0 이면 탭열기(1)
  //     if (e.target == document.querySelectorAll('.tab-button')[1] ){
  //       탭열기(1)
  //     }

  //     // 지금 누른게 버튼0 이면 탭열기(2)
  //     if (e.target == document.querySelectorAll('.tab-button')[2] ){
  //       탭열기(2)
  //     }
  //   })
  

// Mission : 함수로 축약하기 
// for (let i = 0; i < $('.tab-button').length; i++){

//     $('.tab-button').eq(i).on('click', function(){
//       탭열기(i)
//     })
//   };

// 축약할 코드에 변수가 있으면 변수를 파라미터(구멍)로 바꿔야됨
  function 탭열기(구멍){
      $('.tab-button').removeClass('orange');
      $('.tab-button').eq(구멍).addClass('orange');
      $('.tab-content').removeClass('show');
      $('.tab-content').eq(구멍).addClass('show');
    }


// Mission : for 반복문 : 반복실행
// for (var i = 0; i < 3; i++)
// 복붙 될때 마다 0,1,2 로 바뀌는 변수 : i

// Mission : 확장성 있는 코드로 바꾸기 
// 변수범위 : var, let 차이
// 지금 html에 있는 탭 버튼의 갯수 : i < $('.tab-button').length;

// for (let i = 0; i < $('.tab-button').length; i++) {
//     $('.tab-button').eq(i).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(i).addClass('show');
//    });
// }

// // Mission 좋은 관습 : 셀렉터 변수에 넣어서 쓰기

// var 버튼  = $('.tab-button');
// var 콘텐츠  = $('.tab-content')

// // 첫번째 버튼 찾아줘 eq(0)
// // removeClass 클래스 제거
// // addClass 클래스 추가 
// 버튼.eq(0).on('click', function(){

// //1 모든버튼에 붙은 orange 클래스명 제거
// 버튼.removeClass('orange');

// //2 버튼0 클릭하면 오렌지 클래스명 추가
// 버튼.eq(0).addClass('orange');

// //3 모든 div에 붙은 show 클래스명 제거
// 콘텐츠.removeClass('show');


// //4 div[0] 클릭하면 show 클래스명 추가
// 콘텐츠.eq(0).addClass('show');

// })


