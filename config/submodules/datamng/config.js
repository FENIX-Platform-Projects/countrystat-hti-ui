/*global define*/
define(['jquery', 'fx-submodules/config/baseConfig'],
    function ($, config_base) {

        'use strict';

        //Use the following example to override properties:
        //services.SERVICE_BASE_ADDRESS = "http://fenix.fao.org/d3s_dev2/msd";

        /*var services = {

         TOP_MENU: {
         url: 'json/fenix-ui-topmenu_config.json',
         active: "createdataset"
         },
         SERVICE_BASE_ADDRESS: "http://fenix.fao.org/d3s_dev/msd"
         };*/

        var cfg = {};
        $.extend(cfg, config_base);

        cfg.TOP_MENU = {
            url: './config/submodules/fx-menu/topmenu_config.json',
            container: '#sidebar-wrapper',
            template: 'fx-menu/templates/side.html',
            active: "createdataset",
            lang: "EN"
        };

        cfg.SECONDARY_MENU = {
            url: './submodules/fenix-ui-data-management/config/secondary_menu.json',
            disable: ['delete', 'close', 'data', 'dsd']
        }

        cfg.SITE_TEMPLATE = 'topmenu';


        cfg.DSD_EDITOR_CONTEXT_SYSTEM = "cstat_hti";
        cfg.DSD_EDITOR_DATASOURCES = ["D3S"];

        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_PROD.json";
        //cfg.METADATA_EDITOR_AJAX_EVENT_CALL = "config/submodules/metadataEditor/fx-editor-ajax-config_PROD.json";

        return cfg;
    });