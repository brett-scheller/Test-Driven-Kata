const wrap = (line, maxLen) =>{
let  str=""
const num=Math.floor(line.length/maxLen)
let ind = 0;
let newInd;
for(let i=0;i<line.length;i++){
 /*  newInd = ind + maxLen
  line = line.slice(ind, newInd) + '\n' + line.slice(newInd)
  ind = newInd; */
  str+=line[i];
  if(i%maxLen===maxLen-1){
    str+='\n'
  }
}
return str;
}

module.exports = wrap;
