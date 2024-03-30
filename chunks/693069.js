function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("687990"),
        l = n("414012"),
        c = n("941504"),
        f = n("888386");

    function d() {
        var e = (0, a.useStateFromStores)([l.default], function() {
                return l.default.affinities.slice(0, 3)
            }),
            t = e[0],
            n = (0, s.default)({
                user: t,
                size: u.AvatarSizes.SIZE_24,
                animateOnHover: !0
            }),
            o = n.avatarSrc,
            d = n.eventHandlers,
            _ = function(e) {
                return null != e.globalName ? e.globalName : e.username
            },
            E = r.useMemo(function() {
                return e.length >= 2 ? c.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                    username: _(e[0])
                }) : 1 === e.length ? c.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                    username: _(e[0])
                }) : ""
            }, [e]);
        return 0 === e.length ? null : r.createElement("div", {
            className: f.container
        }, r.createElement(u.Avatar, function(e) {
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
            className: f.__invalid_icon,
            src: o,
            "aria-label": t.username,
            size: u.AvatarSizes.SIZE_24
        }, d)), r.createElement(u.Text, {
            className: i()(f.text),
            variant: "text-sm/normal",
            color: "always-white"
        }, E))
    }
}