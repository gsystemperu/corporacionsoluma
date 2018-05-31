Ext.setGlyphFontFamily('FontAwesome');
Ext.require('corporacionsoluma.util.Glyphs');

/*Ext.Loader.setConfig({
  enabled:true,
  paths:{
      'gsperu':'./util'
  }
});*/



Ext.application(
{
    name: 'corporacionsoluma',
    extend: 'corporacionsoluma.Application'

});
