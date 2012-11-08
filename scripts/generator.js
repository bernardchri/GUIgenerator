// JavaScript Document

function t(){

var tailleText = document.getElementById('texte_tailleTexte');
var lineHeightText = document.getElementById('texte_lineHeightTexte');
var fontWeightText = document.getElementById('texte_fontWeightTexte');
var fontFamilyText = document.getElementById('texte_fontFamilyTexte');
var interLettrageText = document.getElementById('texte_interLettrageTexte');
var wordSpacingText = document.getElementById('texte_wordSpacingTexte');
var txtDecoText = document.getElementById('texte_txtDecoTexte');
var colorText = document.getElementById('texte_colorTexte');
var txtTransText = document.getElementById('texte_txtTransTexte');
var txt1 = document.getElementById('texte1');
var obj_recapText = document.getElementById("recap_texte");//pour recap

//
txt1.style.fontSize = tailleText.value+'px';
txt1.style.lineHeight = lineHeightText.value+'em';
txt1.style.fontWeight = fontWeightText.value;
txt1.style.fontFamily = fontFamilyText.value;
txt1.style.letterSpacing = interLettrageText.value+'em';
txt1.style.wordSpacing = wordSpacingText.value+'em';
txt1.style.textDecoration = txtDecoText.value;
txt1.style.color = '#'+colorText.value;
txt1.style.textTransform = txtTransText.value;
//

obj_recapText.innerHTML = 
"h1 : "
+"font-Family:" + fontFamilyText.value
+" / "
+ "font-Size:"
+tailleText.value +'px'
+" / "
+"line-Height :"+lineHeightText.value+'em'
+" / "
+"font-Weight :" + fontWeightText.value
+" / "
+"color : " + '#'+ colorText.value
+" / " 
+"letter-Spacing :" + interLettrageText.value+'em'
+" / "
+ "word-spacing :" + wordSpacingText.value+'em'
+" / "
+" text-decoration :" + txtDecoText.value
+" / "
+"Text-Transform : " + txtTransText.value ;

}
//
function lesOptions(){
	var obj_plusOptions = document.getElementById('plusOptions');
	var lien_plusOptions = document.getElementById('AplusOptions');
	//
	
	
	if ( obj_plusOptions.style.display =='none')
	{	
	 	obj_plusOptions.style.display ='block';
		lien_plusOptions.innerHTML ='Moins d\'options';
	}
	else {
		obj_plusOptions.style.display ='none';
		lien_plusOptions.innerHTML ='Plus d\'options';
	}
	
}

// Fonction affichage de grille

function laGrille(){
	var obj_ventre = document.getElementById('ventre');
	var lien_affGrille = document.getElementById('affGrille');
	//
	
	
	if ( obj_ventre.style.backgroundImage =='none')
	{	
	 	obj_ventre.style.backgroundImage = 'url(img/fdGrille.png)';
		lien_affGrille.innerHTML ='Masquer grille';
		
	}
	else {
		obj_ventre.style.backgroundImage ='none';
		lien_affGrille.innerHTML ='Afficher grille';
		
	}
	
}
	
	
// replier le Fieldset
function replieFieldSet(){
	var obj_legField = document.getElementById('menu_titre1');
	
	//
	if ( obj_legField.style.height =='auto')
	{	
		//window.alert("good");
	 	obj_legField.style.height ='40px';
				
	}
	else {
		obj_legField.style.height = 'auto';
		
	}
	
}



/*------------------------------------*/
/*---------FONCTION IMPRIMER ---------*/
/*------------------------------------*/

function PrintDivData(ventre)
{
var ctrlcontent = document.getElementById('ventre');
var printscreen = window.open('','','left=1,top=1,width=1,height=1,toolbar=0,scrollbars=0,status=0');
printscreen.document.write(ctrlcontent.innerHTML);
printscreen.document.close();
printscreen.focus();
printscreen.print();
printscreen.close();
}
