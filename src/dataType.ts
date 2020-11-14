let count = 0; // : number, 선언과 동시에 타입 설정 가능
count += 1;
// count = '문자열'; // string은 number가 아님

const message: string = 'hello world'; // 문자열
const done: boolean = true; // 불리언

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

// messages.push(1); // 문자열 배열에 숫자를 넣을 수 없다.

let mightBeUndefined: string | undefined = undefined; // string 또는 undefined, 초기값 undefined
let nullagbleNumber: number | null = null; // number 또는 null, 초기값 null

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나, 초기값 red
color = 'yellow';
// color = 'green'; // green은 없음
