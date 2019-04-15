    let factory = await getFactory();

    let transferEvent = factory.newEvent('org.supplychain.green.model', 'AssetTransferred');
  	transferEvent.gHGcarrierAsset = assetToTransfer;
  	transferEvent.transferGHG = assetToTransfer.aggregatedGHG;
    await emit(transferEvent);  