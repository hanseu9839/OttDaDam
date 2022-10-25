package com.puffy.OttDaDamSpring.service;


import com.puffy.OttDaDamSpring.entity.odd_data;
import com.puffy.OttDaDamSpring.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@AllArgsConstructor
@Service
public class TestService {

    private UserRepository userRepository;

    public List<odd_data> getUserList(){
        return userRepository.findAll();
    }

    public String getUser(Long userId){
        return "{\n" +
                "\t\t\"id\": 1,\n" +
                "\t\t\"name\": \"김길동\",\n" +
                "\t\t\"age\": 16,\n" +
                "\t\t\"학교\": \"길동중\"\n" +
                "\t}";
    }
}
