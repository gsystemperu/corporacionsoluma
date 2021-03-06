Ext.define('corporacionsoluma.store.StoreAbastecimiento', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/* 
@DataSet :
Stores para las operaciones de Abastecimiento
==============================================================
*/
Ext.define('corporacionsoluma.store.Abastecimientos', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Abastecimiento',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
     pageSize  : 100,
    extraParams :{
        desde       : null,
        hasta       : null,
        proveedor   : 0
    },
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/abastecimiento_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
            totalProperty : 'totalreg'

        }
    }
});

/* 
@DataSet :
Stores para las operaciones de Abastecimiento Detalle
==============================================================
*/
Ext.define('corporacionsoluma.store.AbastecimientoDetalle', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.AbastecimientoDetalle',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    extraParams :{id       : null},
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/abastecimiento_detalle'},
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
