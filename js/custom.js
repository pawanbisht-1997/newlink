const tabBtn = document.querySelectorAll(".tab__btn"),
    tabContents = document.querySelectorAll(".tab__item");

function openTabs(t) {
    let e = t.currentTarget,
        i = e.dataset.item;
    tabContents.forEach(function (t) {
        t.classList.remove("tab__item--active")
    }), tabBtn.forEach(function (t) {
        t.classList.remove("tab__btn--active")
    }), document.querySelector(`#${i}`).classList.add("tab__item--active"), e.classList.add("tab__btn--active")
}
tabBtn.forEach(function (t) {
    t.addEventListener("click", openTabs)
}), $(".inclusion_tab").click(function () {
    $(".exclusion").hide(), $(".inclusion").show(), $(".inclusion_tab").addClass("active_ex"), $(".exclusion_tab").removeClass("active_ex")
}), $(".exclusion_tab").click(function () {
    $(".exclusion").show(), $(".inclusion").hide(), $(".exclusion_tab").addClass("active_ex"), $(".inclusion_tab").removeClass("active_ex")
});