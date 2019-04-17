# Start development environment and deploy a business network 

cd fabric-dev-servers
./startFabric.sh
./createPeerAdminCard.sh

# deploy business network  (archive file name might be different)

composer network install --card PeerAdmin@hlfv1 --archiveFile sequence@0.0.1.bna

# getting deployed full stuff name and version (archive file name might be different)

composer archive list -a sequence@0.0.1.bna

# start business network (network version might be different)

composer network start --networkName sequence --networkVersion 0.0.1-deploy.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

# import network card identity

composer card import --file networkadmin.card

# test if stuffs are cool

composer network ping --card admin@sequence

# rest server

composer-rest-server

(card name admin@basic-sample-network, no namespace, yes test interface, yes event publication, no for the rest)

# browser test 
http://localhost:3000/explorer

# create angular sceleton

yo hyperledger-composer:angular

(card: admin@sequence, existing API, no namespace)

# starting the network

npm start

# browser test 

http://localhost:4200


# Optional: generate loopback rest API

yo hyperledger-composer

(loopback project, connect to a running a network, business card name ...)