package java63.web03.service;

import java.util.HashMap;

import java63.web03.dao.MemberDao;
import java63.web03.domain.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
  @Autowired MemberDao memberDao;
  
  public Member validate(String userId, String password) {
    HashMap<String,String> params = new HashMap<>();
    params.put("userId", userId);
    params.put("password", password);
    return memberDao.existUser(params);
  }

public void add(Member member) {
	memberDao.insert(member);
	
	
}

public Member getUserInfo(String uid) {
	Member member = memberDao.userInfo(uid);
	System.out.println("MEMBERSERVICE" + member);
	return member;
}

public void update(Member member) {
	memberDao.update(member);
	
}

}














