<?php

use Phalcon\Mvc\Model;
use Phalcon\Mvc\Model\Resultset\Simple as Resultset;

class Cotizacion extends \Phalcon\Mvc\Model
{
    //@Listados

    //public static function productoListar($vCodigo,$vDescripcion,$vCategoria){
    public static function productoListar($data){
          /*$helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_producto_listar(".
          $helper->esCadenaNulo($vCodigo)  .",".
          $helper->esCadenaNulo($vDescripcion)  .",".
          $helper->esNumeroNulo($vCategoria)  .")";
          //echo $sql;die();
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          $data     = $rs->toArray();
          return    $data[0]['sp_producto_listar'];*/

          $obj     = new SQLHelpers();
          $param   =  $data;
          $sql     =  $obj->executarJson('ventas','sp_producto_listar',$param);
          return $sql;


    }

    //public static function productoListarPorCliente($vCodigo,$vDescripcion,$vCategoria,$vIdCliente){
    public static function productoListarPorCliente($data){
          $obj     = new SQLHelpers();
          $param   =  $data;
          $sql     =  $obj->executarJson('ventas','sp_producto_listar_por_cliente',$param);
          return $sql;
    }

  /*  public static function guardarProducto($vIdProd,$vCodigo,$vDescrip,$vPresen,$vPrecio,$vStock,$vIdCate,$vMarcaProd,$vProcedencia,
    $vIdUnidadMed,$vIdPresentacion,$vEquivalencia,$vRendimientoPlacas, $vPrecioLimaEspecial,$vPrecioProvincia,
    $vPrecioProvinciaEspecial,$vPrecioProvinciaEspecial2,$vPrecioProvinciaEspecial3, $vPrecioLimaEspecial2,$vPrecioLimaEspecial3,
    $vPrecioDistribuidorLima,$vPrecioDistribuidorProvincia){*/
     public static function guardarProducto($data){
        /*  $helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_producto_actualizar(".
          $helper->esNumeroCero($vIdProd) .",".
          $helper->esCadenaNulo($vCodigo).",".
          $helper->esCadenaNulo($vDescrip).",".
          $helper->esCadenaNulo($vPresen).",".
          $helper->esNumeroCero($vStock).",".
          $helper->esNumeroCero($vPrecio).",".
          $helper->esNumeroCero($vIdCate).",".
          $helper->esCadenaNulo($vMarcaProd).",".
          $helper->esCadenaNulo($vProcedencia).",".
          $helper->esNumeroCero($vIdUnidadMed).",".
          $helper->esCadenaNulo($vEquivalencia).",".
          $helper->esCadenaNulo($vRendimientoPlacas).",".
          $helper->esNumeroCero($vIdPresentacion).",'ANDINALAB',".
          $helper->esNumeroCero($vPrecioLimaEspecial).",".
          $helper->esNumeroCero($vPrecioProvincia) .",".
          $helper->esNumeroCero($vPrecioProvinciaEspecial).",".
          $helper->esNumeroCero($vPrecioProvinciaEspecial2).",".
          $helper->esNumeroCero($vPrecioProvinciaEspecial3).",".
          $helper->esNumeroCero($vPrecioLimaEspecial2).",".
          $helper->esNumeroCero($vPrecioLimaEspecial3).",".
          $helper->esNumeroCero($vPrecioDistribuidorLima).",".
          $helper->esNumeroCero($vPrecioDistribuidorProvincia).")";
          //echo $sql;die();
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
           return  $rs->toArray();*/

           $obj     = new SQLHelpers();
           $param   = $data;
           $sql     =  $obj->executar('ventas','sp_producto_actualizar',$param);
           return $sql;
    }

    //public static function eliminarProducto($vIdProd){
    public static function eliminarProducto($data){
          /*$helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_producto_eliminar(".$helper->esNumeroCero($vIdProd).")";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          return  $rs->toArray();*/

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('inventario','sp_producto_eliminar',$param);
          return $sql;
    }
    public static function clienteListar($data){
          $helper   = new FuncionesHelpers();
          $param    = $helper->esCadenaNulo($data[0]) .",".
                      $helper->esCadenaNulo($data[1]) .",".
                      $helper->esCadenaNulo($data[2]);
          $obj     = new SQLHelpers();
          $sql     =  $obj->executarCadenaJsonCondicionado('ventas','sp_persona_listar',$param);
          return $sql;
    }
    //public static function eliminarCliente($vIdCliente,$vUsuario){
    public static function eliminarCliente($data){
          /*$helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_persona_eliminar(".
          $helper->esNumeroCero($vIdCliente).",".
          $helper->esCadenaNulo($vUsuario).")";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          return  $rs->toArray();*/

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_persona_eliminar',$param);
          return $sql;
    }

