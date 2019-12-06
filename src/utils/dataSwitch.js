export  function table2string(table){
    var str=""
    for (var i=0;i<table.length;i++){
        for (var j in table[i]){
            str+=" "+eval("table[i]."+j )
        }
        if (i!=table.length-1){
            str+="\n"
        }
    }
   
    return JSON.stringify(str)
}
export function string2table(table,string){
    var temp=string.split("\n")
    for (var i =0;i<table.length;i++){
        var taxon=temp[i].replace(/(^\s*)|(\s*$)/g, "").split(" ")
        let count=0
        for (var j in table[i]){
            table[i][j]=taxon[count]
            count++ 
        }
    }
    console.log(table)
    return table
}
