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
}];

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
    inicio:"30/10/2022",
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
    curso:"HTML e CSS",
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
    inicio:"12/01/2022",
    termino:"12/06/2022",
    numeroDeAlunos:200,
    periodo:"noturno",
    concluida:true
},{
    turma:"Burnell",
    curso:"APIsRest",
    inicio:"18/10/2022",
    termino:"18/04/2023",
    numeroDeAlunos:90,
    periodo:"integral",
    concluida:false
}];

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
}];

//Laços

const buscarCurso=(nomeCurso)=>{
    const busca = cursos.find(element=> element.curso.toLowerCase()===nomeCurso);
    return busca
}

//console.log(buscarCurso("apisrest".toLowerCase()));

const buscarTurma=(nomeTurma)=>{
    const resultBusca = nomeTurma
    let busca=turmas.filter(obj => obj.turma.toLowerCase() === resultBusca)
    if (busca.length<1) {
        console.log('Turma não encontrada!');
    } else {
        console.log(busca[0]);
    }
} 

//buscarTurma("Burnell".toLowerCase());

const buscarEstudante=(nomeEstudante)=>{
    for(i=0;i<estudantes.length;i++){
        if(nomeEstudante === estudantes[i].estudante.toLowerCase()){
            return estudantes[i]
        }
    }
}

//console.log(buscarEstudante("lashana lynch".toLowerCase()));


const matricular=(nome,curso,turma,nParcelas)=>{
    estudantes.push({
        estudante:nome,
        turma:turma,
        curso:curso,
        valor:buscarCurso(curso.toLowerCase()).valor,
        nParcelas:nParcelas,
        desconto:nParcelas<=2,
        parcelas:(buscarCurso(curso.toLowerCase()).valor/nParcelas)
    })
    console.log(estudantes);
    console.log("Aluno Matriculado",estudantes[estudantes.length -1]);
}
//matricular("arthur jordi","HTML e CSS","Curie",2)

//FUNÇÕES DE DESCONTO
const descontoParcela=(nParcelas)=>{
    if (nParcelas<=2) {
        return 0.2
    } else {
        return 0
    }
}

const parcelarCurso=(valorCursos,nParcelas)=>{
    let totalCompra = 0
    let desconto = 1
    for (const valor of valorCursos) {
        totalCompra+=valor
    }
    switch (valorCursos.length) {
        case 0:
            return "O carrinho está vazio"
        case 1:
            desconto -= descontoParcela(nParcelas) 
            totalCompra =totalCompra*desconto
            if (desconto==1) {
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)}, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }else{
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)} com ${(100-desconto*100).toFixed(0)}% de desconto, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }
        case 2:
            desconto -= 0.10
            desconto -= descontoParcela(nParcelas) 
            totalCompra =totalCompra*desconto
            if (desconto==1) {
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)}, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }else{
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)} com ${(100-desconto*100).toFixed(0)}% de desconto, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }
        default:
            desconto -= 0.15
            desconto -= descontoParcela(nParcelas) 
            totalCompra =totalCompra*desconto
            if (desconto==1) {
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)}, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }else{
                return `O valor do pagamento é de R$${totalCompra.toFixed(2)} com ${(100-desconto*100).toFixed(0)}% de desconto, parcelado em ${nParcelas}X de R$ ${(totalCompra/nParcelas).toFixed(2)}`
            }
    }
}

const carrinhoCursos=[]

//console.log(parcelarCurso(carrinhoCursos,2));

const adcValorCarrinho=(nomeCurso)=>{
    carrinhoCursos.push(nomeCurso.valor)
}

//console.log(adcValorCarrinho(buscarCurso("html e css")));
//console.log(carrinhoCursos);

const relatorioEstudante=(nomeEstudante)=>{
    return `Aluno: ${buscarEstudante(nomeEstudante).estudante}\nTurma: ${buscarEstudante(nomeEstudante).turma}\nCurso: ${buscarEstudante(nomeEstudante).curso}\nValor Total: R$${buscarEstudante(nomeEstudante).valor}\nValor Parcela: R$${buscarEstudante(nomeEstudante).parcelas}\nN* Parcelas: ${buscarEstudante(nomeEstudante).nParcelas}`
}


//console.log(relatorioEstudante("chris evans".toLowerCase()));
