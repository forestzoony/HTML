let target = document.querySelector("#moving");
let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString() {
    let target = document.querySelector("#moving");
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;

}
// 타이핑을 리셋하는 함수
function resetTyping() {
    target.textContent = "";
    moving(randomString());
}
//한글자씩 출력되는 함수 효과
function moving(randomArr) {

    if(randomArr.length >0) {
    target.textContent += randomArr.shift() // 배열 처음부터 빼내다. 
    setTimeout(function() {
        moving(randomArr);
    },80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

moving(randomString());

// 커서 깜빡임 효과 생성
function blink() {
    target.classList.toggle("active");

}
setInterval(blink, 500); /* 0.5초 간격 */

