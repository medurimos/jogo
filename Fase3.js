var map;
var i;
var j;
var pLinha;
var pColuna;
var ci;
var mortes;
var frag;
var bombCarry;
var boraEmbora;
var mi;

mi = 0;
boraEmbora = 0;
bombCarry = 0;
mortes = 0;
frag = 0;
map = [];


    for(i=0;i<60;i++)
    {
        document.getElementById("map").innerHTML += `<tr id='l${i}'></tr>`;
        map[i] = [];

        for(j=0;j<60;j++){
            map[i][j] = "&nbsp";
            document.getElementById(`l${i}`).innerHTML += `<td id='l${i}.${j}'>${map[i][j]}</td>`;
            
        }
    }

//=========== MAPA =============================
{
parede(0,59,0,59,"&nbsp*");

preencher(41,46,47,55,"&nbsp#")

addElemento(42,48,"&nbsp+")
cor(42,48,"#E96479")
addElemento(45,48,"&nbsp+")
cor(45,48,"#E96479")
addElemento(42,51,"&nbsp+")
cor(42,51,"#E96479")
addElemento(45,51,"&nbsp+")
cor(45,51,"#E96479")
addElemento(42,54,"&nbsp+")
cor(42,54,"#E96479")
addElemento(45,54,"&nbsp+")
cor(45,54,"#E96479")

parede(25,33,51,59,"&nbsp*");
addElemento(29,59,"&nbsp");

parede(22,36,33,44,"&nbsp*");

parede(27,31,44,51,"&nbsp*");

preencher(28,30,44,51,"&nbsp");

parede(21,21,40,42,"&nbsp*");
parede(21,22,41,41,"&nbsp");

parede(9,20,39,43,"&nbsp*");
parede(20,20,40,42,"&nbsp");

parede(9,13,43,51,"&nbsp*");
preencher(10,12,43,47,"&nbsp");

parede(4,8,43,47,"&nbsp*");
parede(9,9,44,46,"&nbsp");
addElemento(8,45,"&nbsp");
addElemento(8,43,"&nbsp");
addElemento(8,47,"&nbsp");

parede(10,12,52,52,"&nbsp*");
preencher(10,12,51,51,"&nbsp");
addElemento(11,52,"&nbsp");

parede(3,19,53,59,"&nbsp*");
preencher(10,12,53,53,"&nbsp");

parede(28,32,23,32,"&nbsp*");
preencher(30,30,32,33,"&nbsp");
addElemento(28,32,"&nbsp");
addElemento(32,32,"&nbsp");

parede(32,44,23,26,"&nbsp*");
preencher(32,32,24,25,"&nbsp");

parede(40,44,23,31,"&nbsp*")
preencher(40,40,24,25,"&nbsp")
preencher(41,43,26,26,"&nbsp")

parede(34,44,28,31,"&nbsp*")
preencher(41,43,28,28,"&nbsp")
preencher(40,40,29,30,"&nbsp")

parede(37,53,39,43,"&nbsp*")
preencher(36,37,41,41,"&nbsp")
addElemento(37,39,"&nbsp")
addElemento(37,43,"&nbsp")

parede(47,51,18,39,"&nbsp*")
preencher(48,50,39,39,"&nbsp")

parede(13,47,18,21,"&nbsp*")
preencher(47,47,19,20,"&nbsp")

parede(20,26,23,31,"&nbsp*")
preencher(20,20,25,30,"&nbsp")
addElemento(19,25,"&nbsp*")
addElemento(19,30,"&nbsp*")
addElemento(18,26,"&nbsp*")
addElemento(18,29,"&nbsp*")

parede(13,17,22,31,"&nbsp*")
addElemento(18,22,"&nbsp*")
preencher(14,17,22,22,"&nbsp")
preencher(14,18,21,21,"&nbsp")
preencher(17,17,27,28,"&nbsp")

parede(2,18,32,35,"&nbsp*")
preencher(3,16,32,32,"&nbsp")
preencher(14,16,31,31,"&nbsp")

parede(6,13,7,31,"&nbsp*")

parede(2,6,3,31,"&nbsp*")
preencher(3,5,31,31,"&nbsp")
preencher(6,6,4,6,"&nbsp")
preencher(13,13,8,17,"&nbsp")

parede(7,22,3,7,"&nbsp*")
preencher(7,7,4,6,"&nbsp")

parede(17,22,3,16,"&nbsp*")
preencher(17,17,4,6,"&nbsp")
preencher(18,21,7,7,"&nbsp")

parede(17,36,12,16,"&nbsp*")
preencher(18,21,12,12,"&nbsp")
preencher(28,30,12,12,"&nbsp")
preencher(22,22,13,15,"&nbsp")

parede(24,33,2,10,"&nbsp*")
addElemento(27,11,"&nbsp*")
addElemento(31,11,"&nbsp*")
preencher(17,17,4,6,"&nbsp")
preencher(28,30,10,10,"&nbsp")

parede(35,38,3,16,"&nbsp*")
preencher(35,36,13,15,"&nbsp")
addElemento(36,12,"&nbsp")

parede(38,57,3,7,"&nbsp*")
preencher(38,38,4,6,"&nbsp")

parede(54,57,7,15,"&nbsp*")
preencher(55,56,7,7,"&nbsp")
preencher(54,54,12,13,"&nbsp")


parede(40,52,9,16,"&nbsp*")
preencher(52,52,12,13,"&nbsp")
addElemento(53,11,"&nbsp*")
addElemento(53,14,"&nbsp*")

parede(55,57,15,46,"&nbsp*")

addElemento(56,15,"&nbsp")

parede(36,57,46,56,"&nbsp*")
addElemento(56,46,"&nbsp")

preencher(44,44,10,15,"&nbsp*")




addElemento(26,58,"&nbsp#")
addElemento(27,53,"&nbsp#")
addElemento(31,54,"&nbsp#")
addElemento(30,56,"&nbsp#")
addElemento(31,55,"&nbsp#")
addElemento(29,50,"&nbsp#")
addElemento(29,49,"&nbsp#")

preencher(32,33,41,42,"&nbsp#")
addElemento(34,35,"&nbsp#")
addElemento(32,36,"&nbsp#")
addElemento(31,37,"&nbsp#")
addElemento(28,41,"&nbsp#")
preencher(24,25,35,36,"&nbsp#")
addElemento(24,36,"&nbsp")

addElemento(15,40,"&nbsp#")
preencher(12,13,41,41,"&nbsp#")
addElemento(11,44,"&nbsp#")

addElemento(10,48,"&nbsp#")

addElemento(30,30,"&nbsp#")
addElemento(31,29,"&nbsp#")
preencher(29,30,27,27,"&nbsp#")
preencher(30,30,24,25,"&nbsp#")
preencher(32,33,25,25,"&nbsp#")
addElemento(35,24,"&nbsp#")
preencher(37,39,25,25,"&nbsp#")
addElemento(41,24,"&nbsp#")
addElemento(43,24,"&nbsp#")
addElemento(42,26,"&nbsp#")
addElemento(41,28,"&nbsp#")
addElemento(43,28,"&nbsp#")
addElemento(42,30,"&nbsp#")
addElemento(39,29,"&nbsp#")
preencher(36,37,30,30,"&nbsp#")

addElemento(43,40,"&nbsp#")
addElemento(48,41,"&nbsp#")
preencher(51,51,40,41,"&nbsp#")
addElemento(48,32,"&nbsp#")
addElemento(50,27,"&nbsp#")
preencher(47,48,20,20,"&nbsp#")
addElemento(34,19,"&nbsp#")

addElemento(17,20,"&nbsp#")
addElemento(14,25,"&nbsp#")
addElemento(15,28,"&nbsp#")
addElemento(16,34,"&nbsp#")
addElemento(10,33,"&nbsp#")
addElemento(7,33,"&nbsp#")
addElemento(3,34,"&nbsp#")
addElemento(3,30,"&nbsp#")
addElemento(4,21,"&nbsp#")
preencher(4,5,11,11,"&nbsp#")
addElemento(4,5,"&nbsp#")
addElemento(12,4,"&nbsp#")
addElemento(15,6,"&nbsp#")
addElemento(19,4,"&nbsp#")
preencher(18,20,14,14,"&nbsp#")

addElemento(25,15,"&nbsp#")
addElemento(30,14,"&nbsp#")
addElemento(37,14,"&nbsp#")
addElemento(36,5,"&nbsp#")
addElemento(40,4,"&nbsp#")
addElemento(42,6,"&nbsp#")
addElemento(46,4,"&nbsp#")
preencher(51,52,5,5,"&nbsp#")
addElemento(56,8,"&nbsp#")
addElemento(48,14,"&nbsp#")
addElemento(47,11,"&nbsp#")
preencher(45,46,15,15,"&nbsp#")

preencher(25,32,3,9,"&nbsp#")
addElemento(30,9,"&nbsp")
addElemento(31,9,"&nbsp")
addElemento(31,8,"&nbsp")
addElemento(31,7,"&nbsp")
addElemento(30,7,"&nbsp")
addElemento(29,7,"&nbsp")
addElemento(29,8,"&nbsp")
addElemento(28,8,"&nbsp")
addElemento(27,8,"&nbsp")
addElemento(27,7,"&nbsp")
addElemento(26,7,"&nbsp")
addElemento(25,7,"&nbsp")
addElemento(25,6,"&nbsp")
addElemento(25,5,"&nbsp")
addElemento(26,5,"&nbsp")
addElemento(26,4,"&nbsp")
addElemento(26,3,"&nbsp")
addElemento(27,3,"&nbsp")
addElemento(28,3,"&nbsp")
addElemento(28,4,"&nbsp")
addElemento(28,5,"&nbsp")
addElemento(29,5,"&nbsp")
addElemento(30,5,"&nbsp")










}
//================================================



