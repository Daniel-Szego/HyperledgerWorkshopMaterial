    const cellPhoneRegistry = await getAssetRegistry(namespace + '.CellPhone'); 
    let cellPhones = await cellPhoneRegistry.getAll();
    await cellPhoneRegistry.removeAll(cellPhones);
