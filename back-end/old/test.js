const listOne = [{ name: "Abderahmane", age: 22 },{ name: "fals", age: 22 }]
const listtwo = [{ wilaya: "Boumerdes" },{ wilaya: "alget" }]

const result = listOne.map((i, index) => {
    return { ...i, ...listtwo[index] }
})

console.log(result)
