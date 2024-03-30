function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var r = n("663882"),
        o = n("672870"),
        i = n("188950"),
        a = n("896154"),
        u = n("281767"),
        s = n("941504");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        var t;
        return c(t = {}, u.ActivityTypes.STREAMING, e ? s.default.Messages.UNFORMATTED_STREAMING : s.default.Messages.STREAMING), c(t, u.ActivityTypes.LISTENING, e ? s.default.Messages.UNFORMATTED_LISTENING_TO : s.default.Messages.LISTENING_TO), c(t, u.ActivityTypes.WATCHING, e ? s.default.Messages.UNFORMATTED_WATCHING : s.default.Messages.WATCHING), c(t, u.ActivityTypes.COMPETING, e ? s.default.Messages.UNFORMATTED_COMPETING : s.default.Messages.COMPETING), t
    }

    function d(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = arguments.length > 3 ? arguments[3] : void 0;
        if (null != e && e.type === u.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
        if (null != t) return null == e || e.type !== u.ActivityTypes.PLAYING ? s.default.Messages.SHARING_SCREEN : f(n)[u.ActivityTypes.STREAMING].format({
            name: e.name
        });
        if (l && null != e && e.type === u.ActivityTypes.HANG_STATUS) return (0, r.getHangStatusText)(e);
        if (null == e || null == e.name) return null;
        if ((0, a.default)(e)) {
            var c = null != e.details && "" !== e.details ? e.details : e.name;
            return f(n)[u.ActivityTypes.STREAMING].format({
                name: c
            })
        }
        return (0, i.default)(e) ? (0, o.default)(e.name) : function(e, t, n) {
            var r = f(n);
            switch (e) {
                case u.ActivityTypes.LISTENING:
                case u.ActivityTypes.WATCHING:
                case u.ActivityTypes.COMPETING:
                    return r[e].format({
                        name: t
                    });
                case u.ActivityTypes.CUSTOM_STATUS:
                case u.ActivityTypes.HANG_STATUS:
                    return null;
                case u.ActivityTypes.PLAYING:
                default:
                    return n ? s.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                        game: t
                    }) : s.default.Messages.PLAYING_GAME.format({
                        game: t
                    })
            }
        }(e.type, e.name, n)
    }

    function _(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (Array.isArray(e)) {
            var o = e;
            if (null != t) {
                ;
                o = ((function(e) {
                    if (Array.isArray(e)) return l(e)
                })(f = o) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(f) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return l(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                    }
                }(f) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([null])
            }
            var i = null,
                a = !0,
                s = !1,
                c = void 0;
            try {
                for (var f, _, E = o[Symbol.iterator](); !(a = (_ = E.next()).done); a = !0) {
                    var p = _.value,
                        m = d(p, t, n, r);
                    if (null != m) return {
                        activity: p,
                        activityText: m
                    };
                    (null == p ? void 0 : p.type) === u.ActivityTypes.CUSTOM_STATUS && null != p.emoji && (i = p)
                }
            } catch (e) {
                s = !0, c = e
            } finally {
                try {
                    !a && null != E.return && E.return()
                } finally {
                    if (s) throw c
                }
            }
            return (null == i ? void 0 : i.emoji) != null ? {
                activity: i,
                activityText: null
            } : null
        }
        return d(e, t, n, r)
    }
}