import { Head } from "./Header.styled"

export const Header = ({ children }) => {
	return (
		<Head>
			{children}
			<h1>Daniil and Ivan</h1>
		</Head>
	)
}