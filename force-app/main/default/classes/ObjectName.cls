public with sharing class ObjectName {

    @AuraEnabled(cacheable=true)
    public static List<String> getNames(String objectName){
        String query = 'SELECT name FROM ' + objectName;
        List<SObject> records = Database.query(query);
        List<String> names = new List<String>();
        // Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        // Map<String, Schema.SObjectField> fieldMap = schemaMap.get(objectName).getDescribe().fields.getMap();
        
        // for (String fieldName : fieldMap.keySet()){
        //     System.debug('FieldName: --> ' + fieldName);
        //     fields.add(fieldName);
        // }
        for(SObject field: records){
            names.add(String.valueOf(field.get('Name')));
        }
        System.debug(records);

        return names;
    }
}