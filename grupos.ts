const grupos = [
  {
    slug: "introducao-linguagem-c",
    titulo: "Grupo 1: Introdução à Linguagem C e Ambiente de Desenvolvimento",
    resumo:
      "Primeiro contato com a linguagem C, desde seu histórico até a execução do primeiro programa.",
    descricao:
      'Visão Geral da Linguagem C: Histórico, Características e Aplicações; Configuração do Ambiente: Instalação de IDEs como Code::Blocks, Visual Studio ou uso do OnlineGDB; Estrutura Básica de um Programa em C: #include, main(), e Comentários; Prática: Escrever e Executar o Primeiro Programa ("Hello, World!")',
    alunos: [
      "Anderson Camini",
      "Eduardo De Seixas",
      "Matheus Calisto Allebrandt Kunz",
      "Taina Garcia Terra",
      "Vitor Gabriel Dias Rauber",
    ],
    livro: {
      titulo:
        "Introdução à programação em C: Os primeiros passos de um desenvolvedor",
      autor: "Mauricio Aniche",
      ano: 2015,
    },
  },
  {
    slug: "conceitos-fundamentais-programacao-c",
    titulo: "Grupo 2: Conceitos Fundamentais de Programação em C",
    resumo:
      "Conceitos básicos da linguagem C como tipos de dados, operadores e estruturas de controle.",
    descricao:
      "Tipos de Dados e Variáveis: Inteiros, Floats, Caracteres; Operadores: Aritméticos, Relacionais e Lógicos; Entrada e Saída de Dados: scanf e printf; Controle de Fluxo: Condicionais (if, else, switch) e Laços (for, while); Prática: Criar Programas Simples com Controle de Fluxo",
    alunos: [
      "Adnan Omar Jibara",
      "Bruno Fontana Da Silva",
      "Joao Gabriel Bail Bogdanovicz",
      "Patrick Iagucheski de Oliveira",
    ],
    livro: {
      titulo: "Linguagem C. Completa E Descomplicada",
      autor: "André Backers",
      ano: 2013,
    },
  },
  {
    slug: "subprogramacao-e-depuracao",
    titulo: "Grupo 3: Introdução à Subprogramação e Depuração",
    resumo:
      "Como organizar programas em funções e utilizar ferramentas de depuração.",
    descricao:
      "Funções: Declaração, Definição e Chamada de Funções; Passagem de Parâmetros e Retorno de Valores; Introdução ao Debugging: Uso de Ferramentas de Depuração no IDE; Prática: Dividir Problemas em Funções e Identificar Erros Comuns",
    alunos: [
      "Andrey Teodoro Alves De Lima",
      "Bianca Eduarda França",
      "Vinicius Bautitz Tengaten",
    ],
    livro: {
      titulo: "Linguagem C",
      autor: "Luís Damas",
      ano: 2007,
    },
  },
  {
    slug: "teste-de-mesa-e-pratica",
    titulo: "Grupo 4: Teste de Mesa e Exercícios Práticos",
    resumo:
      "Aplicação prática e revisão dos conceitos com foco em testes e mini-projetos.",
    descricao:
      "Teste de Mesa: Análise Passo a Passo de Programas para Compreensão; Exercícios Práticos: Implementar Programas Utilizando Todos os Conceitos; Revisão e Consolidação: Mini-projetos Simples (Exemplo: Calculadora Básica); Encerramento: Discussão sobre Próximos Passos (C avançado, outras linguagens, etc.)",
    alunos: ["Ilan Wendling Thoele", "Gabrieli Nicole Dalke Frank"],
    livro: {
      titulo: "",
      autor: "",
      ano: 0,
    },
  },
];

export default grupos;
