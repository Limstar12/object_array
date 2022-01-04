let myobj = {
    mynm : "박혜지",
    mycafe : "cafe.naver.com/4thdraw",
    mystudy : ["리액트","포토샵","자바스크립트 ea5"],
    myday : ["1월","2월","3월","4월","5월"],
    myallinfo : function(){
        console.log(`${myobj.mynm}은(는) ${myobj.myday[4]}에 ${myobj.mystudy[0]} 수업을 수료합니다.`);
    }
};


console.log(JSON.stringify(myobj));
console.log(myobj.mystudy[0]);
//박혜지는 5월에 리엑트 수업을 수료합니다.
// console.log(`${myobj.mynm}은(는) ${myobj.myday[4]}에 ${myobj.mystudy[0]}수업을 수료합니다.`);
// myobj.myallinfo();



let myinfor = {
    myname : "박혜지",
    myhome : "중동",
    myjob : "백수",
    myage : "34살",
    mybirth : "1989년 10월 13일",
    myallinfo : function(){
        console.log(`${this.myname}은(는) ${this.myhome}에서 자랐으며, 현재는 ${this.myage}${this.myjob}이다.`);
    }
}
myinfor.myallinfo();