pLinha = 29
pColuna = 58

ci = "&nbsp"

document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&"



//=========== ITENS ======================================================

map[29][55] = "&nbspX"
document.getElementById("l29.55").innerHTML = "&nbspX"
cor(29,55,"red")

map[30][31] = "&nbspX"
document.getElementById("l30.31").innerHTML = "&nbspX"
cor(30,31,"red")

addElemento(10,51,"&nbspX")
cor(10,51,"red")


addElemento(40,41,"&nbspX")
cor(40,41,"red")

addElemento(55,47,"&nbspX")
cor(55,47,"red")

addElemento(16,26,"&nbspX")
cor(16,26,"red")

addElemento(27,13,"&nbspX")
cor(27,13,"red")

addElemento(55,10,"&nbspX")
cor(55,10,"red")


addElemento(11,52,"&nbspD")
cor(11,52,"#068DA9")

addElemento(29,35,"+")
cor(29,35,"#E96479")  
addElemento(29,36,"@")
cor(29,36,"#E55807")
addElemento(29,39,"O")
cor(29,39,"#B8621B")
addElemento(5,45,"&nbsp>")
cor(5,45,"#2CD3E1")
addElemento(37,51,"&nbsp<")
cor(37,51,"#2CD3E1")

addElemento(49,10,"+")
map[49][10] = "+1"
cor(49,10,"pink")

