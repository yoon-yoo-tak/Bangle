package com.bangle.domain.book.dto;

public record BookResponse(
	long id,
	String title,
	String genre,
	int purchasePrice,
	int rentalPrice,
	float averageScore,
	String cover
) {
	public BookResponse(long id,String title, String cover) {
		this(id, title, "", 0, 0, 0, cover);
	}
}
