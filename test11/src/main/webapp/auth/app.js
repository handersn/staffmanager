$(function(){
  $('.footer').load('../common/footer.html');
  
  $('#btnLogin').click(function(event){
    $.post('../json/auth/login.do'
        , {
          uid : $('#uid').val(),
          pwd : $('#pwd').val(),
          save : $('#save').is(':checked')
        }
        , function(data){
          if (data.status == 'success') {
            location.href = '../product/app.html';
          } else {
            alert('로그인 아이디 또는 암호가 맞지 않습니다.');
            $('#pwd').val('');
          }
        }
        , 'json');
  });
  
  $('#btnSignup-success').click(function(event){
	    $.post('../json/auth/signup.do'
	        , {
	          userId : $('#id').val(),
	          password : $('#pw').val(),
	          userName : $('#uname').val(),
	          email : $('#email').val(),
	          tel : $('#tel').val()
	        }
	        , function(data){
	          if (data.status == 'success') {
	        	  alert("회원가입 성공!! 로그인후 이용하세요.");
	           // location.href = '../auth/app.html';
	          } else {
	            alert('회원가입 실패');
	          }
	        }
	        , 'json');
	  });
  
  
});



























