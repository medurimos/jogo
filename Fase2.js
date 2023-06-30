var map;
var i;
var j;
var pLinha;
var pColuna;
var ci;
var mortes;

mortes = 0;
map = [];

    for(i=0;i<30;i++)
    {
        document.getElementById("map").innerHTML += `<tr id='l${i}'></tr>`;
        map[i] = [];

        for(j=0;j<30;j++)
        {
            map[i][j] = "&nbsp"
            document.getElementById(`l${i}`).innerHTML += `<td id='l${i}.${j}'>${map[i][j]}</td>`
        }
    }

    for(i=0;i<30;i++)
    {
        for(j=0;j<30;j++)
        {
            if(i==0||j==0||i==29||j==29||(j>=26&&j<=28&&i==19)||(i>=11&&i<=18&&j==26)||(i>=9&&i<=11&&j==25)||(i>=4&&i<=9&&j==26)||(j>=18&&j<=25&&i==4)||(i>=5&&i<=9&&j==18)||(j>=19&&j<=22&&i==9)||(i>=9&&i<=11&&j==23)||(j>=16&&j<=22&&i==11)||(i>=11&&i<=12&&j==15)||(j>=12&&j<=14&&i==12)||(i>=11&&i<=12&&j==15)||(i>=3&&i<=11&&j==12)||(j>=3&&j<=11&&i==3)||(i>=4&&i<=15&&j==3)||(j>=3&&j<=6&&i==15)||(i>=16&&i<=25&&j==6)||(j>=1&&j<=5&&i==25)||(i>=14&&i<=16&&j==15)||(j>=16&&j<=21&&i==16)||(i>=16&&i<=19&&j==22)||(j>=18&&j<=21&&i==19)||(i>=20&&i<=28&&j==18))
            {
                map[i][j] = "&nbsp*"
                document.getElementById(`l${i}.${j}`).innerHTML = map[i][j]
            }

            else if((i>=27&&i<=27&&j==28)||(i>=22&&i<=22&&j==20)||(i>=21&&i<=21&&j==25)||(i>=26&&i<=27&&j==20)||(i>=23&&i<=24&&j==26)||(i>=23&&i<=25&&j==24)||(i>=25&&i<=25&&j==25) ||(j>=23&&j<=25&&i==19)||(i>=14&&i<=14&&j==25)||(i>=13&&i<=13&&j==21)||(i>=14&&i<=14&&j==17)||(i>=5&&i<=5&&j==25)||(i>=8&&i<=8&&j==21)||(i>=5&&i<=5&&j==5) ||(i>=5&&i<=6&&j==9)||(i>=13&&i<=13&&j==21)||(i>=7&&i<=8&&j==10)||(i>=8&&i<=8&&j==9)||(i>=13&&i<=13&&j==21)||(j>=4&&j<=5&&i==7)||(j>=7&&j<=8&&i==12)||(i>=13&&i<=13&&j==9)||(i>=16&&i<=17&&j==12)||(i>=16&&i<=17&&j==13)||(i>=21&&i<=21&&j==16)||(i>=23&&i<=24&&j==8)||(j>=9&&j<=10&&i==25)||(i>=28&&i<=28&&j==11)||(i>=23&&i<=24&&j==13)||(i>=24&&i<=26&&j==14)||(i>=26&&i<=26&&j==13)||(i>=26&&i<=28&&j==6))
            {
                map[i][j] = "&nbsp#"
                cor(i,j,"#41644A")
                document.getElementById(`l${i}.${j}`).innerHTML = map[i][j]
            }
        }
    }

pLinha = 28; 
pColuna = 24;

ci = "&nbsp"

    document.getElementById(`l28.24`).innerHTML = "&nbsp&";
    
