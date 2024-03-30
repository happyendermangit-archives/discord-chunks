function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AvatarWrapper: function() {
            return p
        },
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("687990"),
        l = n("414012"),
        c = n("962839"),
        f = n("941504"),
        d = n("252973");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        var t = e.smallerText,
            n = e.className,
            o = e.textColor,
            s = (0, a.useStateFromStores)([l.default], function() {
                return l.default.affinities.slice(0, 3).reverse()
            }),
            _ = s.map(function(e, t) {
                return r.createElement(p, {
                    key: e.id,
                    affinity: e,
                    applyMask: t !== s.length - 1,
                    size: c.AvatarSizes.SIZE_32
                })
            }),
            E = function(e) {
                return null != e.globalName ? e.globalName : e.username
            },
            m = r.useMemo(function() {
                return 3 === s.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
                    username: E(s[2])
                }) : 2 === s.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_2.format({
                    username: E(s[1]),
                    otherUsername: E(s[0])
                }) : 1 === s.length ? f.default.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
                    username: E(s[0])
                }) : ""
            }, [s]);
        return 0 === s.length ? null : r.createElement("div", {
            className: i()(d.container, n)
        }, r.createElement("div", {
            className: d.iconContainer
        }, _), r.createElement("div", {
            className: d.textContainer
        }, r.createElement(function() {
            return t ? r.createElement(u.Text, {
                variant: "text-lg/medium",
                color: o
            }, m) : r.createElement(u.Heading, {
                variant: "heading-xl/medium",
                color: o
            }, m)
        }, null)))
    }

    function p(e) {
        var t = e.affinity,
            n = e.applyMask,
            o = e.size,
            a = (0, s.default)({
                user: t,
                size: o,
                animateOnHover: !0
            }),
            l = a.avatarSrc,
            c = a.eventHandlers;
        return r.createElement(u.Avatar, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    _(e, t, n[t])
                })
            }
            return e
        }({
            className: i()(d.icon, _({}, d.mask, n)),
            src: l,
            "aria-label": t.username,
            size: o
        }, c))
    }
}