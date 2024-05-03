package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.JeepCodes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JeepCodesRepository extends JpaRepository<JeepCodes, String> {

}
