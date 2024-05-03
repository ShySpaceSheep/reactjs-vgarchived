package com.panteon.vgarchive.controller;

import com.panteon.vgarchive.model.Users;
import com.panteon.vgarchive.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    private UsersService usersService;

    @PostMapping("/add")
    public String add(@RequestBody Users user) {
        usersService.addUser(user);
        return "New user added";
    }

    @GetMapping("/getAll")
    public List<Users> getAllUsers() {
        return usersService.getAllUsers();
    }

    @GetMapping("/{id}/delete")
    public String delUser(@PathVariable int id) {
        usersService.delUser(id);
        return id + " deleted";
    }

    @PostMapping("/{id}/updateAvatar")
    public String updateAvatar(@PathVariable int id, @RequestParam String updateValue) {
        usersService.updateAvatar(id, updateValue);
        return "Updated the avatar of user: " + id;
    }

    @PostMapping("/{id}/updateBio")
    public String updateBio(@PathVariable int id, @RequestParam String updateValue) {
        usersService.updateBio(id, updateValue);
        return "Updated the bio of user: " + id;
    }
}
