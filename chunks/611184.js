function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("594190"),
        a = n("77498"),
        s = n("454293");

    function o(e) {
        var t, n;
        let {
            game: i
        } = e, o = r.default.isDetectionEnabled(i), l = null !== (n = i.id) && void 0 !== n ? n : null === (t = a.default.getGameByName(i.name)) || void 0 === t ? void 0 : t.id;
        null != l && (0, s.setApplicationSharing)(l, o)
    }
    class l extends i.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                RUNNING_GAME_TOGGLE_DETECTION: o,
                RUNNING_GAME_DELETE_ENTRY: o
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new l
}