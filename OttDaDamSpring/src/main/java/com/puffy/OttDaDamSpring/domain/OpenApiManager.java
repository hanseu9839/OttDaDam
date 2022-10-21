package com.puffy.OttDaDamSpring.domain;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLDecoder;
import java.util.Map;

@Component
public class OpenApiManager {
    private final String BASE_URL = "https://api.odcloud.kr";
    private final String apiUri = "/api/15076398/v1/uddi:6dec2a8d-6404-4318-8767-85419b3c45a0?";
    private final String page = "page=1";
    private final String perPage = "&perPage=10";
    private final String serviceKey = "&serviceKey=Z%2BQodRDulSnhc%2FQPPMSjFBJmRBoB2lmzYIoADFND8d%2Fv7M%2BrFCLklDNG2HS7BZjwCGdMARLWssYcIL5pzX%2FgSw%3D%3D";



    private String makeUrl() throws UnsupportedEncodingException {
        return BASE_URL +
                apiUri +
                page +
                perPage +
                serviceKey ;
    }

    public ResponseEntity<?> fetch() throws UnsupportedEncodingException, URISyntaxException {
        System.out.println(makeUrl());
        URI uri = new URI(makeUrl());
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<?> entity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<Map> resultMap = restTemplate.exchange(uri, HttpMethod.GET, entity, Map.class);
        System.out.println(resultMap.getBody());
        return resultMap;

    }
}
