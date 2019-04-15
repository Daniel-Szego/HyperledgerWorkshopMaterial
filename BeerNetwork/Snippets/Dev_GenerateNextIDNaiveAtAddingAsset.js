    const cellPhoneReg = await getAssetRegistry(namespace + '.CellPhone');   

    // getting next id
    let existingPhones = await cellPhoneReg.getAll();
  	let numberOfPhones = 0;
  
    await existingPhones.forEach(function (phone) {
      numberOfPhones ++;
    });
 	numberOfPhones ++; 	

    const newCellPhone = await factory.newResource(namespace, 'CellPhone', numberOfPhones.toString());
    newCellPhone.assetStatus = "CREATED";
    newCellPhone.aggregatedGHG = manCompany.GHG;
    newCellPhone.atCompany = manCompany;
    newCellPhone.cellPhoneType = "LENOVO";
    newCellPhone.amount = 1;
    await cellPhoneReg.add(newCellPhone);   