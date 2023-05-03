function convert_it()
{
var conv_code = new Array(
"଼","",
"କ୍ଷ", "ksha",
"ଅ", "a",
"ଆ", "aa",
"ଇ", "i",
"ଈ", "ee",
"ଉ", "u",
"ଉ", "oo",
"ଋ", "ru",
"ଏ", "e",
"ଐ", "ai",
"ଓ", "o",
"ଔ", "ou",
"କ", "ka",
"ଖ", "kha",
"ଗ", "ga",
"ଘ", "gha",
"ଚ", "cha",
"ଛ", "chha",
"ଜ", "ja",
"ଝ", "jha",
"ଞ", "nya",
"ଟ", "ta",
"ଠ", "tha",
"ଡ", "da",
"ଡ଼" ,"da",
"ଢ", "dha",
"ଣ", "na",
"ତ", "ta",
"ଥ", "tha",
"ଦ", "da",
"ଧ", "dha",
"ନ", "na",
"ପ", "pa",
"ଫ", "pha",
"ବ", "ba",
"ଵ","wa",
"ଭ", "bha",
"ମ", "ma",
"ଯ", "ja",
"ର", "ra",
"ଲ", "la",
"ଳ", "la",
"ଶ", "sha",
"ଷ", "sa",
"ସ", "sa",
"ହ", "ha",
"ୟ", "ya",
"ୱ", "wa",
"ା", '\ba',
"ି", "\bi",
"ୀ", "\bee",
"ୁ", "\bu",
"ୂ", "\boo",
"ୋ", "\bo",
"ୌ", "\bou",
"େ", "\be",
"ୈ", "\bai",
"ୃ","\bru",
"ଙ", "na",
"ଁ" , "n",
"ଂ", "n",
"ଃ" , "h",
"୍","\b",
"।",".",
"୧","1",
"୨","2",
"୩","3",
"୪","4",
"୫","5",
"୬","6",
"୭","7",
"୮","8",
"୯","9",
"୦","0"
) 

var conv_code_length = conv_code.length ;

var str = document.getElementById("unicode_txt").value  ;	
Replace_text( ) ;
  
document.getElementById("phonetic_txt").value = str  ;  


// --------------------------------------------------

function RemoveBackSpaces(str)
{
while( str.indexOf("\b") != -1){
str=str.replace(/.?\x08/,"");
}
return str;
}

function Replace_text( )
{ if ( str != "" )
{
for ( index = 0;   index < conv_code_length-1;    index = index + 2 )
{ 
idx = 0  ; 
while (idx != -1 ) //when-text-not-found--end
{

str = str.replace( conv_code[ index+1 ] , conv_code[index] );
idx = str.indexOf( conv_code[index] );

}

}

str=RemoveBackSpaces(str);

//sentense case
var rg = /(^\w{1}|\.\s*\w{1})/gi;
str = str.replace(rg, function(toReplace) {
    return toReplace.toUpperCase();
})

} 

}

}

function SelectAll(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}