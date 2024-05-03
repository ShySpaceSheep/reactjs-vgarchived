package com.panteon.vgarchive.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private Date date_created;
    private String profile_bio;
    @ElementCollection
    @Cascade(CascadeType.ALL)
    private List<String> socials;
    private String avatar_url;

    @PrePersist
    protected void onCreate() {
        date_created = new Date();
    }

    public Users() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public String getProfile_bio() {
        return profile_bio;
    }

    public void setProfile_bio(String profile_bio) {
        this.profile_bio = profile_bio;
    }

    public List<String> getSocials() {
        return socials;
    }

    public void setSocials(List<String> socials) {
        this.socials = socials;
    }

    public String getAvatar_url() {
        return avatar_url;
    }

    public void setAvatar_url(String avatar_url) {
        this.avatar_url = avatar_url;
    }
}
