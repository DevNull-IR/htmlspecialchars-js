const htmlspecialchars = (string) => {
// &gt;
let htmlstr = string;
for(let i=0; i < htmlstr.length; i++){
    htmlstr = htmlstr.replace('>','&gt;');
    htmlstr = htmlstr.replace('<','&lt;');
}
return htmlstr;
};
