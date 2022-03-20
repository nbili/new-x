import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
	}

	#root {
		padding: 40px;
	}
`;

export default GlobalStyles;
