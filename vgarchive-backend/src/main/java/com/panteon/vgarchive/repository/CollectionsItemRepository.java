package com.panteon.vgarchive.repository;

import com.panteon.vgarchive.model.CollectionsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionsItemRepository extends JpaRepository<CollectionsItem, Integer> {
}
