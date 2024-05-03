package com.panteon.vgarchive.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "forum_thread")
public class ForumThread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String thread_name;
    @ManyToOne
    private Users original_poster;
    private int upvotes;
    private int views;
    @ElementCollection
    private List<String> tags;
    private boolean is_locked;

    public ForumThread() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getThread_name() {
        return thread_name;
    }

    public void setThread_name(String thread_name) {
        this.thread_name = thread_name;
    }

    public Users getOriginal_poster() {
        return original_poster;
    }

    public void setOriginal_poster(Users original_poster) {
        this.original_poster = original_poster;
    }

    public int getUpvotes() {
        return upvotes;
    }

    public void setUpvotes(int upvotes) {
        this.upvotes = upvotes;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public boolean isIs_locked() {
        return is_locked;
    }

    public void setIs_locked(boolean is_locked) {
        this.is_locked = is_locked;
    }
}
