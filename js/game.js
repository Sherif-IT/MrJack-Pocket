//objet plateau
 var plateau = {
 //le nom des personnges detective
  detectives : ['chien','watson','holmes'],
  //les 25 tuiles du plateau
  totTuiles: [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],
  //les tuiles position des detectives
  tuilesDetectives : [24,20,15,10,4,3,2,6,11,16,22,23],
  //les 3 positions initiales des detectives
  tuilesDetectivesInit : [6,10,23],
  //les 9 tuiles representant les districts 
  tuilesDistrict : [7,8,9,12,13,14,17,18,19],
  //les 9 personnages alibi
  personnagesAlibi : [1,2,3,4,5,6,7,8,9],
 //orienter correctement les cases des tuiles 7 9 et 18, les cases des autres tuile aleatoirement
 initierCases: function (idTuile,noeudTuile){
       //positionner le Mur a gauche pour la tuile 7 (face a watson)
       if(idTuile===7){ 
         this.setMurOvest(noeudTuile);
       }
       //positionner le Mur a droite pour la tuile 9 (face a holmes)
       else if(idTuile===9){
         this.setMurEst(noeudTuile);
       }
       //positionner le Mur en bas pour la tuile 18 (face au chien)
       else if(idTuile===18){
         this.setMurSud(noeudTuile);
       }
       //positionner le Mur aleatoirement pour les autres tuiles
       else{
         let n = Math.floor(Math.random()*4);
         switch (n) {
           case 1:
             this.setMurOvest(noeudTuile);
             break;
           case 2:
             this.setMurEst(noeudTuile);
             break;
           case 3:
             this.setMurNord(noeudTuile);
             break;
           default:
             this.setMurSud(noeudTuile);
             break;
         }
       }
     },
 checkNSetClass : function (nT, clss) {
   //enlever la classlist [2] (orientation)  si elle existe  bien
     nT.classList.toggle(nT.classList.item(2),false);
   //attribuer une classe designant l'orientation de la tuile 
     nT.classList.toggle(clss, true);
 },
 // inserer l'image avec personnage de la tuile  
 insererImagePersonnage:  function (noeudTuile, mur){
       let cnt = 0;
       
       let n = noeudTuile.classList.item(0);//recuperer la classe css indiquant le personnage
       var noeudImageTuile =  construireElement('IMG', 'tuileDistrict'+n , 'tuileDistrict', null,'tuiles/'+mur+'/tuile'+n);//creer noeud pion detective 
       adjustImg(noeudImageTuile,150,150,null)
       noeudTuile.appendChild(noeudImageTuile);
       //ajouter une classe pour expliciter la personne(avoid entry on this if block if classlist1 already exist)
       //if (noeudTuile.classList.item(1)==null) {
         if (n == 1) {
           noeudTuile.classList.add("JohnPizer"); 
         }
         else  if (n == 2) {
           noeudTuile.classList.add("JosephLane"); 
         }
         else  if (n == 3) {
           noeudTuile.classList.add("SgtGoodleyxcf"); 
         }
         else  if (n == 4) {
           noeudTuile.classList.add("JohnSmith"); 
         }
         else  if (n == 5) {
           noeudTuile.classList.add("Madame"); 
         }
         else  if (n == 6) {
           noeudTuile.classList.add("MissStealthy"); 
         }
         else  if (n == 7) {
           noeudTuile.classList.add("WillianGull"); 
         }
         else  if (n == 8) {
           noeudTuile.classList.add("InspLestrade"); 
         }
         else  if (n == 9) {
           noeudTuile.classList.add("JeremyBert"); 
         }
        //}
 },
 //positionner le Mur de la tuile en param sur le coté gauche
 setMurOvest : function (noeudTuile){
      // inserer l'image de la tuile personnage 
      this.insererImagePersonnage(noeudTuile,"murOvest");
       //gerer la classe : ajouter "murOvest" a cette tuile (la tuile est tourne vers la gauche) 
       this.checkNSetClass(noeudTuile,"murOvest");
       //construire les 9 cases pour le noeud tuile en parametre
       for (var c = 1; c <= 9; c++)
       {
         //positionnees correctement chaque case (chemins et murs)
         switch (c) {
             case 2: case 5: case 6: case 8:
             //les cases verticales du milieu et la case orizontale droite au milieu sont des chemins 
             var noeudCase = construireElement('div', 'i', 'sousCase Plenty', null,null);
             noeudTuile.appendChild(noeudCase);
             break;
         default:
             //les autres cases sont des murs
             var noeudCase = construireElement('div', 'o', 'sousCase Empty', null,null);
             noeudTuile.appendChild(noeudCase);
         }
       }
          return noeudTuile;

     },
 //positionner le mur de la tuile en param sur le coté droite
 setMurEst: function (noeudTuile) {
     // inserer l'image de la tuile personnage 
     this.insererImagePersonnage(noeudTuile,"murEst"); 
     
      //gerer la classe : ajouter "murOvest" a cette tuile (la tuile est tourne vers la gauche) 
      this.checkNSetClass(noeudTuile,"murEst");
      //construire les 9 cases pour le noeud tuile en parametre
       for (var c = 1; c <= 9; c++)
       {
         //positionner correctement chaque case (chemins et murs)
         switch (c) {
             case 2: case 5: case 4: case 8:
             //les cases verticales du milieu et la case orizontale gauche au milieu sont des chemins 
             var noeudCase = construireElement('div', 'i', 'sousCase Plenty', null,null);
             noeudTuile.appendChild(noeudCase);
             break;
         default:
             //les autres cases sont des murs
             var noeudCase = construireElement('div', 'o', 'sousCase Empty', null,null);
             noeudTuile.appendChild(noeudCase);
         }
       } 
        return noeudTuile;
     },
 //positionner le mur de la tuile en param en bas
 setMurSud : function (noeudTuile) {
       // inserer l'image de la tuile personnage 
       this.insererImagePersonnage(noeudTuile,"murSud");
       
       //gerer la classe : ajouter "murOvest" a cette tuile (la tuile est tourne vers la gauche) 
       this.checkNSetClass(noeudTuile,"murSud");
       //construire les 9 cases pour le noeud tuile en parametre
       for (var c = 1; c <= 9; c++)
       {
         //positionnees correctement chaque case (chemins et murs)
         switch (c) {
             case 4: case 5: case 6: case 2:
             //les cases orizontales du milieu et la case au milieu en haut sont des chemins 
             var noeudCase = construireElement('div', 'i', 'sousCase Plenty', null,null);
             noeudTuile.appendChild(noeudCase);
             break;
         default:
             //les autres cases sont des murs
             var noeudCase = construireElement('div', 'o', 'sousCase Empty', null,null);
             noeudTuile.appendChild(noeudCase);
         }
       }  
      return noeudTuile;

     },
 //positionner le mur de la tuile en param en haut
 setMurNord : function (noeudTuile) {
       // inserer l'image de la tuile personnage 
       this.insererImagePersonnage(noeudTuile,"murNord");
       
       //gerer la classe : ajouter "murOvest" a cette tuile (la tuile est tourne vers la gauche) 
       this.checkNSetClass(noeudTuile,"murNord");
       //construire les 9 cases pour le noeud tuile en parametre
       for (var c = 1; c <= 9; c++)
       {
         //positionnees correctement  chaque case (chemins et murs)
         switch (c) {
             case 4: case 5: case 6: case 8:
             //les cases orizontales du milieu et la case du milieu en bas sont des chemins 
             var noeudCase = construireElement('div', 'i', 'sousCase Plenty', null, null);
             noeudTuile.appendChild(noeudCase);
             break;
         default:
             //les autres cases sont des murs
             var noeudCase = construireElement('div', 'o', 'sousCase Empty', null, null);
             noeudTuile.appendChild(noeudCase);
         }
       }
       return noeudTuile;

     },    
 construirePlateau: function () {
         //parcourir la matrice du plateau(25 tuiles (5*5))
         for (var x = 0; x < this.totTuiles.length; x++) 
         {
           for (var y = 0; y < this.totTuiles.length; y++) 
           {
             //construire 5*5 noeuds tuiles 
             var n = this.totTuiles[x][y];
             var noeudTuile =  construireElement('div', n , null, null, null);
             //inserer chaque tuile dans le plateau 
             document.getElementById("plateau").appendChild(noeudTuile);
             //recuperer noeud tuile par son id 
             var idTuile = n;
             var noeudTuile =  document.getElementById(idTuile); 
             //les 3 tuiles detectives 6 10 et 23 recevront un pion detective au debut, les autres seront vides et pretes a en recevoir,
             if (this.tuilesDetectivesInit.includes(idTuile)) {
               var populate = this.detectives.pop();//recup nom detective
               var noeudPionDetective =  construireElement('IMG', 'drag'+populate , 'noeudPionDetective', null,'pionsDetectives/'+populate);//creer noeud pion detective 
               adjustImg(noeudPionDetective,150,150,10);
               noeudTuile.appendChild(noeudPionDetective);//positionner un pion detective dans la tuile
              }
             
             //pour chaque tuile district attribuer un personnage alibi qui correspondra a sa classe
             //pour chaque tuile district attribuer 9 enfants(cases ) ; positionner correctement chemins et mur en donnant une valeure "i" ou "o" a la case
             if (this.tuilesDistrict.includes(idTuile)) {
                 //gerer les personnages alibi
                 let lP = this.personnagesAlibi;
                 let alea = Math.floor(Math.random() * lP.length);
                 //attribuer des classe representant le personnage initial
                 noeudTuile.setAttribute('class', lP.splice(alea , 1 ));
                 //gerer les cases
                 this.initierCases(idTuile,noeudTuile);
             }
           }
         }
       }
 };
 //ajouster images
 function adjustImg(elt, wdt, hght, zIx) {
       if ( elt != null){
         if ( wdt != null)
           elt.setAttribute("width", wdt);
         if (hght != null)
           elt.setAttribute("height", hght);
         if (zIx != null)
           elt.setAttribute("z-index", zIx);
       }
 }
 //construire un element noeud
 function construireElement(elt, id, clss, inner, path)
   {
       var e = document.createElement(elt);
       if (id != null)
           e.setAttribute('id', id);
       if (clss != null)
           e.setAttribute('class', clss);
       if (inner != null)
           e.innerHTML = inner;
       if (path != null)
           e.setAttribute("src", "./images/" + path + ".png");
       return e;
   }
   //var j2 = new MrJack(prompt("vous serez MrJack, ecrivez votre nom","MrJack")) ;
      //objet jeu 
   var jeu = {
     j1 : new JDetective(prompt("vous serez le detective, ecrivez votre nom","JDetective")),
     j2 : new MrJack(prompt("vous serez MrJack, ecrivez votre nom","MrJack")) ,
     jCourant: Object,
     nTour : 1 ,
     maxTours : 8,
     personnagesSuspects : ["InspLestrade", "JeremyBert","JohnPizer","JohnSmith","JosephLane","Madame","MissStealthy", "SgtGoodleyxcf","WillianGull"],
     totPersonnages: new Array(),
     //suspects : [].concat(this.personnagesSuspects),//innocentes
     mrJack :  String ,
     actions: [["actionDepChien" ,"actionDepWhatson"],["actionRotation" ,"actionDepHolmes"],["actionRotation2" ,"actionSwap"],["actionDepHolmes" ,"actionSwap"]],
     actionsActives: new Array(),
     jGagnant: undefined,
     traque : Boolean,
     
     //initier le jeu
     initJeu : function (){
         
         this.totPersonnages =this.personnagesSuspects.slice();
         var tht = this;
         //construire plt
         plateau.construirePlateau();
         document.getElementsByClassName("mrJackCard")[0].innerHTML = this.j2.nom+ document.getElementsByClassName("mrJackCard")[0].innerHTML;

         //@onEvent: click ->mr jack piocher carte alibi 
         document.getElementsByClassName("piochCarteMrJack")[0].onclick = function(){  return tht.j2.piocherCarteAlibi(tht) }; 
         document.getElementById("lancerJetons").onclick = function(){  return tht.j1.lancerJetons(tht) };
         plateau.tuilesDetectives.forEach(element => {

           document.getElementById(element).classList.add("tuileDetective");


         });
       },
      
     buildActions : function () {
       //si tour = 1 inserer  jetons temps
         //si tour diffeent 1 activer le bon jeton temps
         //TODO METTRE DNS UNE FNC POUT UTILISER AVC TOURNER JETONS AUSSI
         if (this.nTour==1) {
           setTimeout(() => {
             //TODO afficher une boite puis//ou un  message indiquant que le temps se mettra en place 
             this.buildTemps(); 
           }, 3600);
           }
         else this.activateTemps();
         //
         this.actionsActives.forEach(act => {
                
         var imgAct = construireElement("img", act, "jeuJetons",null, "actions/"+act);
         adjustImg(imgAct,157,172);
         var frm = construireElement("div", "jeton"+act, null, null);
       
           //actions deplacer 3 inspecteurs
           if (act == "actionDep3") {
              imgAct.onclick = function(){ 
                document.getElementById(act).classList.add("activeJetonAction");
                 let inspect = ["dragchien", "dragholmes", "dragwatson"];
                 inspect.forEach(element => {
                   var pn = document.getElementById(element);
                   var idPn= pn.id;
                   //un pion est clique
                   pn.onclick = function () {
                     //on enleve l event listener sur les autres pions
                     inspect.forEach(insp => {
                       if (insp!=idPn) {
                         document.getElementById(insp).onclick = null;
                       }idPn
                       if (idPn == "dragchien") {
                         return jeu.jCourant.dep3("actionDep0.Chien");
                       }
                       else if (idPn == "dragholmes") {
                         return jeu.jCourant.dep3("actionDepHolmes");

                       }
                     
                     });                       
                   }
                 });
               }

         } 
         //actions deplacer inspecteurs
         if (act == "actionDep3") {
           imgAct.onclick = function(){ document.getElementById(act).classList.add("activeJetonAction"); return jeu.jCourant.dep3() };
         } 
         //actions deplacer inspecteurs
         if (act == "actionDepChien"|| act == "actionDepWhatson"||act == "actionDepHolmes") {
           imgAct.onclick = function(){ document.getElementById(act).classList.add("activeJetonAction"); return jeu.jCourant.depDetective(act) };
         } 
         //actions rotation
         if (act == "actionRotation" || act == "actionRotation2") {
           imgAct.onclick = function(){    
           let  aR =  document.getElementById(act);//noeud jeton action
           //construire 2 bouttons, pour rotation 90 ou 180 deg 
           let b90 = construireElement("button", "rot90", null, "90degre",null);  let b180 = construireElement("button", "rot180", null, "180degre",null);
           aR.after(b90); aR.after(b180);//inserer les boutons
           aR.classList.add("activeJetonAction"); aR.classList.add("rotation");
           aR.onclick = null;//desactiver @onclick
            b90.onclick = function () { return jeu.jCourant.rotation(90, aR); };
            b180.onclick = function () { return jeu.jCourant.rotation(180, aR); };

             };
         }
         //action echanger tuiles
         if (act == "actionSwap") {
           imgAct.onclick = function(){ document.getElementById(act).classList.add("activeJetonAction"); return jeu.jCourant.swap() };
         } 
         //inserer jeton dans le document
         frm.appendChild(imgAct);
         document.getElementsByClassName("jetonsAction row")[0].appendChild(frm);
         //getElementsByClassName("jetons row").children[i].appendChild(imgAct); 
         //onclicv=
         console.log(frm+ 
         this.actionsActives[i]+""+ this.actionsActives.length);

         });
      // }

     },
     buildTemps : function () {
       //var frm;
       for (let i = this.nTour/*1*/; i <= this.maxTours/*8*/; i++) {

         var imgTmp=construireElement("img", "temps"+i, "jeuTemps",null, "pionsTemps/temps"+i);
         var frm = construireElement("div", "tps"+this.nTour, null, null);
         adjustImg(imgTmp,112,125,5);

         frm.appendChild(imgTmp);
         document.getElementsByClassName("col-12 col-md-2 jetonsTemps")[0].appendChild(frm);
         //TODO activer bon jeton temps 
       }

     },
     activateTemps : function () {
       
     },
     appelATemoin : function () {
       //show  panel informztif : mr jzck est visible ou pas?
       let pnDtctv = ["dragchien", "dragholmes", "dragwatson"];
       let persoVisibles = new Array();
       let persoInvisibles = new Array();
       var visible = false;
       pnDtctv.forEach(pionDtctv => {
         pnDv = document.getElementById(pionDtctv);
         posPndv = parseInt( pnDv.parentNode.id);
         console.log(posPndv);
         //le detective est a gauche du plateau
         if (posPndv== 6||posPndv== 11||posPndv== 16){
             let lnVisi = true;
             i = 0;
             while (lnVisi  && i<3) { 

               let tuileP =  document.getElementById("plateau").childNodes[((posPndv-1)+(i+1))];
               //si le personn est visible
               lnVisi = chkSNVisibles(tuileP);
               console.log("tuiles to ck:"+tuileP+ i);
               i++;
             }
           }
           if (posPndv == 2||posPndv ==  3||posPndv == 4){//le detective est en haut du plateau
              let ln2Visi = true;
             i = 0;
             while (ln2Visi && i<3) {  
             //acceder aux tuiles apres le detective  
             tuileP =  document.getElementById("plateau").childNodes[((posPndv-1)+(5*(i+1)))];                    
             //si le personnage est visible, le personn suivants le seront aussi
             //si le personnage est invisible, le personn suivants le seront aussi
             ln2Visi = chkOEVisibles(tuileP); 
             console.log(i);

               i++;
             }  
           }
           if(posPndv== 10||posPndv== 15||posPndv== 20){//le detective est a droite du plateau
              let ln3visi = true;
             i = 0;
             while (ln3visi  && i<3) {  
             //acceder aux tuiles apres le detective  
             tuileP =  document.getElementById("plateau").childNodes[(posPndv-1)-(i+1)];                      
            //si le personn est visible

            ln3visi = chkSNVisibles(tuileP);
                 console.log(i);

               i++;
             }
           }
           if ( posPndv == 22||posPndv== 23||posPndv== 24){//le detective est en bas du plateau
           let ln4Visi = true;
             i = 0;
             while (ln4Visi && i<3) {  
             //acceder aux tuiles apres le detective 
             tuileP = document.getElementById("plateau").childNodes[( (posPndv-1)-(5*(i+1)))];                      
            ln4Visi = chkOEVisibles(tuileP); 
           console.log(i);
               i++;
             }   
           
         }
  
         console.log(posPndv);
       });
        //si mrjack fait partie des visibles 
        //retourner les tuiles non visibles 
        //eliminer les personnages tournes du jeu
        //le jeton temps est grise
        console.log(persoVisibles, ' ');
       if (visible) {
         console.log(" visble");
         let inf =document.getElementById("info").innerHTML = "<h5>Appel A temoin :  Mr Jack est visible<h5>"
           +"Personnages innocentes ";
         jeu.totPersonnages.forEach(psngg => {
           if (!persoVisibles.includes(psngg)) {
             inf.innerHTML +=   psngg;
             let ix=jeu.personnagesSuspects.indexOf(psngg);
             //innocenter et retourner les tuiles des personn invisibles
             console.log(psngg);
             if (!document.getElementsByClassName(psngg)[0].classList.contains("Vide")) {
             console.log(jeu.personnagesSuspects.splice(ix, 1));
             jeu.j1.retournerTuile(psngg);
           }      jeu.j1.retournerTuile(psngg);
           }
         });
         //
       }
       //si mr jack ne fait pas partie des visibles 
       //retourner les tuiles visibles
       //retourner tuile eliminera les personn tournes du jeu
       //mr jack gagne un jeton temps
       //le jeton temps et retourne sur sa face sablier    
       if (!visible ) {
         console.log("not visble");
         document.getElementById("info").innerHTML = "<h5>Appel a temoin  : Mr Jack est invisible<h5>"+
           "Personnages innocentes "+ persoVisibles;
         persoVisibles.forEach(psngg => {
           let ix=jeu.personnagesSuspects.indexOf(psngg);
            //innocenter et retourner les tuiles des personn visibles
            console.log(psngg);
           if (!document.getElementsByClassName(psngg)[0].classList.contains("Vide")) {
             console.log(jeu.personnagesSuspects.splice(ix, 1));
             jeu.j1.retournerTuile(psngg);
           }
            
         });
         jeu.j2.jetonsTemps++;
         s = document.getElementById("sabliers");
         s.innerText = jeu.j2.jetonsTemps;
       }
       //update affichage suspects restants
       sR= document.getElementById("suspectsRestants"); 
         sR.innerText = jeu.personnagesSuspects.length+1;
         
       //determiner s'il y a un gagnant
        //si tous le tablau personnages suspects est vide le detective est jGagnant
         //si le totSabliers de mrKack est egal a 6, mrJack est jGagnant²² 
         console.log(jeu.personnagesSuspects);
         if (jeu.personnagesSuspects.length == 0) {
           document.getElementById("info2").innerHTML = "<br><h5>le detective a gagné</h5>";
           jeu.jGagnant = jeu.j1;
         }
         else if (jeu.j2.jetonsTemps >= 6) {
           document.getElementById("info2").innerHTML = "<br><h4>mrJack a gagné</h4>";
           jeu.jGagnant = jeu.j2;
         }
         //1 tour de plus
         jeu.nTour ++;
         var  bRetJet = document.getElementById("retournerJetons");

         //si le tour est impair on retourne les jetons;
         if (jeu.nTour % 2 == 0) {
           bRetJet.style.display = "inline-block";
           bRetJet.onclick = function () { bRetJet.onclick=null;  jeu.j2.retournerJetons();}
         }
         
         else     bRetJet.style.display = "none";

         function chkOEVisibles(tuilePsnn) {
         console.log(tuilePsnn);
         //si le personnage est visible, le personn suivants le seront aussi
         if (tuilePsnn.classList.contains("murOvest")||tuilePsnn.classList.contains("murEst")) { 
                 personn = tuilePsnn.classList.item(1) ;
                 if (!persoVisibles.includes(personn)) 
                 persoVisibles.push(personn);
                 if (chkIfJack(personn,true)){ visible = true ;}
                 return true;
               }
               //si le personnage est invisible, le personn suivants le seront aussi
               else if (tuilePsnn.classList.contains("murSud")||tuilePsnn.classList.contains("murNord")) {
                 return false;
               }
       }
       function chkSNVisibles(tuilePsnn) {
         console.log(tuilePsnn);
         //si le personn est visible
         if (tuilePsnn.classList.contains("murSud") || tuilePsnn.classList.contains("murNord")) {
                 //ajouter le sujet aux personnages visibles
                 personn = tuilePsnn.classList.item(1) ;
                 if (!persoVisibles.includes(personn)) 
                   persoVisibles.push(personn);
                 if (chkIfJack(personn,true)){ visible = true ; }
                 return true;
               }
               //si le personnage est invisible, le personn suivants le seront aussi
               else if (tuilePsnn.classList.contains("murOvest")||tuilePsnn.classList.contains("murEst")) { 
                 return false;
               }
       }
       function chkIfJack(personn, visi){
           if (personn == jeu.mrJack && visi == true) {
             return true;
           }
           else  
             return false;           
       }
     },
   };//.initJeu()); 
  
   //CONSTRUCTEUR JOUEUR
   function Joueur( nom  ) {
     this.nom = nom;
     this.score = 0;
     this.depDetective = function (detective) {
       switch (detective) {
         case "actionDepChien":
         var pionChien = document.getElementById('dragchien');
         dep(pionChien);
           break;
         case "actionDepHolmes":
         var pionHolmes = document.getElementById('dragholmes');
         dep(pionHolmes);
           break;
         case "actionDepWhatson":
         var pionWhatson = document.getElementById('dragwatson');
         dep(pionWhatson);
           break;
         default:
           break;
       }
       function dep(pion) {
       var dtctv = document.getElementById(detective);

       //deplacer le detective concerne
       var tuilesDetectives = plateau.tuilesDetectives;
       //add draggable sur le pion 
       pion.setAttribute("draggable", "true");
       var drg0 = function( event ) { return model.drag(); };
       pion.addEventListener("dragstart", drg0, false);    
       //add droppable sur les bonnes tuiles
       tuilesDetectives.forEach(tuileDetective => {
       var tD = document.getElementById(tuileDetective);
         var drg = function( event ) { return model.dragOver(); };
       tD.addEventListener('dragover',drg , false);
         //tuileDetective.addEventListener('dragenter', dragOver);
         var drgEd = function( event ) {
           dtctv.onclick = null;
             //changer css du jeton action
             dtctv.classList.remove("activeJetonAction");
           };
         tD.addEventListener('dragend', drgEd,false);
        tD.addEventListener('drop', function( event ) { 
           //si le div est un ou 2 cases apres
           var idPion = event.dataTransfer.getData("Text");
           var drgbl = document.getElementById(idPion);
           var idTuile = drgbl.parentNode.getAttribute('id');
           var drpbl = event.target;
           var ixTuile = tuilesDetectives.indexOf(parseInt(idTuile));
           console.log(ixTuile);
           //var dtctv = document.getElementById(detective);
           // si drpbl (tuile de destination) se trouve 1 ou 2 positions apres la tuile de depart, inserons le draggable dans le droppable  
           if (( drpbl.id == tuilesDetectives[ixTuile-1] || drpbl.id == tuilesDetectives[ixTuile-2] )||(ixTuile==0 && drpbl.id == tuilesDetectives[12]||drpbl.id == tuilesDetectives[11])||(ixTuile==1 && drpbl.id == tuilesDetectives[0]||drpbl.id == tuilesDetectives[12])) {
        
         //eliminer l'action des action actives
         jeu.actionsActives.splice(jeu.actionsActives.indexOf(detective),1);
         
             return model.drop(drgbl,drpbl, drg0); 
           }},false);
         
           });

     }
     }
     
     this.rotation = function (deg, actRot) {
       var tuiles = plateau.tuilesDistrict;
       tuiles.forEach(tuileDst => {
        var tDst = document.getElementById(tuileDst);
        tDst.onclick = function( ) {  
         actRot.nextElementSibling.remove();  actRot.nextElementSibling.remove();// eliminer les boutons pour le choix  du desre
         actRot.classList.remove("activeJetonAction");//en executant l action rotation a la tuile, changer css du jeton rotation
         jeu.actionsActives.splice(jeu.actionsActives.indexOf(actRot),1); //eliminer l'actionRotation1 ou 2 des actions actives 
         tuiles.forEach(tlDst => {
           document.getElementById(tlDst).onclick = null;//apres avoir clique sur la tuile a desactiver @onclick pour toutes les tuiles
          });
          //mis a jour etat du jeu
           jeu.jCourant.check();
          console.log("try rotate",deg,tDst);
         return model.rotateTuile(deg, tDst); };

      });
     }
     this.swap = function () {
       plateau.tuilesDistrict.forEach(tuileDst => {
         var tDst = document.getElementById(tuileDst);
         tDst.onclick = function( ) { return model.swapTuiles(this.id); };
       });
     }
     //dep3
     this.dep3 = function (idDetective) {
    

     }
     //check
    
     this.check = function () {
       var modNTour = jeu.nTour%2;
       var nActions = jeu.actionsActives.length ;
       //modifier le joueur courant
       switch (modNTour) {
         case (modNTour != 0)://tours impairs
           if (nActions==3 || nActions ==2) 
           //TODO changer css des jetons  actions en fonction du joueur courant
           jeu.jCourant = jeu.j2//mr jack jou la 3 et 4e action
           else if ( nActions == 1) jeu.jCourant = jeu.j1
           break;
       
         case (modNTour == 0)://tours pairs
         if (nActions==3 || nActions ==2) jeu.jCourant = jeu.j1 //le detective joue la 3 et 4e action 
         else if (nActions == 1) jeu.jCourant = jeu.j2

       
           break;
    
           
       }
       if ( modNTour == 0 && nActions == 0 ){
           aJ = document.getElementById("jetonsAction");
         while (aJ.firstChild ) {
             aJ.removeChild(aJ.lastChild);
         }}
       //1
       //si toutes les actions ont ete jouees : proceder a
       //la appel a temoin puis
       if ( nActions == 0 ) {
           jeu.appelATemoin();
       }
       

       //2
       // this.nTour++;
       //retournerJetons
       //mr jack comme jcourant
       //3
       //verifier si mr jack a gagne 6 sabliers ->jGagnat
       //verifier s'il restent des personnages suspects-> jGagnant 
       //verifier s'il y a un joueur gagnant

     
     }
   };
   var model = {
     tuile1 : undefined,
     tuile2 : undefined,
     drag : function () {
       event.dataTransfer.setData("Text", event.target.id);
       // transparence 50%
       event.target.style.opacity = .5;

       console.log("drag");
     },
     dragOver : function () {
       event.preventDefault();
     },
     drop : function (draggable, droppable,funct) {
       event.preventDefault();
       draggable.style.opacity = 1;

       droppable.appendChild(draggable);
       draggable.setAttribute("draggable", "false");
       draggable.removeEventListener("ondragstart", funct );
       //mis a jour etat du jeu
       jeu.jCourant.check();
       console.log("well dropped");

     },
     swapTuiles : function (idtuile) {
              
       if (this.tuile2 == undefined && this.tuile1!=undefined&&this.tuile2!=idtuile) {
        this.tuile2=idtuile;
        console.log(this.tuile1);
        console.log(this.tuile2);

        let i1= document.getElementById(this.tuile1);
        let i2= document.getElementById(this.tuile2);
        let z=i1; let  z2=i2;             console.log(i1);console.log(i2);
        let plt =document.getElementById("plateau");
        //let n= plt.replaceChild(z , i1);
         n =   plt.replaceChild(i1, i2);
        //.replaceChild(i2, z);
        plt.insertBefore( n, plt.childNodes[this.tuile1-1]);
        let aSwp = document.getElementById("actionSwap");
        aSwp.classList.remove("activeJetonAction");//changer css du jton action
         aSwp.onclick = null;//desactiver le jeton action
         //eliminer le jeton des jetons actifs
         jeu.actionsActives.splice(jeu.actionsActives.indexOf("actionSwap"),1);
         plateau.tuilesDistrict.forEach(tlDst => {
           document.getElementById(tlDst).onclick = null;//desactiver swap pour les tuiles
         });
         //mis a jour etat du jeu
         jeu.jCourant.check();
        this.tuile1,this.tuile2 = undefined;
       }
      if (this.tuile1 == undefined&&idtuile!=this.idTuile2) this.tuile1=idtuile;


     },
     rotateTuile : function (deg, tuile) {
       //tourner les tuile de 90 ou 180 degres
         switch (deg) {
           case  90: //90°
           if (tuile.classList.contains("murOvest")) {
             //tuile.removeChild(tuile.childNodes);
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);//delete all children nodes
             newtuile = plateau.setMurNord(tuile);//create new tuile in good position
             tuile.parentNode.replaceChild(newtuile, tuile); //replace old with new tuile
             //tuile.classList.replace("murOvest","murNord");
           }
           else if (tuile.classList.contains("murNord")) {
             //tuile.removeChild(tuile.childNodes);
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);
             newtuile = plateau.setMurEst(tuile);
             tuile.parentNode.replaceChild(newtuile, tuile);

           }
           else if (tuile.classList.contains("murEst")) {
             //tuile.removeChild(tuile.childNodes);
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);
             newtuile = plateau.setMurSud(tuile);
             tuile.parentNode.replaceChild(newtuile, tuile);
           }
           else if (tuile.classList.contains("murSud")) {
             //tuile.removeChild(tuile.childNodes);
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);
             newtuile = plateau.setMurOvest(tuile);
             tuile.parentNode.replaceChild(newtuile, tuile);

           }                             
             break;           
           case 180: //180°
             if (tuile.classList.contains("murOvest")) {
               var last;
               while (last = tuile.lastChild) tuile.removeChild(last);
               newtuile = plateau.setMurEst(tuile);
               tuile.parentNode.replaceChild(newtuile, tuile);
             }
             else if (tuile.classList.contains("murNord")) {
               var last;
               while (last = tuile.lastChild) tuile.removeChild(last);
               newtuile = plateau.setMurSud(tuile);
               tuile.parentNode.replaceChild(newtuile, tuile);
             }     
             else if (tuile.classList.contains("murEst")) {
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);
             newtuile = plateau.setMurOvest(tuile);
             tuile.parentNode.replaceChild(newtuile, tuile);
             }
             else if (tuile.classList.contains("murSud")) {
             var last;
             while (last = tuile.lastChild) tuile.removeChild(last);
             newtuile = plateau.setMurNord(tuile);
             tuile.parentNode.replaceChild(newtuile, tuile); 
           }
             break;
         }
         
       }
     }
   
   //CONSTR MR JACK 
   function MrJack( nom) {
     Joueur.call(this,  nom );
     this.jetonsTemps = 0;
     
     this.piocherCarteAlibi = function (t) {
       //mrjack clicked on the button piocher
       document.getElementsByClassName("piochCarteMrJack")[0].style.display = "none";
       //creer bouton voir cacher mr jack
       let bShowHideJack = construireElement("button", null, " MJk","Show/hide Jack",null) ;
       bShowHideJack.onclick = function(){  return t.j2.voirJack() };//event cacher onclick
       //inserer bouton dans le bon div
       document.getElementsByClassName("mrJackCard")[0].appendChild(bShowHideJack);

         //la pioche 
       var r = Math.floor( Math.random() * 8 );
       var susp = t.personnagesSuspects;
       t.mrJack = susp.splice(r,1);
       console.log("suspects restants:" ,susp);
       let imgCarteJack = construireElement("img", null, "carteMrJack MJk", null, "personnages/"+t.mrJack );
       adjustImg(imgCarteJack,270,350,10);
       imgCarteJack.style.display = "none";
       document.getElementsByClassName("mrJackCard")[0].appendChild(imgCarteJack);
       // make button lancer jetons visible
       document.getElementsByClassName("lancerJeto")[0].innerText = jeu.j1.nom;

       document.getElementById("lancerJetons").style.display = "inline-block"; 

       //afficher suspect restants et sabliers
       s = document.getElementById("sabliers");
         s.innerText = jeu.j2.jetonsTemps;
         sR= document.getElementById("suspectsRestants"); 
         sR.innerText = jeu.personnagesSuspects.length+1;
         s.style.display = "inline-block";
         sR.style.display  = "inline-block";
         //affiche nom du joueur detective

     }
     //voir jack
     this.voirJack = function(){
       var i = document.getElementsByClassName("carteMrJack");
       if (i[0].style.display === "none") i[0].style.display = "block";
        else i[0].style.display = "none";
     }
     
     this.retournerJetons = function () {
       //for (var i = 0; i < 4; i++) {
         for (let z = 0; z < 4; z++) {
           aJ =document.getElementById("jetonsAction");
           idJeton = aJ.childNodes[z].id;
           
           act = jeu.actions[z][0];
           if (act != idJeton) {
             jeu.actionsActives.push(act);
           }
          // }  
         }
         c=0;
         while (aJ.firstChild && c<4) {
             aJ.removeChild(aJ.lastChild);
             c++;
           }
         jeu.jCourant == jeu.j2;

         jeu.buildActions();
         console.log(jeu.nTour+"<-nTour, lancee jetons"+ " "+ jeu.actionsActives);

     }
   };



   //CONSTR  JOUEUR DETECTIVE
   function JDetective(nom){
     Joueur.call( this,nom );

     this.lancerJetons = function (j) {
         if (j.nTour%2 != 0 && j.nTour<=7 && j.actionsActives.length==0) {

             //4 jetons a activer au hasard 
             for (let i = 0; i < 4 ; i++) {
             //let lancerJetons = construireElement("button", null, " JD","Lancer jetons",null) ;
             //bShowHideJack.onclick = function(){  return t.j2.voirJack() };//event cacher onclick
             //inserer bouton dans le bon div
             //document.getElementsByClassName("mrJackCard")[0].appendChild(bShowHideJack);

             //0 ou 1
             let face = Math.floor(Math.random() * 2);
             console.log(face);
             let vs = j.actionsActives.push(j.actions[i][face]); 
             //j.actionsActives += j.actions[i][face];
             //j.buildAction+vs.toStr();

             }
         //set joueur courant
             j.jCourant=j.j1;
             j.buildActions();
            console.log(j.nTour+"<-nTour, lancee jetons"+ " "+ j.actionsActives);

           }
       }
       this.retournerTuile = function (classe,id) {
         let tl= null;
        // if (classe != null && id == null) {
          tl = document.getElementsByClassName(classe)[0];
          // jeu.personnagesSuspects.splice(classe,1);

         //}
         //if (classe == null && id != null) {
          //tl = document.getElementsById(id);
         //}
         let positMur = tl.classList.item(2);
         let psn = tl.classList.item(1);
         tl.setAttribute("class", "");
         tl.classList.add("Vide")
         tl.classList.add(psn);
         tl.classList.add(positMur);
         plateau.insererImagePersonnage(tl, positMur );
       }
   };

   //MrJack.prototype
   
   //referencer la super classe joueur comme prototype et heriter de ttt les methodes pour MrJack et le detective
   MrJack.prototype = Object.create(Joueur.prototype);
   JDetective.prototype = Object.create(Joueur.prototype);
   //specifier les constructeurs pour L objet mr jack et le joueur detective 
   MrJack.prototype.constructor = MrJack;
   JDetective.prototype.constructor = JDetective;
   
   //TODO action piocher carte personnage
   //utiliser classlidt pour retrouver le personnage de la tuile et donner les sabliers a mr jack s'il choisi l'action piocher ou pour retourner la carte

   jeu.initJeu();

   //jeu.play();
