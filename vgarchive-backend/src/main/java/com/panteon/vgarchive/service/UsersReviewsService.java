package com.panteon.vgarchive.service;

import com.panteon.vgarchive.model.UsersReviews;
import com.panteon.vgarchive.repository.UsersReviewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersReviewsService {
    @Autowired
    private UsersReviewsRepository usersReviewsRepository;

    public UsersReviews addUserReview(UsersReviews userReview) {
        usersReviewsRepository.save(userReview);
        return userReview;
    }

    public UsersReviews getReviewById(int id) {
        UsersReviews userReview = usersReviewsRepository.findById(id).orElse(null);
        if (userReview == null) {
            throw new RuntimeException("error");
        }
        return userReview;
    }

    public void delReview(int id) {
        usersReviewsRepository.deleteById(id);
    }
}