//------------------------------------------------------------------------
    //BOMBA 1
    map[24][21] = "O"
    document.getElementById("l24.21").innerHTML = "O"
    cor(24,21,"#B8621B")
    map[18][24] = "&nbsp+"
    document.getElementById("l18.24").innerHTML = "&nbsp+"
    cor(18,24,"#E96479")
    
    
    //GATE 1
    map[6][20] = "&nbsp@"
    document.getElementById("l6.20").innerHTML = "&nbsp@"
    cor(6,20,"#E55807")
    map[13][15] = "&nbspD"
    document.getElementById("l13.15").innerHTML = "&nbspD"
    cor(13,15,"#068DA9")
    
    
    //BOMBA 2
    map[4][4] = "O"
    document.getElementById("l4.4").innerHTML = "O"
    cor(4,4,"#B8621B")

    map[27][7] = "&nbsp+"
    document.getElementById("l27.7").innerHTML = "&nbsp+"
    cor(27,7,"#E96479")   
    
    
    //EXIT
    map[27][0] = "&nbsp"
    document.getElementById("l27.0").innerHTML = "&nbsp"




    map[27][23] = "&nbspX"
    document.getElementById("l27.23").innerHTML = "&nbspX"
    cor(27,23,"red")

    map[14][23] = "&nbspX"
    document.getElementById("l14.23").innerHTML = "&nbspX"
    cor(14,23,"red")

    map[14][12] = "&nbspX"
    document.getElementById("l14.12").innerHTML = "&nbspX"
    cor(14,12,"red")

    map[27][2] = "&nbspX"
    document.getElementById("l27.2").innerHTML = "&nbspX"
    cor(27,2,"red")


//------------------------------------------------------------------------

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
            //CHAVES-E-PORTAS
            if(pLinha==6&&pColuna==20&&ci=="&nbsp;@"){
                document.getElementById("l13.15").innerHTML = "&nbsp="
                map[13][15] = "&nbsp="
                ci = "&nbsp"
                alert("Cliclác!")
                cor(pLinha,pColuna,'#FFDD5C')
            }
            //BUTTONS
            if(pLinha==24&&pColuna==21&&ci=="O"){
                for(i=17;i<=19;i++){
                    for(j=23;j<=25;j++){
                        document.getElementById(`l${i}.${j}`).innerHTML = "&nbsp"
                        map[i][j] = "&nbsp"
                    }
                }
                ci = "&nbsp"
                alert("BOOM!")
                cor(pLinha,pColuna,'#FFDD5C')
            }
            if(pLinha==4&&pColuna==4&&ci=="O"){
                for(i=26;i<=28;i++){
                    for(j=6;j<=8;j++){
                        document.getElementById(`l${i}.${j}`).innerHTML = "&nbsp"
                        map[i][j] = "&nbsp"
                    }
                }
                ci = "&nbsp"
                alert("BOOM!")
                cor(pLinha,pColuna,'#FFDD5C')
            }

            if (pLinha==27&&pColuna==23)
            {
                alert('Cuidado! O botão a frente vai explodir a bomba.');
            }
    
            if (pLinha==14&&pColuna==23)
            {
                alert('A chave para abrir a porta a dirita se encontra logo a cima.');
            }
    
            if (pLinha==14&&pColuna==12)
            {
                alert('Perigo! Tome cuidado no seu trajeto até a bomba lá em cima. Monstros e espinhos, melhor evitar.');
            }

            if (pLinha==27&&pColuna==2)
            {
                alert('Atemção!!! Proxima fase pode ser um pouco mais dificil.');
            }

        }
        if(mortes==3){
            window.location.replace("game over.html")
            
        }
        if(pLinha == 27&&pColuna == 0){
            window.location.replace("Fase3.html")
        }
    })

 
    function morte() {
        document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = ci
        pLinha = 28;
        pColuna = 24;
        ci = document.getElementById(`l${pLinha}.${pColuna}`).innerHTML
        document.getElementById(`l${pLinha}.${pColuna}`).innerHTML = "&nbsp&"
        mortes++
    }
    
window.setInterval(monster1,250)
window.setInterval(monster2,250)
window.setInterval(monster3,250)
window.setInterval(monster4,200)

var m1,m2,m3,m4
var mob1,mob2,mob3,mob4

m1 = 0;
m2 = 0;
m3 = 0;
m4 = 0;

mob1 = 6 //23
mob2 = 13 //19

mob3 = 5 //10
mob4 = 8 //19

