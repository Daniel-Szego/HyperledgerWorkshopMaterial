   console.log('Creating a manufacturer company');  
    const factory = getFactory(); 
	
  	// adding manufacturer company 
    const manCompReg = await getParticipantRegistry(namespace + '.ManufacturerCompany');   
    const manComp = await factory.newResource(namespace, 'ManufacturerCompany', "1");
    manComp.companyName = "Cell phone Manufacturer Inc.";
    manComp.GHG = baseline;
    manComp.companyAddress = newAddress;
  
    await manCompReg.add(manComp);     

