package com.puffy.OttDaDamSpring.controller;

import com.puffy.OttDaDamSpring.domain.OpenApiManager;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;

@RestController
@RequiredArgsConstructor
public class OpenApiController {
    private OpenApiManager openApiManager;

    @GetMapping("open-api")
    public ResponseEntity<?> fetch() throws UnsupportedEncodingException, URISyntaxException {
        for(){

        }
        return (ResponseEntity<?>) openApiManager.fetch().getBody();
    }
}