    public static function tipodocumentoListar(){
          /*$helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.tipodocumento ";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          $data     = $rs->toArray();
          return    $data;*/

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarQuery('SELECT * FROM ventas.tipodocumento');
          return $sql;
    }
    //public static function proveedorListar($vNumDoc,$vNumRuc,$vNmbres){
    public static function proveedorListar($data){
          /*$helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_proveedor_listar (".
          $helper->esCadenaNulo($vNumDoc) .",".
          $helper->esCadenaNulo($vNumRuc). ",".
          $helper->esCadenaNulo($vNmbres) .")";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          $data     = $rs->toArray();
          return    $data;*/


              $obj     = new SQLHelpers();
              $param   = $data;
              $sql     =  $obj->executarJson('ventas','sp_proveedor_listar',$param);
              return $sql;
    }

    public static function cotizacionesListar($data){ 
          $helper     = new FuncionesHelpers();
          $obj        = new SQLHelpers();
          $param      = $helper->esCadenaNulo($data[0]) .",".
          $helper->esCadenaNulo($data[1]) .",".
          $helper->esCadenaNulo($data[2]);
          $sql     =  $obj->executarCadenaJsonCondicionado('ventas','sp_cotizaciones_listar',$param);
          return $sql;
    }
    public static function cotizacionesBuscarCodigo($data){ 
      $obj        = new SQLHelpers();
      $param    = $data;
      $sql     =  $obj->executarJson('ventas','sp_cotizacion_buscar_codigo',$param);
      return $sql;
}

    //public static function detalleCotizacion($vIdCotizacion){
    public static function detalleCotizacion($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_cotizaciones_detalle',$param);
          return $sql;
    }

    public static function detalleCotizacionVista($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarJson('ventas','sp_cotizaciones_detalle_vista',$param);
          return $sql;
    }
    public static function detalleCotizacionVistaDesc($data){
      $obj     = new SQLHelpers();
      $param   = $data;
      $sql     =  $obj->executarJson('ventas','sp_cotizaciones_detalle_vista_desc',$param);
      return $sql;
      }
      public static function detalleCotizacionVistaAsc($data){
            $obj     = new SQLHelpers();
            $param   = $data;
            $sql     =  $obj->executarJson('ventas','sp_cotizaciones_detalle_vista_asc',$param);
            return $sql;
      }


    public static function vendedoresListar($data){
        /*  $helper   = new FuncionesHelpers();
          $sql      = "SELECT * FROM cotizacion.sp_vendedores_listar()";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql));
          $data     = $rs->toArray();
          return    $data[0]['sp_vendedores_listar'];*/

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarJson('ventas','sp_vendedores_listar',$param);
          return $sql;
    }
     public static function vendedoresFiltroListar($data){
          /*$helper   = new FuncionesHelpers();
          $param = array($query);
          $sql      = "SELECT * FROM cotizacion.sp_vendedores_filtro_listar(?)";
          $reporte  = new DpTbCotizacion();
          $rs       = new Resultset(null,$reporte,$reporte->getReadConnection()->query($sql,$param));
          $data     = $rs->toArray();
          return    $data[0]['sp_vendedores_filtro_listar'];*/

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executarJson('ventas','sp_vendedores_filtro_listar',$param);
          return $sql;
    }


    //@Procesos

  public static function agregarCotizacion($data){

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executar('ventas','sp_cotizacion_agregar',$param);
          return   $sql;
    }
    public static function confirmarVentaCotizacion($data){

            $obj     = new SQLHelpers();
            $param   = $data;
            $sql     = $obj->executar('ventas','sp_cotizacion_cofirmar_venta',$param);
            return   $sql;
    }
    public static function eliminarCotizacion($data){
        $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executar('ventas','sp_cotizacion_eliminar',$param);
          return   $sql;
    }


  public static function agregarCliente($data){

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executar('ventas','sp_persona_actualizar',$param);
          return   $sql;

    }

     public static function listarFormaPago(){

          $obj     = new SQLHelpers();
          $param   = "SELECT * FROM  ventas.formapago WHERE estado = '1'";
          $sql     = $obj->executarQuery($param);
          return   $sql;


    }

    public static function listarModoEntrega(){

          $obj     = new SQLHelpers();
          $param   = "SELECT * FROM  ventas.modoentrega WHERE estado = '1'";
          $sql     = $obj->executarQuery($param);
          return   $sql;
    }

    public static function buscarPersonaPrecio($vIdPersona){
      $obj     = new SQLHelpers();
      $param   = "SELECT * FROM  ventas.persona WHERE idper =". $vIdPersona . " AND estado = '1'";
      $sql     = $obj->executarQuery($param);
      return   $sql;
    }

    //@Reportes
    public static function reportePedidoCliente($data){

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executar('ventas','sp_reporte_cotizacion_cliente',$param);
          return $sql;

    }
    public static function reportePedidoDetalle($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     = $obj->executar('ventas','sp_reporte_cotizacion_detalle',$param);
          return $sql;
    }

