function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        UserProfileSections: function() {
            return a
        },
        UserProfileTypes: function() {
            return r
        },
        getBadgeAsset: function() {
            return d
        }
    });
    var n, l, a, r, u = i("49111");

    function d(t) {
        let {
            API_ENDPOINT: e,
            CDN_HOST: i
        } = window.GLOBAL_ENV;
        return null != i ? "".concat(location.protocol, "//").concat(i, "/badge-icons/").concat(t, ".png") : "".concat(location.protocol).concat(e).concat(u.Endpoints.BADGE_ICON(t))
    }(n = a || (a = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = r || (r = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"
}