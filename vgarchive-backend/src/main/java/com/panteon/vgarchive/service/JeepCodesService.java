package com.panteon.vgarchive.service;

import com.panteon.vgarchive.model.JeepCodes;
import com.panteon.vgarchive.repository.JeepCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JeepCodesService {
    @Autowired
    JeepCodesRepository jeepCodesRepository;

    public JeepCodes addJeepCode(JeepCodes j) {
        return jeepCodesRepository.save(j);
    }

    public List<JeepCodes> addJeepCodesBulk(List<JeepCodes> jeepCodesList){
        return jeepCodesRepository.saveAll(jeepCodesList);
    }

    public List<JeepCodes> getJeepCode(List<String> id) {
        return jeepCodesRepository.findAllById(id);
    }
}
