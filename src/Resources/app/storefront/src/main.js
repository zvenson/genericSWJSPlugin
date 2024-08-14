import DesignBurgsJavaScriptPlugin from './design-burgs-plugin/design-burgs-plugin.plugin';

const PluginManager = window.PluginManager;

// Register your plugin with the PluginManager
PluginManager.register('DesignBurgsJavaScriptPlugin', DesignBurgsJavaScriptPlugin, '[data-design-burgs-plugin]', {
    positionStickyMenuIsActive: 120,
    notActiveViewportsStickyMenu: "'XS', 'SM', 'MD'"
});

