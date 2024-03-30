function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return g
        },
        mentionUser: function() {
            return p
        }
    });
    var n = r("470079"),
        l = r("898511"),
        i = r("784184"),
        a = r("669140"),
        o = r("935741"),
        c = r("29884"),
        u = r("894288"),
        s = r("120447"),
        f = r("830567"),
        d = r("281767"),
        m = r("941504");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function p(e, t) {
        var r = e.id,
            n = "@".concat(f.default.getUserTag(e, {
                decoration: "never"
            }));
        s.ComponentDispatch.dispatchToLastSubscribed(d.ComponentActions.INSERT_TEXT, {
            plainText: n,
            rawText: "<@".concat(r, ">")
        }), null != t && a.default.startTyping(t)
    }

    function g(e, t, r) {
        var a, s, f = (a = (0, l.useStateFromStoresArray)([u.default, o.default, c.default], function() {
                var e = u.default.getChannelId(t),
                    r = o.default.getChannel(e);
                return [e, null != r && (r.isMultiUserDM() || c.default.can(d.Permissions.SEND_MESSAGES, r))]
            }, [t]), s = 2, function(e) {
                if (Array.isArray(e)) return e
            }(a) || function(e, t) {
                var r, n, l = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != l) {
                    var i = [],
                        a = !0,
                        o = !1;
                    try {
                        for (l = l.call(e); !(a = (r = l.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        o = !0, n = e
                    } finally {
                        try {
                            !a && null != l.return && l.return()
                        } finally {
                            if (o) throw n
                        }
                    }
                    return i
                }
            }(a, s) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t)
                }
            }(a, s) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            g = f[0],
            y = f[1],
            b = r === d.AppContext.POPOUT;
        return !y || b ? null : n.createElement(i.MenuItem, {
            id: "mention",
            label: m.default.Messages.MENTION,
            action: function() {
                p(e, g)
            }
        })
    }
}