package com.panteon.vgarchive.service;

import com.panteon.vgarchive.model.Users;
import com.panteon.vgarchive.repository.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    @Autowired
    UsersRepository usersRepository;

    public Users addUser(Users u) {
        return usersRepository.save(u);
    }

    public void delUser (int id) {
        usersRepository.deleteById(id);
    }

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public void updateAvatar(int id, String updateValue) {
        Users user = usersRepository.findById(id).orElse(null);
        if (user == null) {
            throw new RuntimeException("null at 31");
        }
        user.setAvatar_url(updateValue);
        usersRepository.save(user);
    }

    public void updateBio(int id, String updateValue) {
        Users user = usersRepository.findById(id).orElse(null);
        if (user == null) {
            throw new RuntimeException("null");
        }
        user.setProfile_bio(updateValue);
        usersRepository.save(user);
    }

}
