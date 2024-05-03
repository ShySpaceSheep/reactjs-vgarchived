package com.panteon.vgarchive.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "users_reviews")
public class UsersReviews {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String content;
    private Date date_created;
    private boolean recommended;
    @ElementCollection
    private List<Boolean> agree_disagree_ratio;
    private int game_id;
    @ManyToOne
    private Users author;

    public UsersReviews() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public boolean isRecommended() {
        return recommended;
    }

    public void setRecommended(boolean recommended) {
        this.recommended = recommended;
    }

    public List<Boolean> getAgree_disagree_ratio() {
        return agree_disagree_ratio;
    }

    public void setAgree_disagree_ratio(List<Boolean> agree_disagree_ratio) {
        this.agree_disagree_ratio = agree_disagree_ratio;
    }

    public int getGame_id() {
        return game_id;
    }

    public void setGame_id(int game_id) {
        this.game_id = game_id;
    }

    public Users getAuthor() {
        return author;
    }

    public void setAuthor(Users author) {
        this.author = author;
    }
}
