package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.ForumThread;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumThreadRepository extends JpaRepository<ForumThread, Integer> {
}
