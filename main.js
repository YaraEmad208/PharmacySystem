const stars = document.querySelectAll(".stars i");

stars.forEach((star , index1) => {
    
    star.addEventListener("Click" , () => {

        stars.forEach((star , index2) => {
            
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});