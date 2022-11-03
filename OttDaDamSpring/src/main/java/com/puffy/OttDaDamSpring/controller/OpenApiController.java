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
import java.util.ArrayList;
import java.util.stream.IntStream;

@RestController
@AllArgsConstructor
public class OpenApiController {
    private static OpenApiManager openApiManager;


    @GetMapping(value = "open-api")
    public ArrayList<String> guroFetch() throws IOException, URISyntaxException, ParseException {
        JSONParser parser = new JSONParser();
        openApiManager = new OpenApiManager();
        int totalCount= apiTotalCount(openApiManager,parser);
        JSONObject objects =getAllApiData("15068871","672059d4-1830-44af-97dd-cf0954b2ee86",Integer.toString(totalCount));
        JSONArray guroObject = (JSONArray) objects.get("data");
        ArrayList<String> guroPositions = new ArrayList<>();
        for(int i = 0; i < guroObject.size();i++){
            JSONObject oneObject = (JSONObject)guroObject.get(i);
            String position = (String) oneObject.get("위치");
            guroPositions.add(position);
        }

        return guroPositions;
    }

    static JSONObject getAllApiData(String apiID,String uddi, String totalCounts) throws UnsupportedEncodingException, URISyntaxException, ParseException {
        JSONParser parser = new JSONParser();
        openApiManager = new OpenApiManager(apiID,uddi,totalCounts);
        System.out.println(openApiManager);
        JSONObject obj =(JSONObject) parser.parse(String.valueOf((JSONObject)openApiManager.fetch().getBody()));
        return obj;
    }
    static int apiTotalCount(OpenApiManager openApiManager,JSONParser parser) throws UnsupportedEncodingException, URISyntaxException, ParseException {
        JSONObject brObject = (JSONObject) parser.parse(String.valueOf((JSONObject) openApiManager.fetch().getBody()));
        int totalCount = Integer.parseInt(brObject.get("totalCount").toString());
        System.out.println(totalCount);
        return totalCount;
    }
}
