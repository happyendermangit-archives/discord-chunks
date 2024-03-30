function(e, t, n) {
    "use strict";

    function r(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
    }

    function o(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
    }

    function i() {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
    }
    n.r(t), n.d(t, {
        getDefaultDynamicLinkTemplate: function() {
            return i
        },
        getGuildTemplateDynamicLinkTemplate: function() {
            return o
        },
        getInviteDynamicLinkTemplate: function() {
            return r
        }
    })
}