    //@Tablas Maestras
    public static function listarUnidadMedida(){

          $obj     = new SQLHelpers();
          $param   = "SELECT * FROM ventas.unidadmedida";
          $sql     = $obj->executarQuery($param);
          return $sql;
    }
    public static function listarPresentacion(){

          $obj     = new SQLHelpers();
          $param   = "SELECT idpres, descripcion as despres ,abreviatura as abrepres FROM ventas.presentacion WHERE estado='1'";
          $sql     = $obj->executarQuery($param);
          return $sql;
    }
    public static function listarCategorias(){

          $obj     = new SQLHelpers();
          $param   = "SELECT idcate, descripcion as descate, abreviatura as abrecate FROM cotizacion.categoria WHERE estado='1'";
          $sql     = $obj->executarQuery($param);
          return $sql;
    }

    //@Estadisticas
    public static function estadisticaClienteCotizaciones($data){

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarJson('ventas','sp_estadistica_cliente_cotizaciones',$param);
          return $sql;

    }

     public static function estadisticaProductoCotizaciones($data){

          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarJson('ventas','sp_estadistica_producto_cotizaciones',$param);
          return $sql;
    }

      public static function estadisticaVendedorCotizaciones($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executarJson('ventas','sp_estadistica_vendedor_cotizaciones',$param);
          return $sql;
    }


    //@Mantenimientos de tablas base

     public static function agregarUnidadMedida($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_unidad_medida_actualizar',$param);
          return $sql;
    }


     public static function agregarFormaPago($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_forma_pago_actualizar',$param);
          return $sql;
    }

     public static function agregarModoEntrega($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_modo_entrega_actualizar',$param);
          return $sql;
    }

     public static function agregarVendedor($data){
          $obj     = new SQLHelpers();
          $param   = $data;
          $sql     =  $obj->executar('ventas','sp_vendedor_actualizar',$param);
          return $sql;
    }

    /*
      @Mantenimiento Eliminar
    */
    public static function eliminarVendedor($data){
         $obj     = new SQLHelpers();
         $param   = $data;
         $sql     =  $obj->executar('ventas','sp_vendedor_eliminar',$param);
         return $sql;
   }
   public static function eliminarModoEntrega($data){
        $obj     = new SQLHelpers();
        $param   = $data;
        $sql     =  $obj->executar('ventas','sp_modo_entrega_eliminar',$param);
        return $sql;
  }
  public static function eliminarFormaPago($data){
       $obj     = new SQLHelpers();
       $param   = $data;
       $sql     =  $obj->executar('ventas','sp_forma_pago_eliminar',$param);
       return $sql;
 }

/*
cotizacion.sp_presentacion_actualizar(
      IN pid integer,
      IN pdescripcion character varying,
      IN pabreviatura varchar)
*/
public static function actualizarPresentacion($data){
    $obj     = new SQLHelpers();
    $param   = $data;
    $sql     =  $obj->executar('ventas','sp_presentacion_actualizar',$param);
    return $sql;
}

public static function actualizarCategoria($data){
    $obj     = new SQLHelpers();
    $param   = $data;
    $sql     =  $obj->executar('ventas','sp_categoria_actualizar',$param);
    return $sql;
}

/*
  cotizacion.sp_presentacion_eliminar(IN pid integer)
*/
public static function eliminarPresentacion($data){
     $obj     = new SQLHelpers();
     $param   = $data;
     $sql     =  $obj->executar('ventas','sp_presentacion_eliminar',$param);
     return $sql;
}

/*
  cotizacion.sp_categoria_eliminar(IN pid integer)
*/
public static function eliminarCategoria($data){
     $obj     = new SQLHelpers();
     $param   = $data;
     $sql     =  $obj->executar('ventas','sp_categoria_eliminar',$param);
     return $sql;
}

/**
 * [buscarCotizacionesCliente description]
 * @param  [type] $data [description]
 * @return [type]       [description]
 */
public static function buscarCotizacionesCliente($data){
  $obj     = new SQLHelpers();
  $param   = $data;
  $sql     =  $obj->executarJson('ventas','sp_cotizaciones_cliente_buscar',$param);
  return $sql;
}
/**
 * [buscarCotizacionPorId description]
 * @param  [type] $data [description]
 * @return [type]       [description]
 */
public static function buscarCotizacionPorId($data){
      $obj     = new SQLHelpers();
      $param   =  $data;
      $sql     =  $obj->executarJson('ventas','sp_cotizacion_buscar_id',$param);
      return $sql;
}

public static function listarCotizacionesParaFacturar($data){
      $obj     = new SQLHelpers();
      $param   =  $data;
      $sql     =  $obj->executarJson('ventas','sp_cotizaciones_confirmadas_buscar',$param);
      return $sql;
}
public static function listarCotizacionesParaFacturarPorFechas($data){
      $obj     = new SQLHelpers();
      $param   =  $data;
      $sql     =  $obj->executarJson('ventas','sp_cotizaciones_confirmadas_buscar',$param);
      return $sql;
}


}
