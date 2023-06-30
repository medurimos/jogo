var map;
var i;
var j;
var pLinha;
var pColuna;
var ci;
var mortes;


//=========== MAPA ==========================================================================================

    map = [];

    for(i=0;i<15;i++)
    {

        map[i] = [];
        document.getElementById("map").innerHTML += `<tr id='l${i}'></tr>`;

        for(j=0;j<15;j++)
        {
            map[i][j] = "&nbsp";
            document.getElementById(`l${i}`).innerHTML += `<td id='l${i}.${j}'>${map[i][j]}</td>`;
        }
        
    }

    parede(0,14,0,14,"&nbsp*");

    addElemento(1,10,"&nbsp*");

    parede(3,11,10,14,"&nbsp*");
    addElemento(7,14,"&nbsp");
    addElemento(7,10,"&nbsp");
    addElemento(13,10,"&nbsp*");
    
//==========================================================================================================



//=========== PERSONAGEM =====================================================

    pLinha = 7;
    pColuna = 1;
    ci = "&nbsp";

    document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&";

//============================================================================



//=========== ITENS ===============================================

    map[1][13] = "&nbsp@";
    document.getElementById(`l1.13`).innerHTML = "&nbsp@"; 
    cor(1,13,"#E55807")
    map[12][10] = "&nbspD";
    document.getElementById(`l12.10`).innerHTML = "&nbspD";
  cor(12,10,"#068DA9")

    map[13][13] = "&nbsp@";
    document.getElementById(`l13.13`).innerHTML = "&nbsp@";
    cor(13,13,"#E55807")
    map[7][10] = "&nbspD";
    document.getElementById(`l7.10`).innerHTML = "&nbspD";
    cor(7,10,"#068DA9")

    map[7][5] = "&nbspX";
    document.getElementById("l7.5").innerHTML = "&nbspX";
    cor(7,5,"red")

    map[1][9] = "&nbspX";
    document.getElementById("l1.9").innerHTML = "&nbspX";
    cor(1,9,"red")

    map[13][9] = "&nbspX";
    document.getElementById("l13.9").innerHTML = "&nbspX";
    cor(13,9,"red")

//================================================================

    
    
window.addEventListener("keydown", (k) => 
{
       
    if(k.code == 'KeyW')
    {

        if(map[pLinha - 1][pColuna] == "&nbsp*"||map[pLinha - 1][pColuna] == "&nbspD")
        {
            //Nada acontece
        }

        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci;
            pLinha--;
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML;
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&";
        }

    }

    else if(k.code == 'KeyS')
    {

        if(map[pLinha + 1][pColuna] == "&nbsp*"||map[pLinha + 1][pColuna] == "&nbspD")
        {
            //Nada acontece
        }

        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci;
            pLinha++;
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML;
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&";
        }

    }

    else if(k.code == 'KeyD')
    {

        if(map[pLinha][pColuna + 1] == "&nbsp*"||map[pLinha][pColuna + 1] == "&nbspD")
        {
            //Nada acontece
        }

        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci;
            pColuna++;
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML;
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&";
        }

    }

    else if(k.code == 'KeyA')
    {

        if(map[pLinha][pColuna - 1] == "&nbsp*"||map[pLinha][pColuna - 1] == "&nbspD")
        {
            //Nada acontece
        }

        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci;
            pColuna--;
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML;
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&";
        }

    }

    else if(k.code == 'KeyI')
    {

        if(pLinha==1&&pColuna==13)
        {
            alert('Cliclác!');
            map[12][10] = "&nbsp=";
            document.getElementById(`l12.10`).innerHTML = "&nbsp=";
            ci = "&nbsp";
            cor(pLinha,pColuna,'#FFDD5C')
        }

        else if(pLinha==13&&pColuna==13)
        {
            alert('Cliclác!');
            map[7][10] = "&nbsp=";
            document.getElementById(`l7.10`).innerHTML = "&nbsp=";
            ci = "&nbsp";
            cor(pLinha,pColuna,'#FFDD5C')
        }

        if (pLinha==7&&pColuna==5)
        {
            alert('Dica: para sair daqui, atravese aquela fresta');
        }

        if (pLinha==1&&pColuna==9)
        {
            alert('A chave ao lado abre a porta de baixo.');
        }

        if (pLinha==13&&pColuna==9)
        {
            alert('A chave ao lado abre a porta do meio');
        }

    }

    if(pLinha == 7&&pColuna == 14)
    {
        window.location.replace("Fase2.html");
    }

}

)



function addElemento(linha,coluna,elemento)
{
    map[linha][coluna] = elemento;
    document.getElementById(`l${linha}.${coluna}`).innerHTML = map[linha][coluna];
}


function parede(dessaLinha, paraLinha, dessaColuna, paraColuna, elemento)
{
    
    for(i=dessaLinha;i<=paraLinha;i++)
    {

        for(j=dessaColuna;j<=paraColuna;j++)
        {

            if(i==dessaLinha||i==paraLinha||j==dessaColuna||j==paraColuna)
            {
                map[i][j] = elemento;
                document.getElementById(`l${i}.${j}`).innerHTML = map[i][j];
            }  

        }

    }
}


function cor(linha,coluna,color) {
    document.getElementById(`l${linha}.${coluna}`).style = `color: ${color}`
}
