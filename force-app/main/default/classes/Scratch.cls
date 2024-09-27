public with sharing class Scratch {

    @AuraEnabled(cacheable=true)
    public static List<String> getFields(String objectName){
        List<String> fields = new List<String>();
        Map<String, Schema.SObjectType> schemaMap = Schema.getGlobalDescribe();
        Map<String, Schema.SObjectField> fieldMap = schemaMap.get(objectName).getDescribe().fields.getMap();
        
        for (String fieldName : fieldMap.keySet()){
            System.debug('FieldName: --> ' + fieldName);
            fields.add(fieldName);
        }

        return fields;
    }
}