<?php header("Content-type: text/css; charset=iso-8859-1"); ?>
<?php
echo "/*-------Ma css generee " ;
echo "----------*/";
//generation de la css
echo ".titre1{";
echo "font-family:";
echo $_POST['fontFamily'];
echo ";font-size:";
echo $_POST['fontSize'];
echo "px";
echo ";line-height:";
echo $_POST['lineHeight'];
echo "px";
echo ";font-weight:";
echo $_POST['fontWeight'];
echo ";letter-spacing:";
echo $_POST['letterSpacing'];
echo "em";
echo ";word-spacing:";
echo $_POST['wordSpacing'];
echo "em";
echo ";text-decoration:";
echo $_POST['textDecoration'];
echo ";text-transform:";
echo $_POST['textTransform'];
echo ";color:#";
echo $_POST['color'];
echo ";";
echo "}";
?>