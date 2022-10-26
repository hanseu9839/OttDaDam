import React, { useState, useEffect } from "react";
import axios from "axios";

var config = {
  method: "get",
  url: "https://api.odcloud.kr/api/15104622/v1/uddi:94ddbdca-b180-4156-b4f0-8048116792f9?page=1&perPage=171&serviceKey=Z%2BQodRDulSnhc%2FQPPMSjFBJmRBoB2lmzYIoADFND8d%2Fv7M%2BrFCLklDNG2HS7BZjwCGdMARLWssYcIL5pzX%2FgSw%3D%3D",
  headers: {
    "X-Api-Key": "<API Key>",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
