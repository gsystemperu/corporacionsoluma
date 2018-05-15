
Ext.define('corporacionsoluma.view.dashboard.PuntoVenta',{
    extend: 'Ext.panel.Panel',

    requires: [
        'corporacionsoluma.view.dashboard.PuntoVentaController',
        'corporacionsoluma.view.dashboard.PuntoVentaModel'
    ],

    controller: 'dashboard-puntoventa',
    viewModel: {
        type: 'dashboard-puntoventa'
    },

    html: 'Hello, World!!'
});
