import React from "react";
import styled from "styled-components";

export default function Blog() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      id="master-artboard"
      viewBox="0 0 20 20"
      width="20px"
      height="20px"
      version="1.1"
      style={{ background: "transparent" }}>
      <rect id="ee-background" x="0" y="0" width="20" height="20" />

      <metadata id="CorelCorpID_0Corel-Layer" />
      <g transform="matrix(0.8829824328422546, 0, 0, 0.8829824328422547, 6.239836600445244, 0.8333337127513687)">
        <Path d="M2.40404 5.01207C0.0484977 7.44921 0.562521 11.4937 3.26076 13.2854C3.34967 13.3445 3.46795 13.3328 3.54431 13.2582C4.11236 12.7031 4.59291 12.1655 5.01369 11.4817C5.07806 11.3771 5.03802 11.2414 4.93002 11.1829C4.51845 10.9599 4.10892 10.5418 3.87838 10.1002L3.8781 10.1003C3.60193 9.55042 3.50791 8.93398 3.65412 8.29734C3.65428 8.29738 3.65443 8.29742 3.65459 8.29742C3.82283 7.48234 4.69787 6.72414 5.36619 6.02293C5.36478 6.02246 5.36341 6.02195 5.36201 6.02148L7.86603 3.46578C8.86392 2.44731 10.5053 2.43891 11.5136 3.44715C12.532 4.445 12.5488 6.09468 11.551 7.11312L10.0343 8.67281C9.96407 8.74499 9.9413 8.85031 9.97415 8.9455C10.3234 9.9582 10.4093 11.3861 10.1752 12.465C10.1687 12.4951 10.2059 12.5149 10.2276 12.4928L13.4556 9.19816C15.5177 7.09347 15.5002 3.66676 13.4167 1.58324C11.2904 -0.543044 7.82892 -0.525348 5.72447 1.6225L2.41697 4.99824C2.4126 5.00285 2.40846 5.00754 2.40404 5.01207Z" />
      </g>
      <g transform="matrix(-0.8829824328422546, 0, 0, -0.8829824328422547, 14.86756261842632, 18.82117526825999)">
        <Path d="M2.40404 5.01207C0.0484977 7.44921 0.562521 11.4937 3.26076 13.2854C3.34967 13.3445 3.46795 13.3328 3.54431 13.2582C4.11236 12.7031 4.59291 12.1655 5.01369 11.4817C5.07806 11.3771 5.03802 11.2414 4.93002 11.1829C4.51845 10.9599 4.10892 10.5418 3.87838 10.1002L3.8781 10.1003C3.60193 9.55042 3.50791 8.93398 3.65412 8.29734C3.65428 8.29738 3.65443 8.29742 3.65459 8.29742C3.82283 7.48234 4.69787 6.72414 5.36619 6.02293C5.36478 6.02246 5.36341 6.02195 5.36201 6.02148L7.86603 3.46578C8.86392 2.44731 10.5053 2.43891 11.5136 3.44715C12.532 4.445 12.5488 6.09468 11.551 7.11312L10.0343 8.67281C9.96407 8.74499 9.9413 8.85031 9.97415 8.9455C10.3234 9.9582 10.4093 11.3861 10.1752 12.465C10.1687 12.4951 10.2059 12.5149 10.2276 12.4928L13.4556 9.19816C15.5177 7.09347 15.5002 3.66676 13.4167 1.58324C11.2904 -0.543044 7.82892 -0.525348 5.72447 1.6225L2.41697 4.99824C2.4126 5.00285 2.40846 5.00754 2.40404 5.01207Z" />
      </g>
    </Svg>
  );
}

const Path = styled.path`
  fill: ${({ theme }) => theme.smallText};
`;

const Svg = styled.svg`
  fill: transparent;
`;
