
Ext.define('corporacionsoluma.view.dashboard.Ventas',{
    extend: 'Ext.panel.Panel',

    requires: [
        'corporacionsoluma.view.dashboard.VentasController',
        'corporacionsoluma.view.dashboard.VentasModel'
    ],

    controller: 'dashboard-ventas',
    viewModel: {
        type: 'dashboard-ventas'
    },

    html: 'Hello, World!!'
});
