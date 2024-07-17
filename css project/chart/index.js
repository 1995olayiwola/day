var ctx = document.getElementById("myChart")
console.log(ctx)
new Chart(ctx,{
    type:"bar",
    data:{
        labels:["Ademola Olakunle","Amusa Ibrahim","Olamide Olaoye","Joy Adam","Habeeb Kosoko"],
        datasets:[{
            label:" # Mathematics scores",
            data: [89,96,85,65,50],
            borderWidth:1
        }]
    },
    options:{
        scales:{
y:{
    beginAtZero:true
},
x:{
    beginAtZero:true
}
        }
    }
})
