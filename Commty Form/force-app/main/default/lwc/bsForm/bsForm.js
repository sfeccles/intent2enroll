import { LightningElement, api } from 'lwc';
import APPPROG_OBJECT from '@salesforce/schema/Application_Program__c';
import NAME_FIELD from '@salesforce/schema/Application_Program__c.Name';
import ACCEPTED_FIELD from '@salesforce/schema/Application_Program__c.Accepted__c';
import PHONE_FIELD from '@salesforce/schema/Application_Program__c.Phone__c';
import NOTJOINING_FIELD from '@salesforce/schema/Application_Program__c.Not_Joining_Reason__c';
import ENROLLDECISION_FIELD from '@salesforce/schema/Application_Program__c.Enrollment_Decision__c';


/**
 * Updates Appllication_Program records.
 */
export default class appProgIntent extends LightningElement {
    @api Application_Program__c;
    appProgObject = APPPROG_OBJECT;
    bsFields = [NAME_FIELD, PHONE_FIELD, ACCEPTED_FIELD, NOTJOINING_FIELD, ENROLLDECISION_FIELD];

    handleAppProgUpdated(){
        // Run code when account is created.
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










}

