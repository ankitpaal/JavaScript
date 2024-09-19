const cart = ["shoes","pants","kurta"];

createOrder(cart, function(orderId){
  proceedToPyment(orderId, function(paymentInfo){
    orderSummary(paymentInfo, function(orderSummary){
      updateWalletBalence();
    });
  });
});


createOrder(cart).then(function(orderId){
  return proceedToPyment(orderId);
})
.then