package com.panteon.vgarchive.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "forum_comment")
public class ForumComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private ForumThread forumThread;
    String message_content;
    @ManyToOne
    private Users poster;
    private int upvotes;

    public ForumComment() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ForumThread getForumThread() {
        return forumThread;
    }

    public void setForumThread(ForumThread forumThread) {
        this.forumThread = forumThread;
    }

    public String getMessage_content() {
        return message_content;
    }

    public void setMessage_content(String message_content) {
        this.message_content = message_content;
    }

    public Users getPoster() {
        return poster;
    }

    public void setPoster(Users poster) {
        this.poster = poster;
    }

    public int getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(int upvotes) {
        this.upvotes = upvotes;
    }
}
