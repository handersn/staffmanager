/**
 * 회원정보 수정 .
 */

var member;

$(function(){
  loadUserList();
 // loadLocalList();
  
  
});//ready()

//회원정보 서치
function loadUserList() {
  
  $.getJSON('../json/auth/user_info.do',
      
    function(data){
     console.log(data.member);
    
    
    $('#uid').val(data.member.userId); //아이디 출력
    $('#pwd').val(data.member.password); //비번 출력
    $('#name').val(data.member.userName); //이름 출력
    $('#email').val(data.member.email); //이메일 출력
    $('#tel').val(data.member.tel); //전화번호 출력
      
    });
}


   
   //패스워드 가능여부
   $('#passwd').keyup(function(){
     if (re_pw.test($('#passwd').val()) != true){
       $('.passwd1').html("NO!"); //해당 내용을 보여준다
      $('#passwd').focus();      
     }else{
       $('.passwd1').html("Yes!");       
     }
   });
   
   //패스워드 확인여부
   $('#passwdChk').keyup(function(){
     if( $('#passwd').val() != $('#passwdChk').val() ){
       $('.passwd2').html("NO!"); //해당 내용을 보여준다
      $('#passwdChk').focus();       
     } else{
       $('.passwd2').html("Yes!");       
     }
   });
   
   //이름 가능 여부
   $('#name').keyup(function(){
     if(re_name.test($('#name').val() ) != true ){
       $('.name1').html("NO!"); //해당 내용을 보여준다
      $('#name').focus();      
     }else{
       $('.name1').html("Yes!");             
     }
   });
   
   //성별 체크   
   $('input[name=sex]:radio').click(function(event){
     //console.log($(this).val());
     if($(this).val() == "1"){
       $('.row_title').html("남자");
     } else {
       $('.row_title').html("여자");
     }
   });
   
   //주소 검색
   $('#selectLocal').focusout(function(){
     var selectLocal = ($('#selectLocal').val());
     console.log(selectLocal);
     
   });
   
   
   
   
   
   
   
   //수정완료 버튼
   $('#btnEdit').click(function(){
     
     $.post('../json/auth/update.do' //  URL 
         , {  //서버에 보낼 데이터를 객체에 담아 넘긴다 
           userId : $('#uid').val(),     //이름
           password : $('#pwd').val(),  //비밀번호
           userName : $('#name').val(),   //이름
           email : $('#email').val(), //이메일 
           tel : $('#tel').val() //전화번호
         } 
         , function(result){ // 서버로부터 응답을 받았을 때 호출될 메서드
           if (result.status == "success") {
             alert("성공!! ");
             location.href="/test11/product/app.html";
             
           } else {
             alert("등록 실패!");
             location.href="/test11/product/mypage_modify.html";
           }
         } 
         , 'json' // 서버가 보낸 데이터를 JSON 형식으로 처리
         )
       //서버 요청이 실패했을 때 호출될 함수 등록   
      .fail(function(jqXHR, textStatus, errorThrown){ 
        alert(textStatus + ":" + errorThrown);
      });
     
   }); 
   
   $('#btnEditCancel').click(function(){
	   location.href="/test11/product/app.html";
	   
   });
   
   
   
   function validateForm() {
     if (re_mail.test($('#email').val()) != true) { // 이메일 검사
      alert('email입력 오류.');
      $('#email').focus();
      return false;
    } else if( re_pw.test($('#passwd').val()) != true) { // 비밀번호 검사
      alert('비밀번호 입력 오류.');
      $('#passwd').focus();
      return false;
    } else if( $('#passwd').val() != $('#passwdChk').val() ) { // 비밀번호 확인
      alert('비밀번호가 일치하지 않습니다.');
      $('#passwdChk').focus();
      return false;
    } else if(re_name.test($('#name').val()) != true) { // 이름 검사
      alert('이름을 입력하세요.');
      $('#name').focus();
      return false;
    }  else if(re_tel.test($('#phoneNo').val() ) != true){  //폰번호
      alert('폰번호 입력 오류.');
      $('#phoneNo').focus();
      return false;       
    }  /*else if($('#selectLocal').val() != ''){  //지역입력
      alert('지역 입력 오류.');
      $('#selectLocal').focus();
      return false;       
    }     */  
    
    return true;
   }
     
     
       
  