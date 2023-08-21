import styled from "styled-components";

const Opcao = styled.li`
	min-width: 120px;
	display: flex;
	font-size: 16px;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0 5px;
	cursor: pointer;
`;
const Opcoes = styled.ul`
	display: flex;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
function OpcoesHeader() {
	return (
		<Opcoes>
			{textoOpcoes.map((texto) => (
				<Opcao>
					<p>{texto}</p>
				</Opcao>
			))}
		</Opcoes>
	);
}
export default OpcoesHeader;
