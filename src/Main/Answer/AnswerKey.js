let answer = [];

const random = () => {
    return Math.floor(Math.random() * 10)
}

const getAnswer = () => {
    for (let i = 0; i < 4; i++) {
        
        let num = random()

        while (answer.includes(num)) {
            num = random()
        }

        answer.push(num)
    }
}

getAnswer();
console.log(answer)
export default answer;