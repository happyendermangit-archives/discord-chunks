function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("680524"),
        i = n("111540"),
        a = n("157941"),
        u = n("281767"),
        s = n("315472");

    function l(e) {
        var t = e.activity,
            n = e.user,
            l = e.color,
            c = e.look,
            f = e.guildId,
            d = e.channelId,
            _ = e.source;
        if (null == t || !(0, i.default)(t, u.ActivityFlags.SYNC)) return null;
        var E = {
            key: "sync",
            className: s.button,
            size: s.buttonSize,
            color: l,
            look: c,
            user: n,
            activity: t
        };
        return (0, a.default)(t) ? r.createElement(o.default, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({
            guildId: null != f ? f : void 0,
            channelId: d,
            source: _
        }, E)) : null
    }
}