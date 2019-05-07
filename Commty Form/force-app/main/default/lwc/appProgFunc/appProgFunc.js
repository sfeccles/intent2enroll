import { LightningElement, wire, track } from 'lwc';
import getAppProgs from '@salesforce/apex/appProgController.getAppProgs';

export default class ApexWireMethodToFunction extends LightningElement {
    @track Application_Programs1;
    @track error;

    @wire(getAppProgs)
    wiredApplication_Programs1({ error, data }) {
        if (data) {
            this.Application_Programs1 = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.Application_Programs1 = undefined;
        }
    }
}