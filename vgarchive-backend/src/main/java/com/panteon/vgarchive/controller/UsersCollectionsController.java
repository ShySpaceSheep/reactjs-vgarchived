package com.panteon.vgarchive.controller;

import com.panteon.vgarchive.model.UsersCollections;
import com.panteon.vgarchive.service.UsersCollectionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/collection")
public class UsersCollectionsController {
    @Autowired
    private UsersCollectionsService usersCollectionsService;

    @PostMapping("/addCollection")
    public UsersCollections addCollection(@RequestBody UsersCollections usersCollections){
        return usersCollectionsService.addCollection(usersCollections);
    }

    //@GetMapping("/{id}/delete")

    @GetMapping("/{id}")
    public UsersCollections getCollection(@PathVariable int id) {
        return usersCollectionsService.getCollection(id);
    }
}
