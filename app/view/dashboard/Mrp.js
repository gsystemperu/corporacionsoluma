
Ext.define('corporacionsoluma.view.dashboard.Mrp',{
    extend: 'Ext.panel.Panel',

    requires: [
        'corporacionsoluma.view.dashboard.MrpController',
        'corporacionsoluma.view.dashboard.MrpModel'
    ],

    controller: 'dashboard-mrp',
    viewModel: {
        type: 'dashboard-mrp'
    },

    html: 'Hello, World!!'
});
