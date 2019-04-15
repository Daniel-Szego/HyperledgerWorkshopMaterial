    const cellPhoneReg = await getAssetRegistry(namespace + '.CellPhone');   

    const newCellPhone = await factory.newResource(namespace, 'CellPhone', numberOfPhones.toString());
    newCellPhone.assetStatus = "CREATED";
    newCellPhone.aggregatedGHG = manCompany.GHG;
    newCellPhone.atCompany = manCompany;
    newCellPhone.cellPhoneType = "LENOVO";
    newCellPhone.amount = 1;
    await cellPhoneReg.add(newCellPhone);   