const alunos = [
    {
      nome: 'Mathias',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 7 },
      ],
    },
    {
      nome: 'Luiza',
      notas: [
        { cadeira: 'DW2', nota: 8 },
        { cadeira: 'BD2', nota: 8 },
      ],
    },
    {
      nome: 'Pedro',
      notas: [
        { cadeira: 'DW2', nota: 10 },
        { cadeira: 'BD2', nota: 10 },
      ],
    }
  ];


  alunos.forEach((aluno) => {
    const notas = aluno.notas.map((nota) => nota.nota);
    
    let soma = 0;
    notas.forEach((nota) => {
       soma += nota;
    });
    
    const mediaGeral = soma/notas.length;
    
    console.log(`------------------`);
    console.log(`${aluno.nome} `);
    console.log(`Média geral = ${mediaGeral}`);
   });
   

   