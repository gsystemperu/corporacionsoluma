

Ext.define('corporacionsoluma.view.mrp.ContenedorFormulas', {
  extend: 'Ext.panel.Panel',
  xtype: 'wContenedorFormula',
  itemId : 'wContenedorFormula',
  requires: [
    'Ext.layout.container.Card',
    'corporacionsoluma.util.Rutas',
    'corporacionsoluma.view.mrp.AccionesContenedorFormulas',
  ],
  layout: {
    type: 'card',
    align: 'stretch',
    deferredRender: true,
  },
  bodyPadding: 0,
  defaults: {
    bodyPadding: 0,
    border: false
  },
  controller :'acciones-contenedorformulas',
  initComponent: function () {
    me = this;
    Ext.apply(this,
    {
      items: [
      {
        xtype: 'wListadoFormulas'
      },
      {
        xtype:'wFormListaMaterial',
      }
    ],
    tbar: me.getBotonesERP()

    });
    this.callParent();
  },
  getBotonesERP:function(){
    return obj = [
          {
              text: 'CREAR',
              itemId: 'btnIngresarFormula',
              handler: "onClickIngresarFormula",
          },
          {
                  text: 'IMPRIMIR',
                  itemId : 'btnImprimirFormula',
                  handler: "onClickImprimirPDFFormula",
          }

    ];
  }
});
