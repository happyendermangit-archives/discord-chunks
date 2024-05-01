function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("405656");
    class a extends i.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                USER_SETTINGS_PROTO_UPDATE: r.refreshSearchTokens,
                I18N_LOAD_SUCCESS: r.refreshSearchTokens,
                POST_CONNECTION_OPEN: r.refreshSearchTokens
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new a
}