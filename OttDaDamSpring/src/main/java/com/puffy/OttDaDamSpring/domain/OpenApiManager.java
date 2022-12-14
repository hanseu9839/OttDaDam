package com.puffy.OttDaDamSpring.domain;

import org.json.simple.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.Map;

@Component
public class OpenApiManager {
    private final String BASE_URL = "https://api.odcloud.kr";
    private String apiID = "15068871";
    private String uddi =  "672059d4-1830-44af-97dd-cf0954b2ee86";
    private final String page = "page=1&";
    private String perPage = "10";
    private final String serviceKey = "&serviceKey=Z%2BQodRDulSnhc%2FQPPMSjFBJmRBoB2lmzYIoADFND8d%2Fv7M%2BrFCLklDNG2HS7BZjwCGdMARLWssYcIL5pzX%2FgSw%3D%3D";

    public OpenApiManager(String apiID, String uddi, String perPage) {
        this.apiID = apiID;
        this.uddi = uddi;
        this.perPage = perPage;
    }
    public OpenApiManager(){

    };

    private String makeUrl() throws UnsupportedEncodingException {
        return BASE_URL +
                "/api/" + apiID +
                "/v1/uddi:" +uddi+"?"+ page +
                "perPage=" + perPage +
                serviceKey ;
    }

    public ResponseEntity<?> fetch() throws UnsupportedEncodingException, URISyntaxException {
        System.out.println(makeUrl());
        URI uri = new URI(makeUrl());
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<?> entity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<?> resultMap = restTemplate.exchange(uri, HttpMethod.GET, entity, JSONObject.class);
        System.out.println(resultMap.getBody());
        return resultMap;

    }
}