//MONSTRO 1
function monster1(params) {
    if(m1==0&&map[mob1+1][23]=="&nbsp"||map[mob1+1][23]=="&"&&m1==0){
    document.getElementById(`l${mob1}.23`).innerHTML = "&nbsp"
    map[mob1][23] = "&nbsp"
    mob1++
    if(mob1 == pLinha&&pColuna==23){
        morte()
        }
    document.getElementById(`l${mob1}.23`).innerHTML = "<span style='color: #E6D2AA;'>%</span>";
    map[mob1][23] = "%";
    }
    else if(map[mob1+1][23]=="&nbsp*"){
        m1 = 1;
    }
    //------------------------------------
    if(m1==1&&map[mob1-1][23]=="&nbsp"||map[mob1-1][23]=="&"&&m1==1){
        document.getElementById(`l${mob1}.23`).innerHTML = "&nbsp"
        map[mob1][23] = "&nbsp"
        mob1--
        if(mob1 == pLinha&&pColuna==23){
            morte()
            }
        document.getElementById(`l${mob1}.23`).innerHTML = "<span style='color: #E6D2AA;'>%</span>";
        map[mob1][23] = "%"
        }
        else if(map[mob1-1][23]=="&nbsp*"){
            m1 = 0;
            monster1()
        }
    
    
}
//MONSTRO 2
function monster2(params) {
    if(m2==0&&map[mob2+1][19]=="&nbsp"||map[mob2+1][19]=="&"&&m2==0){
    document.getElementById(`l${mob2}.19`).innerHTML = "&nbsp"
    map[mob2][19] = "&nbsp"
    mob2++
    if(mob2 == pLinha&&pColuna==19){
        morte()
        }
    document.getElementById(`l${mob2}.19`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
    map[mob2][19] = "%"
    }
    else if(map[mob2+1][19]=="&nbsp*"){
        m2 = 1;
    }
    //------------------------------------
    if(m2==1&&map[mob2-1][19]=="&nbsp"||map[mob2-1][19]=="&"&&m2==1){
        document.getElementById(`l${mob2}.19`).innerHTML = "&nbsp"
        map[mob2][19] = "&nbsp"
        mob2--
        if(mob2 == pLinha&&pColuna==19){
            morte()
            }
        document.getElementById(`l${mob2}.19`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
        map[mob2][19] = "%"
        }
        else if(map[mob2-1][19]=="&nbsp*"){
            m2 = 0;
            monster2()
        }
    
    
}
//MONSTRO 3
function monster3(params) {
    if(m3==0&&map[10][mob3+1]=="&nbsp"||map[10][mob3+1]=="&"&&m3==0){
    document.getElementById(`l10.${mob3}`).innerHTML = "&nbsp"
    map[10][mob3] = "&nbsp"
    mob3++
    if(10 == pLinha&&pColuna==mob3){
        morte()
        }
    document.getElementById(`l10.${mob3}`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
    map[10][mob3] ="%"
    }
    else if(map[10][mob3+1]=="&nbsp*"){
        m3 = 1;
    }
    //------------------------------------
    if(m3==1&&map[10][mob3-1]=="&nbsp"||map[10][mob3-1]=="&"&&m3==1){
        document.getElementById(`l10.${mob3}`).innerHTML = "&nbsp"
        map[10][mob3] = "&nbsp"
        mob3--
        if(10 == pLinha&&pColuna==mob3){
            morte()
            }
        document.getElementById(`l10.${mob3}`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
        map[10][mob3] = "%"
        }
        else if(map[10][mob3-1]=="&nbsp*"){
            m3 = 0;
            monster3()
        }
    
    
}
//MONSTRO 4
function monster4(params) {
    if(m4==0&&map[19][mob4+1]=="&nbsp"||map[19][mob4+1]=="&"&&m4==0){
        document.getElementById(`l19.${mob4}`).innerHTML = "&nbsp"
        map[19][mob4] = "&nbsp"
        mob4++
        if(19 == pLinha&&pColuna==mob4){
            morte()
            }
        document.getElementById(`l19.${mob4}`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
        map[19][mob4] = "%"
        }
        else if(map[19][mob4+1]=="&nbsp*"){
            m4 = 1;
        }
        //------------------------------------
        if(m4==1&&map[19][mob4-1]=="&nbsp"||map[19][mob4-1]=="&"&&m4==1){
            document.getElementById(`l19.${mob4}`).innerHTML = "&nbsp"
            map[19][mob4] = "&nbsp"
            mob4--
            if(19 == pLinha&&pColuna==mob4){
                morte()
                }
            document.getElementById(`l19.${mob4}`).innerHTML = "<span style='color: #E6D2AA;'>%</span>"
            map[19][mob4] = "%"
            }
            else if(map[19][mob4-1]=="&nbsp*"){
                m4 = 0;
                monster4()
            }
    
    
}


function cor(linha,coluna,color) {
    document.getElementById(`l${linha}.${coluna}`).style = `color: ${color}`
}
