function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("512722"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("436208"),
        l = n("649455"),
        c = n("396586"),
        f = n("957808"),
        d = n("306912"),
        _ = n("208454"),
        E = n("264437"),
        p = n("794173"),
        m = n("906885"),
        y = n("929939"),
        I = n("879862"),
        h = n("731616");

    function O(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function T(e) {
        e.stopPropagation()
    }

    function S(e) {
        var t, n = e.user,
            o = e.guildId,
            i = e.channelId,
            _ = e.messageId,
            S = e.closePopout,
            v = e.setPopoutRef,
            g = e.disableUserProfileLink,
            A = void 0 === g ? __OVERLAY__ : g,
            b = e.newAnalyticsLocations;
        var N = (0, c.default)(((function(e) {
                if (Array.isArray(e)) return O(e)
            })(t = void 0 === b ? [] : b) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }
            }(t) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).concat([l.default.BITE_SIZE_PROFILE_POPOUT])).analyticsLocations,
            R = r.useRef(null),
            C = (0, p.default)(n.id, o),
            P = (0, s.default)(R),
            D = (0, a.useStateFromStores)([d.default], function() {
                return null != o ? d.default.getGuild(o) : null
            }),
            L = (0, a.useStateFromStores)([f.default], function() {
                return null != o ? f.default.getMember(o, n.id) : null
            });
        return r.useEffect(function() {
            null == v || v(null == R ? void 0 : R.current)
        }, [R, v]), r.createElement(c.AnalyticsLocationProvider, {
            value: N
        }, r.createElement(E.UserProfileAnalyticsProvider, {
            layout: "BITE_SIZE_POPOUT",
            userId: n.id,
            guildId: o,
            channelId: i,
            messageId: _,
            shouldTrackViewOnMount: null == L || null != L.fullProfileLoadedTimestamp
        }, r.createElement(u.Dialog, {
            ref: R,
            "aria-label": n.username,
            onClick: T,
            onContextMenu: T
        }, r.createElement(m.default, {
            user: n,
            guildId: o,
            profileType: h.UserProfileTypes.POPOUT
        }, r.createElement(y.BiteSizeProfileHeader, {
            user: n,
            displayProfile: C,
            guildId: o,
            channelId: i,
            onClose: function() {
                return null == S ? void 0 : S()
            },
            disableUserProfileLink: A,
            isHovering: P
        }), r.createElement(m.default.Inner, null, r.createElement(I.default, {
            user: n,
            displayProfile: C,
            guild: D,
            channelId: i
        }))))))
    }
    t.default = r.memo(function(e) {
        var t = e.userId,
            n = e.user,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["userId", "user"]),
            u = (0, a.useStateFromStores)([_.default], function() {
                return _.default.getUser(t)
            }, [t]),
            s = null != n ? n : u;
        return i()(null != s, "Unexpected missing user"), r.createElement(S, function(e) {
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
            user: s
        }, o))
    })
}