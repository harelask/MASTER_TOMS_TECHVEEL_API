Update
  TblPurchaseInvoice
set
  -- InvoiceNumber = @InvoiceNumber,
  InvoiceDate=@InvoiceDate,
  PINumber = @PINumber,
  PIDate=@PIDate,
  Supplierid=@Supplierid,
  TotalAmount=@TotalAmount,
  Discount=@Discount, 
  netAmount=@netAmount,
  Remarks=@Remarks,
  ModifyBy = @ModifyBy,
  ModifyDate = GETDATE()
where
  PurchaseInvoiceID = @PurchaseInvoiceID