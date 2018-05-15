
Ext.define('corporacionsoluma.view.dashboard.Compras',{
    extend: 'Ext.panel.Panel',

    requires: [
        'corporacionsoluma.view.dashboard.ComprasController',
        'corporacionsoluma.view.dashboard.ComprasModel'
    ],

    controller: 'dashboard-compras',
    viewModel: {
        type: 'dashboard-compras'
    },

    html: 'Hello, World!!'
});
