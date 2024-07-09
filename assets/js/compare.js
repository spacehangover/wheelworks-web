document.getElementById('productSelect1').addEventListener('change', function() {
    var selectedProduct = this.value;
    var products = document.querySelectorAll('#productSelect1 ~ .product-details');
    
    products.forEach(function(product) {
        product.style.display = 'none';
    });
    
    if (selectedProduct) {
        document.getElementById(selectedProduct).style.display = 'block';
    }
});

document.getElementById('productSelect2').addEventListener('change', function() {
    var selectedProduct = this.value;
    var products = document.querySelectorAll('#productSelect2 ~ .product-details');
    
    products.forEach(function(product) {
        product.style.display = 'none';
    });
    
    if (selectedProduct) {
        document.getElementById(selectedProduct).style.display = 'block';
    }
});

document.getElementById('productSelect3').addEventListener('change', function() {
    var selectedProduct = this.value;
    var products = document.querySelectorAll('#productSelect3 ~ .product-details');
    
    products.forEach(function(product) {
        product.style.display = 'none';
    });
    
    if (selectedProduct) {
        document.getElementById(selectedProduct).style.display = 'block';
    }
});

document.getElementById('productSelect1').dispatchEvent(new Event('change'));
document.getElementById('productSelect2').dispatchEvent(new Event('change'));
document.getElementById('productSelect3').dispatchEvent(new Event('change'));