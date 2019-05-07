import { LightningElement, track, wire, api } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
//import { getRecord} from 'lightning/uiRecordApi';  // added for test
import findAppProg from '@salesforce/apex/appProgController.findAppProg';

// from bs
import APPPROG_OBJECT from '@salesforce/schema/Application_Program__c';

import APPPROG_NAME_FIELD from '@salesforce/schema/Application_Program__c.Name';
import APPPROG_ID_FIELD from '@salesforce/schema/Application_Program__c.Id';
import APPPROG_FIRST_NAME_FIELD from '@salesforce/schema/Application_Program__c.First_Name__c';
import APPPROG_LAST_NAME_FIELD from '@salesforce/schema/Application_Program__c.Last_Name__c';
import APPPROG_DOB_FIELD from '@salesforce/schema/Application_Program__c.Date_of_Birth__c';
import APPPROG_ACCEPTED_FIELD from '@salesforce/schema/Application_Program__c.Accepted__c';
import APPPROG_PHONE_FIELD from '@salesforce/schema/Application_Program__c.Phone__c';
import APPPROG_NOT_JOINING_FIELD from '@salesforce/schema/Application_Program__c.Not_Joining_Reason__c';
import APPPROG_ENROLL_DECISION_FIELD from '@salesforce/schema/Application_Program__c.Enrollment_Decision__c';
//import APPPROG_UNID_FIELD from '@salesforce/schema/Application_Program__c.uNID__c';


/** The delay used when debouncing event handlers before invoking Apex. */
const DELAY = 300;
console.log('delay is: '+ DELAY);


//const testRecId= APPPROG_ID_FIELD;
console.log('APPPROG_ID_FIELD: '+ APPPROG_ID_FIELD);
/* below added for test
const APPFIELDS = [
    'Application_Program__c.Id',
    'Application_Program__c.Name',
    'Application_Program__c.Date_of_Birth__c',
    'Application_Program__c.Phone__c',
    'Application_Program__c.uNID__c',
];
END   */

//console.log('testRecId ' + testRecId);
console.log('id: ' + APPPROG_ID_FIELD);
// let str = JSON.stringify(APPPROG_OBJECT);
let str = JSON.stringify(APPPROG_OBJECT, null, 4); // (Optional) beautiful indented output.
console.log('str obj beautiful: ' + str);

let str2 = JSON.stringify(APPPROG_ID_FIELD, null, 4); // (Optional) beautiful indented output.
console.log('str2 ID: ' + str2);

export default class appProgIntent extends LightningElement {
    
// below uses Wire Method with Parameters
    @track searchKey = '';
    @track error;

    @wire(findAppProg, { searchKey: '$searchKey' }) Application_Programs1;
//    @wire(getRecord, { recordId: APPPROG_ID_FIELD, fields: APPFIELDS }) 
//    Application_Programs1;


//   @wire(getRecord, { recordId: '$recordId'}) Application_Programs1; //will this work????

    
/**
 * Updates Application_Program records.
 */
    @api recordId;
    @api Application_Program__c;
    appProgObject = APPPROG_OBJECT;

//    let str3 = JSON.stringify(appProgObject, null, 4); // (Optional) beautiful indented output.
//    console.log('ID: ' + str3);


//    console.log('id: ' + APPPROG_ID_FIELD); 

    /* Load Name for custom rendering 
    @wire(getRecord, { recordId: '$recordId', fields: [APPPROG_NAME_FIELD] })
    record;

        // Gets the appProg.Name value. 
        get nameValue() {
            return this.record.data ? getFieldValue(this.record.data, APPPROG_NAME_FIELD) : '';
        }
        */
    notJoining = APPPROG_NOT_JOINING_FIELD;
    enrollDecision = APPPROG_ENROLL_DECISION_FIELD;
    //appProgId = APPPROG_ID_FIELD;
 
    
    bsFields = [APPPROG_ID_FIELD, APPPROG_NAME_FIELD, APPPROG_FIRST_NAME_FIELD, APPPROG_LAST_NAME_FIELD, APPPROG_DOB_FIELD, APPPROG_PHONE_FIELD, APPPROG_ACCEPTED_FIELD, APPPROG_NOT_JOINING_FIELD, APPPROG_ENROLL_DECISION_FIELD];

//        bsf = JSON.stringify(bsFields, null, 4);

//    console.log(bsf);
//console.log(JSON.parse(JSON.stringify(appProgObject)));
//console.dir(document.body);
    
    handleAppProgUpdated(){
        // Run code when account is created.
    }





    //@wire(getRecord, { recordId: '$recordId'}) Application_Programs1; //will this work????

/* added for test
@api recordId;

    @wire(getRecord, { recordId: '$recordId'})
    Application_Programs1;
*/
    get name() {
        return this.Application_Program__c.data ? getSObjectValue(this.Application_Program__c.data, APPPROG_ID_FIELD) : '';
    }
/*
    get appid() {
        return this.Application_Program__c.data.fields.Application_Program__c.id.value;
    }
*/
    get dob() {
        return this.Application_Program__c.data.fields.Date_of_Birth__c.value;
    }

    get phone() {
        return this.Application_Program__c.data.fields.Phone.value;
    }


// Is this you? select    
@track value = '';

get options() {

    return [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];
}





    showArtCard1(){
        const form1 = this.template.querySelector('[data-id="form1"]');
        const artCard1 = this.template.querySelector('[data-id="artCard1"]');
        form1.className = 'slds-hide';
        artCard1.className = 'slds-show';

//        console.log(form1);
    }



    showArtCard2(){
        const artCard1 = this.template.querySelector('[data-id="artCard1"]');
        const artCard2 = this.template.querySelector('[data-id="artCard2"]');
        artCard1.className = 'slds-hide';
        artCard2.className = 'slds-show';
    }
    showArtCard3(){
        const artCard2 = this.template.querySelector('[data-id="artCard2"]');
        const artCard3 = this.template.querySelector('[data-id="artCard3"]');
        artCard2.className = 'slds-hide';
        artCard3.className = 'slds-show';
    }

    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

    handleWhoChange(event){
        const selectedOption = event.detail.value;
        const form1 = this.template.querySelector('[data-id="form1"]');

        console.log(`Option selected with value: ${selectedOption}`);
         form1.className = 'slds-show';
    
    }


}



/**

get recordTypeId() {
    const rtis = this.objectInfo.data.recordTypeInfos;
    return Object.keys(rtis).find(rti => rtis[rti].name === 'Special Account');
}

*/