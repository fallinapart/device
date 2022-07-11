let servicesButtonDelivery = document.querySelector(".services-button-delivery");
let servicesButtonWarranty = document.querySelector(".services-button-warranty");
let servicesButtonCredit = document.querySelector(".services-button-credit");

let servicesDelivery = document.querySelector(".services-delivery");
let servicesWarranty = document.querySelector(".services-warranty");
let servicesCredit = document.querySelector(".services-credit");

servicesButtonDelivery.onclick = function () {
  servicesButtonDelivery.classList.add("services-button-current");
  servicesButtonWarranty.classList.remove("services-button-current");
  servicesButtonCredit.classList.remove("services-button-current");

  servicesDelivery.classList.remove("services-closed");
  servicesWarranty.classList.add("services-closed");
  servicesCredit.classList.add("services-closed");
}

servicesButtonWarranty.onclick = function () {
  servicesButtonWarranty.classList.add("services-button-current");
  servicesButtonDelivery.classList.remove("services-button-current");
  servicesButtonCredit.classList.remove("services-button-current");

  servicesDelivery.classList.add("services-closed");
  servicesWarranty.classList.remove("services-closed");
  servicesCredit.classList.add("services-closed");
}

servicesButtonCredit.onclick = function () {
  servicesButtonCredit.classList.add("services-button-current");
  servicesButtonDelivery.classList.remove("services-button-current");
  servicesButtonWarranty.classList.remove("services-button-current");

  servicesDelivery.classList.add("services-closed");
  servicesWarranty.classList.add("services-closed");
  servicesCredit.classList.remove("services-closed");
}
