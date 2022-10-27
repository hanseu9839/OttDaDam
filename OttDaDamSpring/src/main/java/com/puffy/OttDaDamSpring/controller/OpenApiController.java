package com.puffy.OttDaDamSpring.controller;

import com.puffy.OttDaDamSpring.domain.OpenApiManager;
import lombok.AllArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;

@RestController
@AllArgsConstructor
public class OpenApiController {
    private OpenApiManager openApiManager;


    @GetMapping(value = "open-api")
    public JSONObject fetch() throws IOException, URISyntaxException, ParseException {
        JSONParser parser = new JSONParser();
        openApiManager = new OpenApiManager();
        int totalCount= apiTotalCount(openApiManager,parser);
        openApiManager = new OpenApiManager("15068871","672059d4-1830-44af-97dd-cf0954b2ee86",Integer.toString(totalCount));
        System.out.println(openApiManager);
        JSONObject object = (JSONObject) parser.parse(String.valueOf((JSONObject)openApiManager.fetch().getBody()));
        return object;
    }

    static int apiTotalCount(OpenApiManager openApiManager,JSONParser parser) throws UnsupportedEncodingException, URISyntaxException, ParseException {
        JSONObject brObject = (JSONObject) parser.parse(String.valueOf((JSONObject) openApiManager.fetch().getBody()));
        int totalCount = Integer.parseInt(brObject.get("totalCount").toString());
        System.out.println(totalCount);
        return totalCount;
    }
}
