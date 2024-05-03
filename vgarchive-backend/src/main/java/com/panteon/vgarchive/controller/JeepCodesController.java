package com.panteon.vgarchive.controller;

import com.panteon.vgarchive.model.JeepCodes;
import com.panteon.vgarchive.service.JeepCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/jeepcodes")
public class JeepCodesController {
    @Autowired
    private JeepCodesService jeepCodesService;

    @PostMapping("/addbulk")
    public String add(@RequestBody List<JeepCodes> jeepCodesList){
        jeepCodesService.addJeepCodesBulk(jeepCodesList);
        return "Added list";
    }

    @PostMapping("/add")
    public String add(@RequestBody JeepCodes jeepCode){
        jeepCodesService.addJeepCode(jeepCode);
        return "added: " + jeepCode.toString();
    }

    @GetMapping("/{id}")
    public List<JeepCodes> get(@PathVariable String id){
        List<String> idList = Arrays.asList(id.split(",\\s*"));
        return jeepCodesService.getJeepCode(idList);
    }
}
