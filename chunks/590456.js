function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        UserProfileSections: function() {
            return a
        },
        UserProfileTypes: function() {
            return u
        },
        getBadgeAsset: function() {
            return d
        }
    });
    var n, l, a, u, r = i("49111");

    function d(e) {
        let {
            API_ENDPOINT: t,
            CDN_HOST: i
        } = window.GLOBAL_ENV;
        return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(r.Endpoints.BADGE_ICON(e))
    }(n = a || (a = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = u || (u = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"
}