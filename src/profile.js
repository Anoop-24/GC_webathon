

document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById("checkboxes");
    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            console.log('Checkbox is checked');
            gsap.to(document.getElementsByClassName("menu-items"),{
                x: '-100',
            ease:Expo.easeInOut,
            duration: 0.01,

           })
        } else {
            console.log('Checkbox is unchecked');
            gsap.to(document.getElementsByClassName("menu-items"),{
                x: '180',
                duration: 0.01,
                
        ease:Expo.easeInOut
           })
        }
    });
});