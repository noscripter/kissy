﻿/*
Copyright 2013, KISSY UI Library v1.40dev
MIT Licensed
build time: May 23 00:54
*/
/**
 * separator render def
 * @author yiminghe@gmail.com
 */
KISSY.add("separator/separator-render", function (S, Component) {

    return Component.Render.extend({
        initializer: function () {
            this.get('elAttrs')['role'] = 'separator';
        }
    });

}, {
    requires: ['component/base']
});/**
 * separator def
 * @author yiminghe@gmail.com
 */
KISSY.add("separator", function (S, Component, SeparatorRender) {

    /**
     * @extends KISSY.Component.Controller
     * @class
     * separator.
     * xclass: 'separator'.
     * @name Separator
     */
    var Separator = Component.Controller.extend({
    }, {
        ATTRS:/**
         * @lends Separator#
         */
        {

            /**
             * Un-focusable.
             * readonly.
             * Defaults to: false.
             */
            focusable:{
                value:false
            },

            disabled:{
                value:true
            },

            handleMouseEvents:{
                value:false
            },

            xrender:{
                value:SeparatorRender
            }
        }
    }, {
        xclass:'separator'
    });

    return Separator;

}, {
    requires:['component/base', 'separator/separator-render']
});
