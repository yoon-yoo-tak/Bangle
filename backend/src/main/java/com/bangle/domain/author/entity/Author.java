package com.bangle.domain.author.entity;

import com.bangle.domain.member.entity.Member;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Author {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JoinColumn(name = "member_id")
	@OneToOne(fetch = FetchType.LAZY)
	private Member member;

	private Long income;

	@Column(length = 1024)
	private String introduction;

	private Long follower;

	public static Author createAuthor(Member member) {
		return Author.builder()
			.member(member)
			.follower(0L)
			.income(0L)
			.introduction("")
			.build();
	}

	public String getNickname() {
		return member.getNickname();
	}

	public void updateIntroduction(String introduce) {
		this.introduction = introduce;
	}
}
