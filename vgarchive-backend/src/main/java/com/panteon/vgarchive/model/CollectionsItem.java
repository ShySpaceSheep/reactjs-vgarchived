package com.panteon.vgarchive.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "collections_item")
public class CollectionsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    @ManyToOne
    private UsersCollections author;
    private int views;

    public CollectionsItem() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UsersCollections getAuthor() {
        return author;
    }

    public void setAuthor(UsersCollections author) {
        this.author = author;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }
}

