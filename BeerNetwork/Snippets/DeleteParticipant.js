    const manCompRegistry = await getParticipantRegistry(namespace + '.ManufacturerCompany');
    let manCompanies = await manCompRegistry.getAll();
    await manCompRegistry.removeAll(manCompanies);