function(e, t, n) {
    "use strict";

    function i(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
    }

    function s(e) {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
    }

    function r() {
        return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
    }
    n.r(t), n.d(t, {
        getInviteDynamicLinkTemplate: function() {
            return i
        },
        getGuildTemplateDynamicLinkTemplate: function() {
            return s
        },
        getDefaultDynamicLinkTemplate: function() {
            return r
        }
    })
}