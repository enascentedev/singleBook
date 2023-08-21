import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import styled from "styled-components";

const Icones = styled.li`
	display: flex;
	align-items: center;
`;
const Icone = styled.li`
	margin-right: 40px;
	width: 25px;
	list-style: none;
`;
const icones = [perfil, sacola];
function IconesHeader() {
	return (
		<Icones>
			{icones.map((icone) => (
				<Icone>
					{" "}
					<img src={icone}></img>
				</Icone>
			))}
		</Icones>
	);
}
export default IconesHeader;
