public with sharing class appProgController {
    
    @AuraEnabled(Cacheable=true)
    public static Application_Program__c searchAppProgs(String pin) {
        pin = pin.trim();
        // Prepare query paramters
        pin = 'AppProg-'+ pin;
        // Execute search query
        return [SELECT Id, Name, Date_of_Birth__c, First_Name__c, Last_Name__c, uNID__c, 
            High_School__c
            FROM Application_Program__c WHERE Name = :pin LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    //public static Application_Program__c[] getAppProgs() {
    public static List<Application_Program__c> getAppProgs() {
        return [SELECT Id, Name, Date_of_Birth__c, First_Name__c, Last_Name__c, Accepted__c, Enrollment_Decision__c, Not_Joining_Reason__c, Phone__c, uNID__c, High_School__c FROM Application_Program__c LIMIT 1];
    }

    @AuraEnabled(cacheable=true)
    public static List<Application_Program__c> findAppProg(String searchKey) {
        
        if (String.isBlank(searchKey)) {
            return new List<Application_Program__c>();
            }
       
        String key = 'AppProg-'+ searchKey;
//        return new ConstantClass();
        return [SELECT Id, Name, Date_of_Birth__c, First_Name__c, Last_Name__c, Accepted__c, Enrollment_Decision__c, Not_Joining_Reason__c, Phone__c, uNID__c, High_School__c FROM Application_Program__c WHERE Name = :key];
    }

/*
    @AuraEnabled(cacheable=true)
        public static ConstantClass getAllConstants() {
    return new ConstantClass();
}
*/

}
