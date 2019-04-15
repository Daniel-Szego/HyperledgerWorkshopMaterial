	let assetToTransfer = param.assetToSell;
    let factory = await getFactory();
 	
  	assetToTransfer.assetStatus = "SOLD";
  	
    const cellPhoneReg = await getAssetRegistry(namespace + '.CellPhone'); 
    await cellPhoneReg.update(assetToTransfer);  