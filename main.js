let mainImage =document.getElementById("mainImage");
let optionImg =document.querySelectorAll(".optionImg");

optionImg.forEach(img => {
    img.onclick=()=>{
        chosesImage(img.src)
    }
}); 

function chosesImage(src)
{   
    mainImage.classList.add ("fade")
    setTimeout(()=>{
    mainImage.classList.remove ("fade")
    },200)
    mainImage.src=`${src}`
}