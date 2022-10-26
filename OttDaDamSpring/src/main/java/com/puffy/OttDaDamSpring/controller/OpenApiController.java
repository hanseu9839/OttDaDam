package com.puffy.OttDaDamSpring.controller;

import com.puffy.OttDaDamSpring.domain.OpenApiManager;
import lombok.AllArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.Reader;
import java.net.URISyntaxException;

@RestController
@AllArgsConstructor
public class OpenApiController {
    private OpenApiManager openApiManager;

    @GetMapping(value = "open-api")
    public JSONObject fetch() throws IOException, URISyntaxException, ParseException {
        JSONParser parser = new JSONParser();
        JSONObject object = (JSONObject) parser.parse(String.valueOf((JSONObject) openApiManager.fetch().getBody()));
        

        return object;
    }
}
