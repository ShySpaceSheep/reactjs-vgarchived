package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.ForumComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForumCommentRepository extends JpaRepository<ForumComment, Integer> {
}