addElemento(51,14,"O")
cor(51,14,"#B8621B")

addElemento(8,56,"O")
cor(8,56,"#B8621B")
addElemento(14,56,"O")
cor(14,56,"#B8621B")

addElemento(55,51,"O")
cor(55,51,"#B8621B")
//========================================================================





window.addEventListener("keydown", (k) => 
{
   
    if(k.code == 'KeyW')
    {
        
        if(map[pLinha - 1][pColuna] == "&nbsp*"||map[pLinha - 1][pColuna] == "&nbspD")
        {
            //Nada acontece
        }
        else if(map[pLinha - 1][pColuna] == "&nbsp#"||map[pLinha - 1][pColuna] == "%")
        {
            morte()
        }
        else if(map[pLinha - 1][pColuna] == "&nbsp>" || map[pLinha - 1][pColuna] == "&nbsp<"){
            teleport()
        }
        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
            pLinha--
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
        }
    }

    else if(k.code == 'KeyS')
    {
        if(map[pLinha + 1][pColuna] == "&nbsp*"||map[pLinha + 1][pColuna] == "&nbspD")
        {
            //Nada acontece
        }
        else if(map[pLinha + 1][pColuna] == "&nbsp#"||map[pLinha + 1][pColuna] == "%")
        {
            morte()
        }
        else if(map[pLinha + 1][pColuna] == "&nbsp>"||map[pLinha + 1][pColuna] == "&nbsp<")
        {
           teleport()
        }
        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
            pLinha++
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
        }
    }

    else if(k.code == 'KeyD')
    {
        if(map[pLinha][pColuna + 1] == "&nbsp*"||map[pLinha][pColuna + 1] == "&nbspD"){
            //Nada acontece
        }
        else if(map[pLinha][pColuna + 1] == "&nbsp#"||map[pLinha][pColuna + 1] == "%")
        {
            morte()
        }
        else if(map[pLinha][pColuna + 1] == "&nbsp>"||map[pLinha][pColuna + 1] == "&nbsp<"){
            teleport()
        }
        else{
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
            pColuna++
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
        }
    }

    else if(k.code == 'KeyA')
    {
        if(map[pLinha][pColuna - 1] == "&nbsp*"||map[pLinha][pColuna - 1] == "&nbspD")
        {
            //Nada acontece
        }
        else if(map[pLinha][pColuna - 1] == "&nbsp#"||map[pLinha][pColuna - 1] == "%")
        {
            morte()
        }
        else if(map[pLinha][pColuna - 1] == "&nbsp>"||map[pLinha][pColuna - 1] == "&nbsp<"){
            teleport()
        }
        else
        {
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
            pColuna--
            ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
            document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
        }
    }
    else if(k.code == 'KeyI')
    {
        console.log(ci)
        console.log(map[pLinha][pColuna])
        if(ci=="$"){
            ci = "&nbsp"
            frag++
            alert("Plin!")
            cor(pLinha,pColuna,'#FFDD5C')
        }
        //BOMBAS
        else if(ci=="&nbsp;"&&bombCarry==1){
            bombCarry = 0
            map[pLinha][pColuna] = "+1"
            ci="+"
            cor(pLinha,pColuna,'pink')
        }
        else if(ci=="+"&&bombCarry==0){
            bombCarry = 1
            map[pLinha][pColuna] = "&nbsp"
            ci="&nbsp"
            cor(pLinha,pColuna,'#FFDD5C')
        }
        //BUTTONS
        if(ci=="O"){
            if(pLinha==51&&pColuna==14){
                cabum()
                alert("BOOM!")
                cor(pLinha,pColuna,'#FFDD5C')
            }
            else if(pLinha==55&&pColuna==51){
                ci = "&nbsp"
                preencher(41,46,47,55,"&nbsp")
                alert("BOOM!")
                cor(pLinha,pColuna,'#FFDD5C')
            }
        }


        if (pLinha==29&&pColuna==55)
        {
            alert('ALERTA!!! Os espinhos e monstros estão camuflados, cuidado!');
        }
        
        if (pLinha==30&&pColuna==31)
        {
            alert('1° fragmento da chave se encontra ao final do tunel de espinhos.');
        }
        
        if (pLinha==10&&pColuna==51)
        {
            alert('Perigo! Monstro muito esperto, não deixe ele te alcançar. Rodeie ele até os botões estarem pressionados.');
        }
        
        if (pLinha==40&&pColuna==41)
        {
            alert('Todo cuidado é pouco! Se levar dano, volta ao inicio. Esteja avisado.');
        }
        
        if (pLinha==55&&pColuna==47)
        {
            alert('Aperte o botão para encontrar o portal!');
        }
        
        if (pLinha==16&&pColuna==26)
        {
            alert('2° fragmento da chave se encontra ao no meio dos monstros.');
        }
        
        if (pLinha==27&&pColuna==13)
        {
            alert('3° fragmento da chave se enconta no final do labirinto de espinhos.');
        }
        if (pLinha==55&&pColuna==10)
        {
            alert('4° fragmento da chave se encontra atrás da parede. Pegue a bomba e exploda!');
        }



    }
    if(mortes==3){
        window.location.replace("game over.html")
        
    }
    if(frag==4){
        addElemento(11,52,"=")
        frag = ""
        alert("Cliclác!")
    }
    if(pColuna==59){
        window.location.replace("victory.html")
    }
})



