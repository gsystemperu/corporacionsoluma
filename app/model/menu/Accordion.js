Ext.define('corporacionsoluma.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
       'corporacionsoluma.model.menu.TreeNode'
   ],
   fields: [
       { name: 'id', type: 'int'},
       { name: 'text' },
       { name: 'iconCls' }
   ],
   hasMany: {
       model: 'corporacionsoluma.model.menu.TreeNode',
       foreignKey: 'parent_id',
       name: 'items'
   }
});
