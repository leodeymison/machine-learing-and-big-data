<img src="https://i.ibb.co/yQhs10f/graph-linear.jpg" alt="graph-linear-regressão-linear">
 
 <p>
 A regressão linear simples é uma espécie de modelo na estatística cujo objetivo é indicar qual será o comportamento de uma <strong>variável dependente</strong>, quando colocado uma <strong>variável independente</strong>.
 </p>
 
  <p>
 Nesse caso, utilizaremos apenas uma variável independente e uma dependente. Se tivermos mais que uma <strong>variável independente</strong> utilizaremos a regressão linear múltipla, que veremos em próximos posts.
 </p>
 
  <p>
Ou seja, a regressão linear simples é uma forma de verificar uma possível relação linear entre duas variáveis, como, por exemplo:
 </p>
 <ul>
     <li>
         Quantas bactérias serão mortas se aplicarmos uma certa quantidade de veneno. Link: <a target="_blank"  href="https://modelo-de-regressao-linear-simples.netlify.app/">https://modelo-de-regressao-linear-simples.netlify.app/</a>
 </ul>
 <p>
Obs: Quanto mais dados você tiver na sua base de dados, mais assertiva será a previsão.
 </p>
 
 
 <br />
 
 <h1>Fórmulas e cálculos (Teoria)</h1>
 <p>
Usaremos uma base de dados fictícia de quantas bactérias foram mortas ao adicionar uma certa quantidade de veneno. Para simplificar nossa compreensão usaremos uma base de dados com apenas 5 linhas.
 </p>
 <img src="https://i.ibb.co/rfx398R/db.png" alt="banco de dados regressão linear">
 <p>
     <br />
    <strong>Conceitos:</strong> <br />
    - Bo = Ponto de encontro com o eixo Y. <br />
    - B1 = Inclinação da reta. <br />
    - Ŷ = Estimativa de Y. <br />
    - Ym = Média de Y. <br />
    - Xm = Média de X. <br />
    - Σ = Somatório <br />
 </p>
 <strong>Fórmula: </strong>
 <p>Ŷ = Bo + B1 * Xi</p>
 <br />
 <p>Primeiro vamos fazer alguns cálculos com nossa base de dados que vamos precisar.
</p>
 <ul>
     <li>
         1. A média da coluna Xi no banco de dados (Xm). Todos os valores dividido pela quantidade de dados.
         <img src="https://i.ibb.co/7WYLrbR/m-dia-da-coluna-x.png" alt="media da coluna x - regressão linear simples">
    </li>
    <br />
    <li>
         2. A média da coluna Yi no banco de dados (Ym). Todos os valores dividido pela quantidade de dados.
         <img src="https://i.ibb.co/ZY09mt9/media-da-coluna-y.png" alt="media da coluna y - regressão linear simnples">
    </li>  
    <br />
    <li>
         3. A média de (Xi - Xm) * (Yi - Ym). Vamos pensar linha por linha para fazermos esse cálculo. (Xi - Xm) = Pegamos o primeiro valor da coluna Xi e subtraímos pela média de todos os valores da coluna Xi. (Yi - Ym) = Pegamos o primeiro valor da Yi e subtraímos pela média de todos os valores da coluna Yi. logo em seguida multiplicamos os dois resultados.
         <img src="https://i.ibb.co/mRGmF7f/multiplica1media.png" alt="multiplica media - regressão linear simples na tabnews">
         <br />
Aí fazemos esse mesmo cálculo em todas as outras linhas.Mudando apenas o Xi e Yi em cada linha. <br />
 <img src="https://i.ibb.co/Vt1hbqg/media-Xim-EYim.png" alt="media-Xim-EYim - Regressão linear simples na tabnews">
 </li>
 <br />
 <li>
 4. A média de (Xi - Xm)². Como já tiramos esse valor no campo anterior na 3° coluna após o a coluna Yi. Vamos apenas pegar o resultado e elevar ao quadrado.
<img src="https://i.ibb.co/PFYyvz0/Soma-Calculo-Final.png" alt="Soma Calculo Final regressão linear simples na tabnews">
 </li>
    
 </ul>
 <br ><br >
 <p><strong>Vamos dividir a fórmula Ŷ = Bo + B1 * Xi em três parte. </strong></p>
 <p><strong>Primeira parte - B1:</strong></p>
 <img src="https://i.ibb.co/wymfXv1/formul-B1.png" alt="formul B1 regressão linear simples na tabnews">
 <p>Como já temos esses valores nas tabelas acima, vamos apenas substituir pelos os resultados. </p>
 <img src="https://i.ibb.co/Fm6B4F7/formula-B1-result.png" alt="formula B1 result - regressão linear simples na tabnews">
 <h3># B1 = 2,6</h3>
 <br />
 <p><strong>Segunda parte - Bo:</strong></p>
 <p>B0 = Ym - B1 * Xm</p>
 <p>B0 = 8 - 2,6 * 3 (obs: Primeiro multiplica)</p>
 <p>Bo = 8 - 7,8</p>
 <h3># Bo = 0,2</h3>
 <br />
 <p>
 Agora vamos para o cálculo final: Ŷ = Bo + B1 * Xi
 </p>
  <p>
<strong>Ŷ = 0,2 + 2,6 * Xi</strong> (Esse Xi é a entrada (input) do dado que você quer ver o resultado, vamos colocar um exemplo de “2”)
 </p>
 <p>
Ŷ = 0,2 + 2,6 * 2 (Primeiro multiplica)
 </p>
 <p>
