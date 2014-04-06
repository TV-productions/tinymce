/**
 * Image.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

/*jshint scripturl:true */

/**
 * This class creates an image.
 *
 * @setting {String} src    Source URL for image.
 * @setting {Number} width  The width of the image.
 * @setting {Number} Height The height of the image.
 * 
 * @author TV productions
 *
 * @-x-less Image.less
 * @class tinymce.ui.Image
 * @extends tinymce.ui.Widget
 */
define("tinymce/ui/Image", ["tinymce/ui/Widget"], function(Widget) {
    "use strict";

    return Widget.extend({

        Defaults: {
            width: 'auto',
            height: 'auto'
        },

        init: function(settings) {
            var self = this;

            self._super(settings);
        },

        /**
         * Renders the control as a HTML string.
         *
         * @method renderHtml
         * @return {String} HTML representing the control.
         */
        renderHtml: function() {
            var self = this;

            self.addClass('image');
            self.canFocus = false;

            return ('<img id="' + self._id + '" class="' + self.classes() + '" tabindex="-1" src="' + (self.settings.src || "javascript:\'\'") + '" width="' + self.settings.width + '" height="' + self.settings.height + '"/>');
        },

        /**
         * Setter for the image source.
         *
         * @method src
         * @param {String} src Source URL for image.
         */
        src: function(src) {
            this.getEl().src = src;
        }
    });
});