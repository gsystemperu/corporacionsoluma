
Ext.define('corporacionsoluma.view.dashboard.Almacen',{
    extend: 'Ext.dashboard.Dashboard',
    xtype : 'dashalmacen',
    requires: [
        'corporacionsoluma.view.dashboard.AlmacenController',
        'corporacionsoluma.view.dashboard.AlmacenModel'
    ],

    controller: 'dashboard-almacen',
    viewModel: {
        type: 'dashboard-almacen'
    },
    maxColumns: 2,
    stateful: true,
    stateId: 'simple-dashboard',
    columnWidths: [0.5, 0.5],
    parts: {
        widget1: 
        {
           
            viewTemplate: { //normal view config, can use xtype to use an application view
                title: 'GUIAS DE ENTRA POR RECEPCIONAR ',
                items:[
                    {xtype:'column-basic'}
                ]
                
            }
        },
        widget2: 
        {
      
            viewTemplate: {
                title: 'PRODUCTOS CON MAYOR MOVIMIENTO',
                html: 'Widget 2'
            }
        },
        widget3: {
            
            viewTemplate: {
                title: 'MOVIMIENTOS DE PRODUCTOS',
                html: 'Widget 3'
            }
        }
    },
    defaultContent: [{
        type: 'widget1', //maps to the parts key
        columnIndex: 0,
        xflex: 1,
        height:300,
    }, {
        type: 'widget3',
        height:300,
        columnIndex: 0,
    }, {
        type: 'widget2',
        columnIndex: 1,
        xflex: 1,
        height:300
    }]
});
