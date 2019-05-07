import { LightningElement, wire, track } from 'lwc';
import findAppProg from '@salesforce/apex/appProgController.findAppProg';

export default class AppProgFunc extends LightningElement {
        @track value = '';
        @track tf;
        get options() {
            return [
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
            ];
        }
 
// begin search

    tf = true;
    @track searchKey = '';
    @track Application_Programs1;
    @track error;

    @wire(findAppProg, { searchKey: '$searchKey' })
    wiredAppProgs({ error, data }) {
        if (data) {
            this.Application_Programs1 = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.Application_Programs1 = undefined;
        }
    }
}