function morte() 
{
    document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
    pLinha = 29;
    pColuna = 58;
    ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
    document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
    mortes++
}

//5,45
//37,51
function teleport() 
{
    alert("Zzzap!")
    document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
    
    if(pLinha>=4&&pLinha<=6&&pColuna>=44&&pColuna<=46)
    {
        pLinha = 37
        pColuna = 51
    }

    else{
        pLinha = 5
        pColuna = 45
    }

    ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
    document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
}




function preencher(dessaLinha, paraLinha, dessaColuna, paraColuna, elemento)
{

    for(i=dessaLinha;i<=paraLinha;i++)
    {
        for(j=dessaColuna;j<=paraColuna;j++)
        {
            map[i][j] = elemento
            document.getElementById(`l${i}.${j}`).innerHTML = map[i][j]
        }
    }
    
}

function addElemento(linha,coluna,elemento)
{
    map[linha][coluna] = elemento
    document.getElementById(`l${linha}.${coluna}`).innerHTML = map[linha][coluna]
}



function parede(dessaLinha, paraLinha, dessaColuna, paraColuna, elemento)
{
    
    for(i=dessaLinha;i<=paraLinha;i++)
    {
        for(j=dessaColuna;j<=paraColuna;j++)
        {
            if(i==dessaLinha||i==paraLinha||j==dessaColuna||j==paraColuna)
            {
                map[i][j] = elemento
                document.getElementById(`l${i}.${j}`).innerHTML = map[i][j]
            }
                
        }
    }
}

