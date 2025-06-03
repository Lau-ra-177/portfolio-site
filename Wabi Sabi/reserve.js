function showReserve(){
    let go_reserve = document.getElementById("go_reserve");
    let reserve_bg = document.getElementsByClassName("reserve_bg")[0];

    if(go_reserve.value === "立即訂房") {
        go_reserve.style.backgroundColor = "#F0ECE4";
        go_reserve.style.color = "#000000";
        go_reserve.value = "返回";
        go_reserve.style.boxShadow = "none";
        reserve_bg.style.display = "block";
        go_reserve.style.border = "1px solid #B69D81";
        go_reserve.style.borderRight = "none";
        
    } else {
        go_reserve.style.backgroundColor = "#695043";
        go_reserve.value = "立即訂房";
        go_reserve.style.color = "#FFFFFF";
        reserve_bg.style.display = "none";
}
}
let go_reserve = document.getElementById("go_reserve");
go_reserve.onclick = showReserve;

flatpickr("#dateRange", {
    mode: "range",
    dateFormat: "Y-m-d",
    locale: {
    rangeSeparator: " ~ "
    }
});