import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --header-height: 3rem;

      /*========== Colors ==========*/


      /* Change favorite color */
      /* -- 230 => #576ee0 250 => #6e57e0 142 => #57e089 340 => #e05785 -- */
      --hue-color: 230; /*Purple 250 - Green 142 - Blue 230 - Pink 340*/

      /* HSL color mode */
      --first-color: hsl(var(--hue-color), 69%, 61%);
      --first-color-second: hsl(var(--hue-color), 69%, 61%);
      --first-color-alt: hsl(var(--hue-color), 57%, 53%);
      --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
      --title-color: hsl(var(--hue-color), 8%, 15%);
      --text-color: hsl(var(--hue-color), 8%, 45%);
      --text-color-light: hsl(var(--hue-color), 8%, 65%);
      --input-color: hsl(var(--hue-color), 70%, 96%);
      --body-color: hsl(var(--hue-color), 60%, 90%);
      --container-color: #fff;


      /*========== Font and typography ==========*/
      --body-font: 'Poppins', sans-serif;

      /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
      --big-font-size: 2rem;
      --h1-font-size: 1.5rem;
      --h2-font-size: 1.25rem;
      --h3-font-size: 1.125rem;
      --normal-font-size: .938rem;
      --small-font-size: .813rem;
      --smaller-font-size: .75rem;

      /*========== Font weight ==========*/
      --font-medium: 500;
      --font-semi-bold: 600;

      /*========== Margines Bottom ==========*/
      /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
      --mb-0-25: .25rem;
      --mb-0-5: .5rem;
      --mb-0-75: .75rem;
      --mb-1: 1rem;
      --mb-1-5: 1.5rem;
      --mb-2: 2rem;
      --mb-2-5: 2.5rem;
      --mb-3: 3rem;

      /*========== z index ==========*/
      --z-tooltip: 10;
      --z-fixed: 100;
      --z-modal: 1000;
  }

  /* Font size for large devices */
  @media screen and (min-width: 968px) {
      :root {
          --big-font-size: 3rem;
          --h1-font-size: 2.25rem;
          --h2-font-size: 1.5rem;
          --h3-font-size: 1.25rem;
          --normal-font-size: 1rem;
          --small-font-size: .875rem;
          --smaller-font-size: .813rem;
      }
  }

  /*========== Variables Dark theme ==========*/


  /*========== Button Dark/Light ==========*/


  /*==================== BASE ====================*/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 var(--header-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    background-color: #fff;
    color: var(--text-color);

    h1,h2,h3,h4 {
      color: var(--title-color);
      font-weight: var(--font-semi-bold);
    }

    a{ text-decoration: none; }

    img{
      max-width: 100%;
      height: auto;
    }

    input:focus, button:focus {
      outline: none;
    }
  }

`;

/*==================== REUSABLE COMPONENTS ====================*/

export const Section = styled.section`
	padding: 2rem 0 4rem 0;
`;

export const SectionTitle = styled.h1`
	font-size: var(--h1-font-size);
	text-align: center;
`;

/*==================== LAYOUT ====================*/

export const Container = css`
	max-width: 1100px;
	margin-left: var(--mb-1-5);
	margin-right: var(--mb-1-5);
`;

export const Grid = css`
	display: grid;
	gap: 1.5rem;
`;
