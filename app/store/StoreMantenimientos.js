Ext.define('corporacionsoluma.store.StoreMantenimientos', {extend: 'Ext.data.Store',fields: ["id", "descripcion"],data: [{ id: 'test' }],proxy: { type: 'memory' }});

/* 
@DataSet :
Stores para los mantenimientos de las tablas maestras
==============================================================
*/
Ext.define('corporacionsoluma.store.Estados', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Estado',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/estados_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.Bancos', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Banco',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/bancos_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.Almacenes', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Almacen',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.AlmacenSecciones', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.AlmacenSecciones',
    autoLoad: false,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/almacen_secciones_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.Categoria', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Categoria',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/categoria_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('corporacionsoluma.store.Colores', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Color',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/color_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.Medidas', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Medida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/medidas_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


Ext.define('corporacionsoluma.store.TipoDeProductos', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.TipoDeProducto',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tipo_producto_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.UnidadDeMedidas', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.UnidadDeMedida',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/unidad_medida_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

Ext.define('corporacionsoluma.store.Tarifas', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Tarifa',
    autoLoad: true,
    remoteSort: true,
    autoSync  : true,
    autoDestroy: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tarifa_lista'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});



/* 
@DataSet :
Stores para los mantenimientos Tabla Modelo
==============================================================
*/
Ext.define('corporacionsoluma.store.Modelos', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Modelo',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/modelo_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para los mantenimientos Tabla Marca
==============================================================
*/
Ext.define('corporacionsoluma.store.Marcas', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Marca',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/marca_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las series de documentos del sistema
==============================================================
*/

Ext.define('corporacionsoluma.store.Series', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Serie',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/series_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});

/* 
@DataSet :
Stores para las ticketeras del sistema
==============================================================
*/

Ext.define('corporacionsoluma.store.Ticketeras', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Ticketera',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/ticketeras_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});


/* 
@DataSet :
Stores tiendas 
==============================================================
*/

Ext.define('corporacionsoluma.store.Tiendas', {
    extend: 'Ext.data.Store',
    requiere:['corporacionsoluma.model.DataModels'],
    model   :'corporacionsoluma.model.Tienda',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {read: 'resources/api/tiendas_listar'},
        reader: {
            type: 'json',
            rootProperty: 'data',
        }
    }
});
