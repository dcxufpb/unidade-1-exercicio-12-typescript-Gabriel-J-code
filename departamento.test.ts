import { Departamento } from './departamento';
import { Coordenador } from './coordenador';

function verificaCampoObrigatorio(mensagemEsperada: string, departamento: Departamento) {
  try {
    departamento.dados_departamento();
  } catch (e) {
    expect(e.message).toBe(mensagemEsperada);
  }
}

const NOME_DEPARTAMENTO = "Depart 1"
const SIGLA = "D1"
const LOCALIZACAO = "Local1"
const NOME_COORDENADOR = "Coorde1"
const CPF_COORDENADOR = "123456"
const IDADE_COORDENADOR = 30

const TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO = `Depart 1 (D1)
Localizado em Local1
Coordernado por Coorde1 (30 anos), CPF: 123456
`;

test('Departamento Completo', () => {
  let departamentoCompleto: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR,CPF_COORDENADOR, IDADE_COORDENADOR));
  expect(departamentoCompleto.dados_departamento()).toBe(TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO);
});

const TEXTO_ESPERADO_DEPARTAMENTO_SEM_SIGLA = `Depart 1
Localizado em Local1
Coordernado por Coorde1 (30 anos), CPF: 123456
`;

test('Departamento sem sigla', () => {
  let departamentoSemSigla: Departamento = new Departamento(NOME_DEPARTAMENTO, "", LOCALIZACAO, new Coordenador(NOME_COORDENADOR,CPF_COORDENADOR, IDADE_COORDENADOR));
  expect(departamentoSemSigla.dados_departamento()).toBe(TEXTO_ESPERADO_DEPARTAMENTO_SEM_SIGLA);
});

test('Departamento sem nome', () => {
  let departamentoSemNome: Departamento = new Departamento("", SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR,CPF_COORDENADOR, IDADE_COORDENADOR));
  verificaCampoObrigatorio(`O campo nome do departamento é obrigatório`,
    departamentoSemNome);
});

test('Departamento sem Localização', () => {
  let departamentoSemLocalizacao: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, "", new Coordenador(NOME_COORDENADOR,CPF_COORDENADOR, IDADE_COORDENADOR));
  verificaCampoObrigatorio(`O campo localizacao do departamento é obrigatório`,
    departamentoSemLocalizacao);
});

test('Coordenador sem nome', () => {
  let coordenadorSemNome: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador("",CPF_COORDENADOR, IDADE_COORDENADOR));
  verificaCampoObrigatorio(`O campo nome do coordenador é obrigatório`,
    coordenadorSemNome);
});

test('Coordenador sem CPF', () => {
  let coordenadorSemCPF: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR,"", IDADE_COORDENADOR));
  verificaCampoObrigatorio(`O campo CPF do coordenador é obrigatório`,
    coordenadorSemCPF);
});

test('Coordenador sem idade', () => {
  let coordenadorSemIdade: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR,CPF_COORDENADOR, 0));
  verificaCampoObrigatorio(`O campo idade do coordenador é obrigatório`,
    coordenadorSemIdade);
});