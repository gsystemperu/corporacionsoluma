
Ext.define('corporacionsoluma.Application', {
    extend: 'Ext.app.Application',
    name: 'corporacionsoluma',
    stores: [
      'StoreMantenimientos',
      'StoreProductos',
      'StoreProveedores',
      'StoreAbastecimiento',
      'StoreOrdenCompra',
      'StoreVentas',
      'StoreManufactura'
    ],
    views:[
        'main.Main',
        'conf.Maestros',
        'almacen.Almacenes',
        'almacen.Producto',
        'almacen.ReglasAbastecimiento',
        'almacen.IngresarAbastecimiento',
        'almacen.Proveedor',
        'almacen.ProductoBuscar',
        'almacen.FormProveedor',
        'compras.OrdenCompra',
        'compras.GuiasEntrada',
        'compras.ContenedorGuias',
        'almacen.ProductoExistencias',
        'almacen.ContenedorProducto',
        'almacen.ProductoUbicacion',
        'compras.ContenedorOrdenCompra',
        'almacen.ProductoBuscarOC',
        'compras.PagosAcuenta',
        'almacen.ContenedorInventario',
        'almacen.ListadoInventario',
        'almacen.InventarioInicial',
        'almacen.InventarioInicialEditar',
        'almacen.ActualizarDisponibilidad',
        'ventas.ContenedorCotizaciones',
        'ventas.ContenedorCliente',
        'ventas.ListadoDeCotizaciones',
        'ventas.RegistrarCliente',
        'ventas.RegistrarProducto',
        'ventas.BuscarProducto',
        'ventas.ListadoClientes',
        'ventas.Mantenimiento',
        'ventas.VisorClienteCotizacion',
        'ventas.VisorProductoCotizacion',
        'ventas.VisorVendedorCotizacion',
        'ventas.EditarCotizacion',
        'ventas.Imprimir',
        'ventas.ListadoUsuarios',
        'ventas.CotizacionesClienteBuscar',
        'ventas.ListadoDeCotizacionesFacturar',
        'ventas.ContenedorCotizacionesFacturar',
        'ventas.RegistroCotizacionFacturar',
        'ventas.PagosAcuenta',
        'ventas.GuiaRemision',
        'ventas.ListadoClienteFacturacion',
        'ventas.ListadoClienteCotizacion',
        'ventas.VisualizarCotizacionFacturar',
        'ventas.RegistrarFacturaBoleta',
        'ventas.BuscarProductoFB',
        'puntoventa.ContenedorMain',
        'puntoventa.ListadoPdv',
        'puntoventa.PagosAcuentaPdv',
        'puntoventa.AperturaCaja',
        'mrp.ContenedorFormulas',
        'mrp.ListadoFormulas',
        'mrp.FormListaMaterial',

        //@Conf views
        'conf.configEmpresa',
        //@DashBoard
        'dashboard.Almacen',
        'dashboard.AlmacenGraficoMovimientoProducto'
    ],

     models: [
      'corporacionsoluma.model.DataModels',
      'corporacionsoluma.model.DataModelVentas',
      'corporacionsoluma.model.DataModelMrp'
    ],
    launch: function () {
       //$('#splashscreen').hide();
       Ext.util.Format.decimalSeparator  = '.';
       Ext.util.Format.thousandSeparator = ' ';
       Ext.util.Format.currencyPrecision = 5;

       Ext.create('wMain');
       document.getElementById("splashscreen").style.display = 'none';  
       
    }
});
