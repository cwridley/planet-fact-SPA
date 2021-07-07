import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

/* :root {
  --white: #fff;
  --background-blue: hsl(240, 67%, 8%);
  --button-hover-blue: hsl(240, 17%, 26%);
  --light-gray: hsl(240, 6%, 54%);
  --mercury-blue: hsl(194, 48%, 49%);
  --venus-orange: hsl(33, 82%, 61%);
  --earth-purple: hsl(263, 67%, 51%);
  --mars-orange: hsl(2, 68%, 53%);
  --jupiter-orange: hsl(10, 63%, 51%);
  --saturn-orange: hsl(17, 73%, 46%);
  --uranus-blue: hsl(240, 17%, 26%);
  --neptune-green: hsl(169, 73%, 44%);
} */

html {
	font-size: 62.5%;
	box-sizing: border-box;
}

body {
	background-color: hsl(240, 67%, 8%);
	background-image: url(./background-stars.svg);
	font-family: "Spartan", sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}

h1 {
	color: #fff;
	font-family: "Antonio", sans-serif;
	font-size: 8rem;
	font-weight: 500;
	margin: 0;
}

h2 {
	color: #fff;
	font-family: "Antonio", sans-serif;
	font-size: 4rem;
	font-weight: 500;
	margin: 0;
}

h3 {
	color: #fff;
	font-family: "Spartan", sans-serif;
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 2.6px;
}

h4 {
	color: #fff;
	font-family: "Spartan", sans-serif;
	font-size: 1.1rem;
	font-weight: 700;
	letter-spacing: 1px;
}

`;
