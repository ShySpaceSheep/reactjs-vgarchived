package com.panteon.vgarchive.service;

import com.panteon.vgarchive.model.UsersCollections;
import com.panteon.vgarchive.repository.UsersCollectionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersCollectionsService {
    @Autowired
    private UsersCollectionsRepository usersCollectionsRepository;

    public UsersCollections addCollection(UsersCollections collection) {
        usersCollectionsRepository.save(collection);
        return collection;
    }

    public UsersCollections getCollection(int id) {
        return usersCollectionsRepository.findById(id).orElse(null);
    }
}
