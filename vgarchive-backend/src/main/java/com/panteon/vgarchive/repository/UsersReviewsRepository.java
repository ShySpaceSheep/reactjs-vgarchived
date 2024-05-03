package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.UsersReviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersReviewsRepository extends JpaRepository<UsersReviews,Integer> {
}
