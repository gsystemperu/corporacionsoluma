
Ext.define('corporacionsoluma.view.dashboard.Almacen',{
    extend: 'Ext.panel.Panel',

    requires: [
        'corporacionsoluma.view.dashboard.AlmacenController',
        'corporacionsoluma.view.dashboard.AlmacenModel'
    ],

    controller: 'dashboard-almacen',
    viewModel: {
        type: 'dashboard-almacen'
    },

    html: 'Hello, World!!'
});
