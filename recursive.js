// function recursive(n, total = 0) {
//     if (n <= 0) {
//         return total
//     }
//     console.log('n ', n)
//     const result = recursive(n - 1, total + n)
//     console.log('result ', result)
//     return result
// }

// console.log('main result: ', recursive(3))


/* 
    recursive(3, 0)
        recursive(2, 3)
           recursive(1, 5)
                recursive(0, 6)
*/





// TREE

function traverseTree(t) {
    console.log(t.name)
    if (t.children.length === 0) {
        return
    }
    t.children.forEach(child => {
        traverseTree(child)
    })
}


const tree = {
    name: "Riyas",
    children: [
        {
            name: "Sasi",
            children: []
        },
        {
            name: "Yaseer",
            children: [
                { name: "Jithin", children: [] },
                { name: "Liston", children: [] },
            ]
        }
    ]
}
traverseTree(tree)

