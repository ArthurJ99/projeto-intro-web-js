/*  const turmas =["HC1","JS1","JS2","REST1","REST2"];
    const estudantes =["Aluno1","Aluno2,"Aluno3"];
    const cursos =["HTML e CSS","JavaScript","APIs REST"]; */

const cursos = [{
    curso:"HTML e CSS",
    descricao:"Descrição genérica",
    duracao:"1 Mês",
    valor:500
},{
    curso:"JavaScript",
    descricao:"Descrição genérica",
    duracao:"2 Meses",
    valor:900
},{
    curso:"APIsRest",
    descricao:"Descrição genérica",
    duracao:"6 Meses",
    valor:2000
}]

const turmas = [{
    turma:"Hipátia",
    curso:"JavaScript",
    inicio:"30/11/2022",
    termino:"30/01/2023",
    numeroDeAlunos:150,
    periodo:"noturno",
    concluida:false
},{
    turma:"Sibyla",
    curso:"JavaScript",
    inicio:"30/09/2022",
    termino:"30/12/2022",
    numeroDeAlunos:200,
    periodo:"integral",
    concluida:false
},{
    turma:"Curie",
    curso:"HTML e CSS",
    inicio:"15/09/2022",
    termino:"15/10/2022",
    numeroDeAlunos:180,
    periodo:"noturno",
    concluida:true
},{
    turma:"Zhenyi",
    curso:"HTML e CSS",
    inicio:"01/11/2022",
    termino:"01/01/2023",
    numeroDeAlunos:80,
    periodo:"integral",
    concluida:false
},{
    turma:"Clarke",
    curso:"HTM e CSS",
    inicio:"04/07/2022",
    termino:"04/09/2022",
    numeroDeAlunos:200,
    periodo:"noturno",
    concluida:true
},{
    turma:"Blackwell",
    curso:"APIsRest",
    inicio:"20/03/2022",
    termino:"20/06/2022",
    numeroDeAlunos:100,
    periodo:"integral",
    concluida:true
},{
    turma:"Elion",
    curso:"APIsRest",
    inicio:"18/01/2022",
    termino:"12/06/2022",
    numeroDeAlunos:200,
    periodo:"noturno",
    concluida:true
},{
    turma:"Burnell",
    curso:"APIsRest",
    inicio:"18/10/2022",
    termino:"18/04/2022",
    numeroDeAlunos:90,
    periodo:"integral",
    concluida:false
}]

const estudantes = [{
    estudante:"Chris Evans",
    turma:"Hipátia",
    curso:"JavaScript",
    valor:"900",
    nParcelas:9,
    desconto:false,
    parcelas:100
},{
    estudante:"Halle Berry",
    turma:"Burnell",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:4,
    desconto:false,
    parcelas:500
},{
    estudante:"Lashana Lynch",
    turma:"Zhenyi",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:1,
    desconto:true,
    parcelas:500
}]