const htmlspecialchars = (string) => {
    // &gt;
    let htmlstr = string;
    for(let i=0; i < htmlstr.length; i++){
        htmlstr = htmlstr.replace('>','&gt;');
        htmlstr = htmlstr.replace('<','&lt;');
        htmlstr = htmlstr.replace('"','&quot;');
        htmlstr = htmlstr.replace('\'','&#039;');
    }
    return htmlstr;
};
