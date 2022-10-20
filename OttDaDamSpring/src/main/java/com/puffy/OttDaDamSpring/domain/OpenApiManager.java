package com.puffy.OttDaDamSpring.domain;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.UnsupportedEncodingException;

import java.util.Map;

@Component
public class OpenApiManager {
    private final String BASE_URL = "https://api.odcloud.kr";
    private final String apiUri = "/api/15068871/v1/uddi:672059d4-1830-44af-97dd-cf0954b2ee86";
    private final String page = "page=1";
    private final String perPage = "&perPage=10";
    private final String serviceKey = "&serviceKey=Z+QodRDulSnhc/QPPMSjFBJmRBoB2lmzYIoADFND8d/v7M+rFCLklDNG2HS7BZjwCGdMARLWssYcIL5pzX/gSw==";



    private String makeUrl() throws UnsupportedEncodingException {
        return BASE_URL +
                apiUri +
                serviceKey +
                page +
                perPage +
                serviceKey ;
    }

    public ResponseEntity<?> fetch() throws UnsupportedEncodingException {
        System.out.println(makeUrl());
        RestTemplate restTemplate = new RestTemplate();
        HttpEntity<?> entity = new HttpEntity<>(new HttpHeaders());
        ResponseEntity<Map> resultMap = restTemplate.exchange(makeUrl(), HttpMethod.GET, entity, Map.class);
        System.out.println(resultMap.getBody());
        return resultMap;

    }
}
