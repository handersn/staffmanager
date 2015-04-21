package java63.web03.dao;

import java.util.Map;
import java63.web03.domain.Member;

public interface MemberDao {
  Member existUser(Map<String,String> params);

  void insert(Member member); // 회원등록
  
  Member userInfo(String uid); // 회원정보 뽑아오기  

  void update(Member member);  //회원정보 수정 
}
