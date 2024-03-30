function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSpotifyJoinAction: function() {
            return g
        },
        useSpotifyPlayAction: function() {
            return S
        },
        useSpotifySyncAction: function() {
            return v
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("945816"),
        a = n("575748"),
        u = n("217014"),
        s = n("388990"),
        l = n("830567"),
        c = n("366621"),
        f = n("290543"),
        d = n("776190"),
        _ = n("829812"),
        E = n("675115"),
        p = n("11630"),
        m = n("935776");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var h = 30 * s.default.Millis.SECOND;

    function O(e) {
        var t = e.currentUserTrackId,
            n = e.syncingWithUser,
            o = e.syncingWithParty,
            u = I(r.useState(!1), 2),
            s = u[0],
            l = u[1],
            c = I(r.useState(function() {
                return new i.Timeout
            }), 1)[0],
            f = (0, a.default)(t);
        r.useEffect(function() {
            s && (t !== f || n || o) && (l(!1), c.stop())
        }, [t, f, n, o, s, c]);
        var d = r.useCallback(function() {
                l(!0), c.start(h, function() {
                    return l(!1)
                })
            }, [c]),
            _ = r.useCallback(function() {
                l(!1), c.stop()
            }, [c]);
        return r.useEffect(function() {
            return function() {
                return c.stop()
            }
        }, [c]), {
            loading: s,
            startLoading: d,
            clearLoading: _
        }
    }

    function T(e, t) {
        return (0, o.useStateFromStoresObject)([c.default, u.default], function() {
            return (0, _.default)(c.default, u.default, t, e)
        }, [e, t])
    }

    function S(e, t, n) {
        var o = T(e, t),
            i = o.notPlayable,
            a = o.isCurrentUser,
            u = o.playingSameTrack,
            s = O(o),
            l = s.loading,
            c = s.startLoading,
            _ = s.clearLoading,
            E = r.useCallback(function() {
                c(), (0, p.default)(o, m.SpotifyActionTypes.USER_ACTIVITY_PLAY, n).catch(_)
            }, [o, n, c, _]);
        return {
            label: (0, f.default)(o, m.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            tooltip: (0, d.default)(o, m.SpotifyActionTypes.USER_ACTIVITY_PLAY),
            disabled: !l && (a || i || u),
            loading: l,
            onClick: E,
            spotifyData: o
        }
    }

    function v(e, t, n, o) {
        var i = null != o ? o : l.default.getName(t),
            a = T(e, t),
            u = a.syncingWithUser,
            s = a.syncingWithParty,
            c = a.isCurrentUser,
            _ = O(a),
            p = _.loading,
            y = _.startLoading,
            I = _.clearLoading,
            h = r.useCallback(function() {
                y(), (0, E.default)(a, m.SpotifyActionTypes.USER_ACTIVITY_SYNC, n).catch(I)
            }, [a, n, y, I]);
        return {
            label: (0, f.default)(a, m.SpotifyActionTypes.USER_ACTIVITY_SYNC),
            tooltip: (0, d.default)(a, m.SpotifyActionTypes.USER_ACTIVITY_SYNC, i),
            disabled: !p && (c || u || s),
            loading: p,
            onClick: h,
            spotifyData: a
        }
    }

    function g(e, t, n) {
        var o = T(e, t),
            i = o.notPlayable,
            a = o.syncingWithUser,
            u = o.syncingWithParty,
            s = o.isCurrentUser,
            l = O(o),
            c = l.loading,
            _ = l.startLoading,
            p = l.clearLoading,
            y = r.useCallback(function() {
                _(), (0, E.default)(o, m.SpotifyActionTypes.EMBED_SYNC, n).catch(p)
            }, [o, n, _, p]);
        return {
            label: (0, f.default)(o, m.SpotifyActionTypes.EMBED_SYNC),
            tooltip: (0, d.default)(o, m.SpotifyActionTypes.EMBED_SYNC),
            disabled: !c && (s || a || u || i),
            loading: c,
            onClick: y,
            spotifyData: o
        }
    }
}