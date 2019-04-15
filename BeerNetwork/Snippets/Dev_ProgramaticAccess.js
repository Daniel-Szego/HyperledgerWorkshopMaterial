       let currentParticipant = getCurrentParticipant();
       if (currentParticipant.getFullyQualifiedType() !== 'net.biz.digitalPropertyNetwork.PrivilegedPerson') {
           throw new Error('Transaction can only be submitted by a privileged person');


       let assetOwner = privilegedTransaction.asset.owner;
       let currentParticipant = getCurrentParticipant();
       if (currentParticipant.getFullyQualifiedIdentifier() !== asset.owner.getFullyQualifiedIdentifier()) {
           throw new Error('Transaction can only be submitted by the owner of the asset');



