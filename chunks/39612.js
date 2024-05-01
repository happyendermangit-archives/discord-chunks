function(e, t, n) {
    "use strict";

    function i(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
    }

    function r(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
    }

    function a() {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
    }
    n.r(t), n.d(t, {
        getDefaultDynamicLinkTemplate: function() {
            return a
        },
        getGuildTemplateDynamicLinkTemplate: function() {
            return r
        },
        getInviteDynamicLinkTemplate: function() {
            return i
        }
    })
}