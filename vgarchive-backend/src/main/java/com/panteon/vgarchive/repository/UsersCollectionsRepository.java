package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.UsersCollections;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersCollectionsRepository extends JpaRepository<UsersCollections, Integer> {

}
