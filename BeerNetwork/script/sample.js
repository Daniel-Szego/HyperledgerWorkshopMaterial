/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {org.sor.basic.CreateTestData} tx The sample transaction instance.
 * @transaction
 */



async function CreateTestDataTransaction(tx) {  // eslint-disable-line no-unused-vars
  
    const ghgBsaeLineInfo = await request.get( { uri:'https://iaspub.epa.gov/enviro/efservice/tri_facility/state_abbr/VA/rows/102:102/JSON', json: true});
		
    const baseline = parseInt(ghgBsaeLineInfo[0].PREF_QA_CODE) / 10;
  	console.log(baseline);
  
	const factory = getFactory();    
  
    const sorIvoReg = await getParticipantRegistry('org.sor.basic' + '.SorIvo');  
  
    let existingSorIvo = await sorIvoReg.getAll();
  	let existingSorIvok = 0;
  
    await existingSorIvo.forEach(function (sorIvo) {
      existingSorIvok ++;
    });
 	existingSorIvok ++; 	  
  
    const sorIvo = await factory.newResource('org.sor.basic', 'SorIvo', existingSorIvok.toString());
  
    sorIvo.sorIvoNev = "Dani";
  
    await sorIvoReg.add(sorIvo);  

    const hordoSorReg = await getAssetRegistry('org.sor.basic' + '.HordoSorAsset');  

    const hordoSor = await factory.newResource('org.sor.basic', 'HordoSorAsset', '1');
  
  	hordoSor.name = "Dani hordo sore";
	hordoSor.sorTipus = "Pilsner";
    hordoSor.tele = 100;
  
  	hordoSorReg.add(hordoSor);  
  
    let sorElkeszultEvent = factory.newEvent('org.sor.basic', 'HordoSorElkeszult');
  	sorElkeszultEvent.hordoNeve = "Dani hordo sore";
  	sorElkeszultEvent.ivoNeve = "Dani";
    await emit(sorElkeszultEvent);  
  
  }

/**
 * Sample transaction processor function.
 * @param {org.sor.basic.DeleteAllData} tx The sample transaction instance.
 * @transaction
 */

async function DeleteAllDataTransaction(tx) {  // eslint-disable-line no-unused-vars

    const sorIvoReg = await getParticipantRegistry('org.sor.basic' + '.SorIvo');  

    let allSorIvo = await sorIvoReg.getAll();
   
    await sorIvoReg.removeAll(allSorIvo);

  
    const hordoSorReg = await getAssetRegistry('org.sor.basic' + '.HordoSorAsset');  

    let hordoSor = await hordoSorReg.getAll();
   
    await hordoSorReg.removeAll(hordoSor);

  
}