Ŷ = 0,2 + 5,2
 </p>
 <h3># Ŷ = 5,4 </h3>
 <br />
 
 
 
 <h1>Implementando no JavaScript ( Prática )</h1>
 <p>
Repositório de exemplo: <a target="_blank"  href="https://github.com/leodeymison/regressao-linear-simples">https://github.com/leodeymison/regressao-linear-simples</a>
<br />
<strong>Obs:</strong> Esse exemplo não foi implementado nenhuma arquitetura como Design patterns ou algo tipo, o objetivo é ficar o mais simples possível de entender.
 <p>
 <strong>banco de dados test:</strong><br />
 <img src="https://i.ibb.co/4JGZFWx/code-db.png" alt="code batabase - regressão linear simples na tabnews">
 
 </p>
 <br />
 
 
 <p>
Primeiro vamos criar uma função com o nome “regressaoLinearSimples” que chamará todas as outras funções e será a função principal. Ele verificará sem o campo de input do html será vazio e chamará nossa primeira função que é a soma de todos os valores da coluna Xi e Yi.
<br />
<img src="https://i.ibb.co/HG2fvFX/func-regressao-Linear-Simples.png" alt="funcão regressao Linear Simples na tabnews">
 <p> <br/>
 
 
 
 <p>
Logo em seguida criaremos a função somaXandY, ela faz um loop pegando valor por valor de X e Y e somando em uma variável somaX e somaY, logo em seguida retorna as duas variáveis:
<br />
<img src="https://i.ibb.co/ZNm6Kg4/soma-Xand-Y.png" alt="soma X and Y - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 <p>
Agora chamaremos a função mediaXY, que fará a media das duas colunas no banco de dados. Essa função recebe dois parâmetros: “Soma da coluna X” e “Soma da coluna Y”, calculada na função anterior.
<br />
<img src="https://i.ibb.co/41NNBvd/chama-func-media-Xand-Y.png" alt="chama func ão media X and Y - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 
  <p>
Nessa função pegamos a quantidade de linhas de temos no banco de dados e dividiremos pela soma, e logo em seguida retornamos o resultado de mediaX e mediaY
<br />
<img src="https://i.ibb.co/N3T2KHf/func-media-Xand-Y.png" alt="funcão media X and Y - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 
 <p>
Nessa próxima chamada, chamaremos duas funções passando a média de cada coluna no parâmetro: x_Somatoria = (Xi - Xm) e y_somatoria = (Yi - Ym), o resultado dessas duas funções será os parâmetro da função XXmuiltYs, que é (Xi - Xm) * (Yi - Ym)
<br />
<img src="https://i.ibb.co/NZxbDPw/chama-func-somatorio-EMulti.png" alt="chama-func-somatorio-EMulti - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 
 <p>
Nessas duas funções criamos um Array de números fazendo os cálculos linha por linha no banco de dados. (Xi = element.x - Xm = valorMedia) &  (Yi = element.y - Xm = valorMedia), logo em seguida retornamos o valor.
<br />
<img src="https://i.ibb.co/Dt6MW4L/func-somatorio.png" alt="funcão somatorio - regressão linear simples na tabnews" >
 <p> <br/>
 
 
 
 
  <p>
Nessa função faz um loop (Xi - Xm)  multiplicando por (Yi - Ym) e logo em seguida outro loop que soma todos esses resultados, retornamos o resultado das multiplicações que é um Array e a soma desse Array.
<br />
<img src="https://i.ibb.co/R968kg2/fund-XSmulti-YSFunc.png" alt="fund-XSmulti-YSFunc - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 
 
 
   <p>
Vamos chamar a última função  RaizXS que tem como parâmetro x_somatoria: a soma de todos os resultados de (Xi - Xm)².
<br />
<img src="https://i.ibb.co/2SjCRx5/chama-func-raiz-Somatorio.png" alt="chama funcão raiz Somatorio - regressão linear na tabnews">
 <p> <br/>
 
 
 
 
 <p>
Nessa função faz um loop (Xi - Xm) ² em cada linha e logo depois outro loop fazendo o somatório desses valores, retorna os Array de (Xi - Xm) ² e o valor do Somatório.

<br />
<img src="https://i.ibb.co/ZX5P7Dv/func-rais-Somatoria.png" alt="func raiz Somatoria">
 <p> <br/>
 
 
 
 
  <p>
Em seguida fazemos os cálculos de B0, B1 e Ŷ, formatamos o Ŷ para ter no máximo 2 número depois da vírgula e imprimimos o valor de Ŷ na página. 
<br />
<strong>Obs:</strong> Como os cálculos de B1, Bo e Ŷ são pequenos eu não vi a necessidade de criar uma função para calculá-los, mas se você achar melhor, fique a vontade para criar.


<br />
<img src="https://i.ibb.co/gtbBfsr/calculos-Finais.png" alt="calculos Finais - regressão linear simples na tabnews">
 <p> <br/>
 
 
 
 
 
 
 <p>
O meu objetivo com esse post é fazer com que sua mente se abra para o conhecimento profundo na área de Machine Learning e Big Data, deixando de lado apenas aprender uma biblioteca que já te entrega tudo pronto e aprender a Raiz, para você conseguir criar novas formas revolucionárias de inteligência artificial. Bons estudos! :)

 <p> <br/>
 

 
 
 
 <p>
GitHub: <a target="_blank" href="https://github.com/leodeymison">https://github.com/leodeymison</a>
 <p>
