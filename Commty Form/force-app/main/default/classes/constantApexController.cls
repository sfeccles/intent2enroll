public with sharing class constantApexController {

    @AuraEnabled(cacheable=true)
    public static ConstantClass getAllConstants() {
        return new ConstantClass();
    }


}