const cursos = [
    {
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
}
];

const turmas = [
    {
    turma:"Hipatia",
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
}
];

const estudantes = [
    {
    estudante:"Chris Evans",
    turma:"Hipátia",
    curso:"JavaScript",
    valor:"900",
    nParcelas:9,
    desconto:false,
    parcelas:100
},
    {
    estudante:"Halle Berry",
    turma:"Burnell",
    curso:"APIsRest",
    valor:"2000",
    nParcelas:4,
    desconto:false,
    parcelas:500
    },
    {
    estudante:"Lashana Lynch",
    turma:"Zhenyi",
    curso:"HTML e CSS",
    valor:"500",
    nParcelas:1,
    desconto:true,
    parcelas:500
    }
];

//Turmas

const input = document.getElementById('search-bar')
const botaoBuscar = document.getElementById('search-button');
if (botaoBuscar) {
    botaoBuscar.addEventListener('click', ()=>{
        buscarTurma(input.value);
        input.value =''
    })
}

const buscarTurma=(nomeTurma)=>{
    const listaDeTurmas = document.getElementById('turmas-cards')
    let busca=turmas.filter(obj => obj.turma.toLowerCase().startsWith(nomeTurma.toLowerCase()))
    if (busca.length<1 && !input.value) {
        listaDeTurmas.innerHTML = ''
        const cards = gerarCard(turmas)
        cards.forEach(element => {
            listaDeTurmas.innerHTML += element
    });
    }else if (
        busca.length<1 && input.value
    ) {
        Swal.fire('Turma não encontrada')
    } else {
        listaDeTurmas.innerHTML = ''
        const cards = gerarCard(busca)
        cards.forEach(element => {
            listaDeTurmas.innerHTML += element
    });
    }
}  

const gerarCard = (turmasBuscadas) => {
    const cards = turmasBuscadas.map(turma => {
        return `
    <article>
        <ul>
            <h3>${turma.turma}</h3>
            <li><strong>Curso: </strong>${turma.curso}</li>
            <li><strong>Início: </strong>${turma.inicio}</li>
            <li><strong>Termino: </strong>${turma.termino}</li>
            <li><strong>Número de alunos: </strong>${turma.numeroDeAlunos}</li>
            <li><strong>Período: </strong>${turma.periodo}</li>
            <li><strong>Concluido: </strong>${turma.concluida ? "Sim": "Não"}</li>
        </ul>
    </article>`
    })
    return cards
}

//Matricula

const buscarCurso=(nomeCurso)=>{
    const busca = cursos.find(element=> element.curso.toLowerCase().startsWith(nomeCurso.toLowerCase()));
    return busca
}

const botaoMatricula = document.getElementById('matricula-button')
if (botaoMatricula) {
    botaoMatricula.addEventListener('click', (event)=>{
        event.preventDefault();
        matricular();
    })
}

const getFormData = (inputs)=> {
    const values ={}
    inputs.forEach(input=>{
        values[input.name]=input.value
    })
    return values
}

const matricular=()=>{
    const inputs = document.querySelectorAll('input');
    const {nome,curso,turma,nParcelas}=getFormData(inputs)
    estudantes.push({
        estudante:nome,
        turma:turma,
        curso:curso,
        valor:buscarCurso(curso.toLowerCase())?.valor,
        nParcelas:nParcelas,
        desconto:nParcelas<=2,
        parcelas:(buscarCurso(curso.toLowerCase())?.valor/nParcelas)
    })
    inputs.forEach(input=>{
        input.value =''
    })
    const resultMatricula = document.getElementById('matricula-result');
    resultMatricula.innerHTML=`
    <div id="matricula-relatorio">
        <h3>Aluno Matriculado</h3>
        <ul>
            <p>Aluno Matriculado</p>
            <li>Nome: ${nome}</li>
            <li>Curso: ${curso}</li>
            <li>Turma: ${turma}</li>
            <li>Número de parcelas: ${nParcelas}</li>
        </ul>
    </div>
    <img src="assets/Vector.png" alt="confirm" />
    `
}

//Relatório

const nomeRelatorio = document.getElementById('relatorio-nome');
const relatorioButton = document.getElementById('relatorio-button');
if (relatorioButton) {
    relatorioButton.addEventListener('click', ()=>{
        buscarEstudante(nomeRelatorio.value)
        nomeRelatorio.value=''
    })
}

const buscarEstudante = (nomeEstudante)=>{
    const listaDeAlunos = document.getElementById('relatorio-result');
    let buscaAluno = estudantes.filter(obj => obj.estudante.toLowerCase().startsWith(nomeEstudante.toLowerCase()));
    if(!nomeEstudante){
        Swal.fire('Digite um nome para pesquisar')
    }else if (buscaAluno.length>0) {
        listaDeAlunos.innerHTML=''
        const relatorio = relatorioEstudante(buscaAluno)
        relatorio.forEach(element=>{
            listaDeAlunos.innerHTML += element
        })
    }else{
        Swal.fire('Aluno não encontrado')
    }
}

const relatorioEstudante=(estudanteBuscado)=>{
    const relatorio = estudanteBuscado.map(aluno=>{
        return `
    <ul>
        <li>Aluno: ${aluno.estudante}</li>
        <li>Turma: ${aluno.turma}</li>
        <li>Curso: ${aluno.curso}</li>
        <li>Valor total: ${aluno.valor}</li>
        <li>Valor parcela: ${aluno.parcelas}</li>
        <li>N.º parcelas: ${aluno.nParcelas}</li>
    </ul>`
    })
    return relatorio
}

//FUNÇÕES DE DESCONTO

const simuladorResult = document.getElementById('result-mensage');

const descontoParcela=(nParcelas)=>{
    if (nParcelas<=2) {
        return 0.2
    }
    return 0
}

const parcelarCurso=(valorCursos,nParcelas)=>{
    let totalCompra = 0
    let desconto = 1
    for (const valor of valorCursos) {
        totalCompra+=valor
    }
    switch (valorCursos.length) {
        case 0:
            Swal.fire('O carrinho está vazio')
            return ''
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

const adcValorCarrinho=()=>{
    const curso = document.getElementById('add-curso');
    carrinhoCursos.push(buscarCurso(curso.value).valor)
    curso.value=''
}

const incluirCurso = document.getElementById('incluir-curso');
incluirCurso.addEventListener('click', (event)=>{
    event.preventDefault();
    adcValorCarrinho();
})

const simuladorButton = document.getElementById('simulador-button');
simuladorButton.addEventListener('click', ()=>{
    const parcelasCurso = document.getElementById('parcelas-curso');
    simuladorResult.innerText=parcelarCurso(carrinhoCursos,parcelasCurso.value)
    parcelasCurso.value=''
})