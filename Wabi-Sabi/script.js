function showReserve(){
    const go_reserve = document.getElementById("go_reserve");
    const reserve_bg = document.getElementsByClassName("reserve_bg")[0];
    const body = document.body;


    if(go_reserve.value === "立即訂房") {
        go_reserve.style.backgroundColor = "#F0ECE4";
        go_reserve.style.color = "#000000";
        go_reserve.value = "返回";
        go_reserve.style.boxShadow = "none";
        reserve_bg.style.display = "block";
        go_reserve.style.border = "1px solid #B69D81";
        go_reserve.style.borderRight = "none";
        // body.style.overflow =  "hidden";//讓後面鎖定
        
        
    } else  {
        go_reserve.style.backgroundColor = "#695043";
        go_reserve.value = "立即訂房";
        go_reserve.style.color = "#FFFFFF";
        setTimeout(() => {
        reserve_bg.style.display = "none";
        }, 700); 
        // reserve_bg.style.display = "none";
        // body.style.overflow="";//返回解除
    }

    
}
let go_reserve = document.getElementById("go_reserve");
go_reserve.onclick = showReserve;


const reserveArea = document.querySelector('.reserve_area');
const reserveBtn = document.querySelector('.reserve_input');

reserveBtn.addEventListener('click', function () {
    if (reserveArea.classList.contains('show')) {
        // 已顯示 → 淡出
        reserveArea.classList.remove('show');
        reserveArea.classList.add('hide');
    } else {
        // 顯示進場動畫
        reserveArea.classList.remove('hide');
        reserveArea.classList.add('show');
    }
});

// flatpickr("#dateRange", {
//     mode: "range",
//     dateFormat: "Y-m-d",
//     locale: {
//     rangeSeparator: " ~ "
//     }
// });

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    defaultDate: [today, tomorrow],
    locale: {
        rangeSeparator: " ~ "
    }
});

//////////////////
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
////////////////