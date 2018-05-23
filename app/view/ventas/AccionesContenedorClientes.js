Ext.define('corporacionsoluma.view.ventas.AccionesContenedorClientes', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.acciones-contenedorclientes',
    init:function(){
      console.log('iniciado');
    },
    onClickNuevoCliente:function(btn){
      try {
         me =  Ext.ComponentQuery.query('#wContenedorCliente')[0];    //this;
         l = me.getLayout();
        l.setActiveItem(1);
        Ext.ComponentQuery.query('#wFormClienteListado')[0].reset();
      } catch (e) {
        console.log('Nuevo Cliente');
      }
    },
    onClickVerClientes:function(btn){
      try {
         me =  Ext.ComponentQuery.query('#wContenedorCliente')[0];    //this;
         l = me.getLayout();
        l.setActiveItem(0);
        this.onClickRefrescarListado();

      } catch (e) {
        console.log("Ver clientes");
      }
    },
    onClickVerCotizaciones:function(){
       me =  Ext.ComponentQuery.query('#wContenedorCliente')[0];    //this;
       r  = Ext.ComponentQuery.query('#dgvClientes')[0].getSelectionModel().getSelection()[0];
       l = me.getLayout();
       l.setActiveItem(2);
       Ext.ComponentQuery.query('#dgvVentas')[0].getStore().load({
         params:{
          vPersona : r.get('nomcompleto')
         }
       });

    },
    onClickRefrescarListado: function () {
        _store = Ext.ComponentQuery.query('#dgvClientes')[0].getStore();
        _store.load(1);
    },
    onClickImprimirPDFCotizacion:function(){
       console.log("test");
    },
    onClickVerFacturacionCliente:function(){
       me =  Ext.ComponentQuery.query('#wContenedorCliente')[0];    //this;
       l = me.getLayout();
      l.setActiveItem(3);

      __registro = Ext.ComponentQuery.query('#dgvClientes')[0].getSelectionModel().getSelection()[0];
      __store    = Ext.ComponentQuery.query('#dgvVentasFacturarCliente2')[0].getStore();
      if(__registro){
        __store.load({
          params:{
            idper :__registro.get('idper')
          }
        })
      }
    },
    //@@Reportes Cliente
    onClickImprimirCC:function(){
       _record =  Ext.ComponentQuery.query('#dgvClientes')[0].getSelectionModel().getSelection()[0];
      if (_record) {
          __nombre = _record.get('nombreper');
          __id     = _record.get('idper');
           objrpt = window.open( corporacionsoluma.util.Rutas.rptClienteImprimirPagosCC+ 'idper='+ __id+"&persona="+__nombre, "", "width=700,height=900");
          //setTimeout(function(){ objrpt.close(); }, 1000);
      } else {
          Ext.Msg.alert("Aviso", "Seleccionar al cliente para imprimir");
          return false;
      }

    },
    onClickImprimirListadoCC:function(){
       _record =  Ext.ComponentQuery.query('#dgvClientes')[0].getSelectionModel().getSelection()[0];
      if (_record) {
          __nombre = _record.get('nombreper');
          __id     = _record.get('idper');
           objrpt = window.open( corporacionsoluma.util.Rutas.rptClienteImprimirCC+ 'idper='+ __id+"&persona="+__nombre, "", "width=700,height=900");
          //setTimeout(function(){ objrpt.close(); }, 1000);
      } else {
          Ext.Msg.alert("Aviso", "Seleccionar al cliente para imprimir");
          return false;
      }

    }
  });
