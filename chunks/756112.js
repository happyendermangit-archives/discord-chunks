function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("331639"),
        a = n("295453"),
        u = n("521862"),
        s = n("941504"),
        l = n("154278");

    function c(e) {
        var t, n, c = e.color,
            f = e.look,
            d = e.platform;
        if ((0, o.useStateFromStores)([a.default], function() {
                return a.default.getAccounts().some(function(e) {
                    return e.type === d.type
                })
            })) return null;
        return r.createElement(u.default, (t = function(e) {
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
            key: "connect-platform-activity",
            onClick: function() {
                return (0, i.default)({
                    platformType: d.type,
                    location: "Activity Action"
                })
            }
        }, {
            color: c,
            look: f
        }), n = (n = {
            fullWidth: !0
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), r.createElement("div", {
            className: l.flex
        }, r.createElement("img", {
            alt: "",
            className: l.platformIcon,
            src: d.icon.whiteSVG
        }), s.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
            platform: d.name
        })))
    }
}