function quebraChave() {
    addElemento(29,35,"&nbsp")
    addElemento(29,36,"&nbsp")
    addElemento(29,39,"&nbsp")

    addElemento(24,27,"$")
    cor(24,27,"#E55807")
    addElemento(35,29,"$")
    cor(35,29,"#E55807")
    addElemento(30,5,"$")
    cor(30,5,"#E55807")
    addElemento(42,13,"$")
    cor(42,13,"#E55807")
}


//========================MOBS==================================

var monstro1 = 24 //39
var m1 = 0

var monstro2 = 21 //25
var m2 = 0

var monstro3 = 20 //29
var m3 = 0

var monstro4 = 27 //19
var m4 = 0

var monstro5 = 26 //23
var m5 = 0

window.setInterval(mob1,250)
window.setInterval(mob2,250)
window.setInterval(mob3,250)
window.setInterval(mob4,250)
window.setInterval(mob5,250)





function mob1(params) {
    if(m1==0&&map[monstro1+1][39]!="&nbsp*"){
        
        addElemento(monstro1,39,"&nbsp")
        monstro1++
        if(monstro1 == pLinha&&pColuna==39){
            morte()
        }
        if(map[monstro1][39]=="O"){
            quebraChave()
            alert('BOOM!')
            alert("Atenção! o monstro destruiu sua chave! Ache os 4 pedaços para abrir a porta.")
        }
        addElemento(monstro1,39,"%")
    }
    else if(map[monstro1+1][39]=="&nbsp*"){
        m1 = 1;
    }
    //------------------------------------
    if(m1==1&&map[monstro1-1][39]!="&nbsp*"){
        
        addElemento(monstro1,39,"&nbsp")
        monstro1--
        if(monstro1 == pLinha&&pColuna==39){
            morte()
        }
        addElemento(monstro1,39,"%")
    }
    else if(map[monstro1-1][39]=="&nbsp*"){
        m1 = 0;
        mob1()
    }
}

function mob2(params) {
    if(m2==0&&map[monstro2+1][25]!="&nbsp*"){
        
        addElemento(monstro2,25,"&nbsp")
        monstro2++
        if(monstro2 == pLinha&&pColuna==25){
            morte()
        }
        addElemento(monstro2,25,"%")
    }
    else if(map[monstro2+1][25]=="&nbsp*"){
        m2 = 1;
    }
    //------------------------------------
    if(m2==1&&map[monstro2-1][25]!="&nbsp*"){
        
        addElemento(monstro2,25,"&nbsp")
        monstro2--
        if(monstro2 == pLinha&&pColuna==25){
            morte()
        }
        addElemento(monstro2,25,"%")
    }
    else if(map[monstro2-1][25]=="&nbsp*"){
        m2 = 0;
        mob2()
    }
}

function mob3(params) {
    if(m3==0&&map[monstro3+1][29]!="&nbsp*"){
        
        addElemento(monstro3,29,"&nbsp")
        monstro3++
        if(monstro3 == pLinha&&pColuna==29){
            morte()
        }
        addElemento(monstro3,29,"%")
    }
    else if(map[monstro3+1][29]=="&nbsp*"){
        m3 = 1;
    }
    //------------------------------------
    if(m3==1&&map[monstro3-1][29]!="&nbsp*"){
        
        addElemento(monstro3,29,"&nbsp")
        monstro3--
        if(monstro3 == pLinha&&pColuna==29){
            morte()
        }
        addElemento(monstro3,29,"%")
    }
    else if(map[monstro3-1][29]=="&nbsp*"){
        m3 = 0;
        mob3()
    }
}

