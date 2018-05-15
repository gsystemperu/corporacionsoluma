Ext.define('corporacionsoluma.store.Menu', {
    extend: 'Ext.data.Store',
    requires: [
        'corporacionsoluma.util.Util'
    ],
    model: 'corporacionsoluma.model.menu.Accordion',
    extraParams:{
      vusuario : 0
    },
    autoLoad: false,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url: 'resources/api/usuario_menu',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){
                corporacionsoluma.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});
