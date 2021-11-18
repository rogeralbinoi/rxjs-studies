import { Observable } from "./lib.mjs"
import { data } from './data.mjs'

const ProductsObservable$ = Observable(({ next }) => {
    let count = 0
    const interval = setInterval(() => {
        count += 1
        if (!data[count]) clearInterval(interval)
        next(data[count])
    }, 2000)
})

const sub1 = ProductsObservable$.subscribe(data => {
    console.log('SUB1', data.title, data.price)
})

// const sub2 = ProductsObservable$.subscribe(data => {
//     console.log('SUB2', data.title, data.price)
// })

setTimeout(() => {
    sub1.unsubscribe()
    console.log('call unsubscribe')
}, 20000)

// setTimeout(() => {
//     sub2.unsubscribe()
//     console.log('call unsubscribe')
// }, 30000)