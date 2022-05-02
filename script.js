//  Extra - Javascript: Algoritmos katas //


// 1 - calculateSalary() //

function calculateSalary(salary, sold) {

    if (sold <= 1200) {
        let extra = salary + sold * (3 / 100)
        return extra
    } else {
        let upExtra = salary + sold * (5 / 100)
        return upExtra
    }

}

// 2 - cashMachine() //

function calculateBankNotes(withdrawTotal, amountToWithdraw, bankNote) {
    return Math.trunc((withdrawTotal - amountToWithdraw) / bankNote)
}

function cashMachine(withdrawTotal, currentyIn, made) {
    let currentBalance = currentyIn + made
    let amountToWithdraw = 0
    let bankNotes = [200, 100, 50]
    let amount200 = 0
    let amount100 = 0
    let amount50 = 0

    if (currentBalance < 50) {
        return 'Insufficient founds'
    }

    bankNotes.forEach(bankNote => {
        const bankNotesAmount = calculateBankNotes(withdrawTotal, amountToWithdraw, bankNote)

        if (bankNote === 200 && currentBalance >= bankNote && withdrawTotal >= bankNote) {
            amount200 = bankNotesAmount
            amountToWithdraw = bankNote * amount200
        } else if (bankNote === 100 && currentBalance >= bankNote && (withdrawTotal - amountToWithdraw) >= bankNote) {
            amount100 = bankNotesAmount
            amountToWithdraw = amountToWithdraw + bankNote * amount100
        } else if ((withdrawTotal - amountToWithdraw) >= bankNote) {
            amount50 = bankNotesAmount
            amountToWithdraw = amountToWithdraw + bankNote * amount50
        }
    });

    currentBalance = currentBalance - amountToWithdraw

    return `Banknotes: ${amount200} notes of R$200, ${amount100} note of R$100, ${amount50} note of R$50, Current Balance: R$${currentBalance}`

}


// 3 - calculateStock() //

function calculateStock(currentStock, maxStock, minStock) {
    let average = (maxStock + minStock) / 2
    if (currentStock >= average) {
        return 'Não efetuar compra'
    } else {
        return 'Efetuar compra'
    }

}

// 4 - calculateAge() //

function calculateAge(age, currentYear) {
    const yearMonths = 12
    const yearWeeks = 52
    const yearDays = 365
    if (age >= 0 && currentYear >= 0) {
        let years = currentYear - age
        let months = years * yearMonths
        let weeks = years * yearWeeks
        let days = years * yearDays

        return `You've been alive for: ${years} years, ${months} months, ${weeks} weeks and ${days} days `
    } else {
        return 'enter a valid value'
    }
}

// 5 - getDiagonal() //

function getDiagonal(matrizQuadrada) {
    let numDiagonal = []
    for (let i = 0; i < matrizQuadrada.length; i++) {
        numDiagonal.push(matrizQuadrada[i][i])
    }
    return `Números na diagonal ${numDiagonal.join(' - ')}`
}



const fixedSalary = 2000
const sellsAmount = 200

const withDraw = 1000

const stockAmount = 2100
const maxStockAmount = 2000
const mimStockAmount = 500

const wereBornIn = 2002
const whichYear = 2022

const squareMatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const salary = calculateSalary(fixedSalary, sellsAmount)
const CashMachine = cashMachine(withDraw, salary, sellsAmount)
const stock = calculateStock(stockAmount, maxStockAmount, mimStockAmount)
const calAge = calculateAge(wereBornIn, whichYear)
const headquarters = getDiagonal(squareMatrix)

console.log(salary)
console.log(CashMachine)
console.log(stock)
console.log(calAge)
console.log(headquarters)



