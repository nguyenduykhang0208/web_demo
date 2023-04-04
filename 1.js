
function validate() {
var u = document.getElementById("email").value;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(u== "") {
	alert("Vui lòng nhập email!");
	return false;
}
if(!mailformat.test(u)){
	alert("Vui lòng nhập email đúng định dạng");
	return false;
}
alert("Gửi thành công");
return true;
}// JavaScript Document

const brandFilter = document.getElementById('brand-filter');
const sizeFilter = document.getElementById('size-filter');
const priceFilter = document.getElementById('price-filter');

brandFilter.addEventListener('change', filterProducts);
sizeFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);

function filterProducts() {
  const brand = brandFilter.value;
  const size = sizeFilter.value;
  const price = priceFilter.value;
}