function mob4(params){
    if(m4==0&&map[19][monstro4+1]!="&nbsp*"){
        
        addElemento(19,monstro4,"&nbsp")
        monstro4++
        if(19==pLinha&&pColuna==monstro4){
            morte()
        }
        addElemento(19,monstro4,"%")
    }
    else if(map[19][monstro4+1]=="&nbsp*"){
        m4 = 1;
    }
    //------------------------------------
    if(m4==1&&map[19][monstro4-1]!="&nbsp*"){
        
        addElemento(19,monstro4,"&nbsp")
        monstro4--
        if(19 == pLinha&&pColuna==monstro4){
            morte()
        }
        addElemento(19,monstro4,"%")
    }
    else if(map[19][monstro4-1]=="&nbsp*"){
        m4 = 0;
        mob4()
    }
}

function mob5(params){
    if(m5==0&&map[23][monstro5+1]!="&nbsp*"){
        
        addElemento(23,monstro5,"&nbsp")
        monstro5++
        if(23==pLinha&&pColuna==monstro5){
            morte()
        }
        addElemento(23,monstro5,"%")
    }
    else if(map[23][monstro5+1]=="&nbsp*"){
        m5 = 1;
    }
    //------------------------------------
    if(m5==1&&map[23][monstro5-1]!="&nbsp*"){
        
        addElemento(23,monstro5,"&nbsp")
        monstro5--
        if(23 == pLinha&&pColuna==monstro5){
            morte()
        }
        addElemento(23,monstro5,"%")
    }
    else if(map[23][monstro5-1]=="&nbsp*"){
        m5 = 0;
        mob5()
    }
}


function cabum() {
    for(i=0;i<60;i++){
        for(j=0;j<60;j++){
            if(map[i][j]=="+1"){
                preencher(i-1,i+1,j-1,j+1,"&nbsp")
            }
        }
    }
}

function saida(){
    preencher(10,12,59,59,"&nbsp")
}




window.setInterval(chama,500)

function chama(params) {
    if(pLinha>3&&pLinha<19&&pColuna>53&&pColuna<59){
        monsterFollow(pLinha,pColuna)
    }
    else{
        monsterFollow(11,57)
    }
}

var mobMove;
var mobLinha;
var mobColuna;
mobLinha = 11;
mobColuna = 57;
mobMove = "&nbsp"

function monsterFollow(linha,coluna) {
    document.getElementById(`l${mobLinha}.${mobColuna}`).innerHTML = mobMove
    map[mobLinha][mobColuna] = mobMove
    mi = Math.floor(Math.random()*2)
    if(linha==mobLinha){
        if(coluna<mobColuna){
            mobColuna--
        }
        else if(coluna>mobColuna){
            mobColuna++
        }
    }
    else if(coluna==mobColuna){
        if(linha<mobLinha){
        mobLinha--
    }
        else if(linha>mobLinha){
            mobLinha++
        }
    }
    else if(linha<mobLinha&&coluna<mobColuna){
        if(mi==0){
            mobLinha--
        }
        else if(mi==1){
            mobColuna--
        }
    }
    else if(linha<mobLinha&&coluna>mobColuna){
        if(mi==0){
            mobLinha--
        }
        else if(mi==1){
            mobColuna++
        }
    }
    else if(linha>mobLinha&&coluna<mobColuna){
        if(mi==0){
            mobLinha++
        }
        else if(mi==1){
            mobColuna--
        }
    }
    else if(linha>mobLinha&&coluna>mobColuna){
        if(mi==0){
            mobLinha++
        }
        else if(mi==1){
            mobColuna++
        }
    }
    if(pLinha==mobLinha&&pColuna==mobColuna){
        morte()
    }
    mobMove = document.getElementById(`l${mobLinha}.${mobColuna}`).innerHTML
    if(mobMove=="O"){
        addElemento(mobLinha,mobColuna,"&nbsp")
        mobMove = "&nbsp"
        boraEmbora++
        if(boraEmbora==2){
            saida()
        }
    }
    document.getElementById(`l${mobLinha}.${mobColuna}`).innerHTML = "%"
    map[mobLinha][mobColuna] = "%"
    
}


function cor(linha,coluna,color) {
    document.getElementById(`l${linha}.${coluna}`).style = `color: ${color}`
    
}
