package com.panteon.vgarchive.controller;

import com.panteon.vgarchive.model.UsersReviews;
import com.panteon.vgarchive.repository.UsersReviewsRepository;
import com.panteon.vgarchive.service.UsersReviewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/review")
public class ReviewsController {
    @Autowired
    UsersReviewsService usersReviewsService;

    @PostMapping("/addReview")
    public UsersReviews addReview(@RequestBody UsersReviews usersReview) {
        return usersReviewsService.addUserReview(usersReview);
    }

    @GetMapping("/{id}")
    public UsersReviews getReviewById(@PathVariable int id) {
        return usersReviewsService.getReviewById(id);
    }

    @GetMapping("/{id}/delete")
    public String delReview(@PathVariable int id) {
        usersReviewsService.delReview(id);
        return "Deleted user: " + id;
    }
}
