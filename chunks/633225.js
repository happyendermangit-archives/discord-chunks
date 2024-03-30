function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useLegacyPlatformType: function() {
            return v
        },
        usePlatformAllowed: function() {
            return T
        },
        usePlatforms: function() {
            return S
        }
    });
    var r, o, i, a = n("470079"),
        u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("386823"),
        f = n("501203"),
        d = n("295453"),
        _ = n("208454"),
        E = n("388990"),
        p = n("281767"),
        m = n("654546");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var I = (r = {}, o = p.PlatformTypes.INSTAGRAM, i = ["1036753656588017764"], o in r ? Object.defineProperty(r, o, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : r[o] = i, r),
        h = new Map([
            [p.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
        ]),
        O = 30 * E.default.Millis.DAY;

    function T(e) {
        var t = e.forUserProfile,
            n = (0, l.useStateFromStores)([_.default], function() {
                return _.default.getCurrentUser()
            }),
            r = f.PlayStationVoiceExperiment.useExperiment({
                location: "f2f7ef_1"
            }, {
                autoTrackExposure: !1
            }).allowPlayStationStaging;
        return function(e) {
            var o;
            return e.type === p.PlatformTypes.PLAYSTATION_STAGING ? r : !!(void 0 !== n && (null === (o = I[e.type]) || void 0 === o ? void 0 : o.includes(n.id))) || !!t || e.enabled
        }
    }

    function S() {
        var e = (0, l.useStateFromStores)([d.default], function() {
                return d.default.getAccounts()
            }),
            t = T({
                forUserProfile: !1
            }),
            n = a.useMemo(function() {
                var t = new Set;
                return e.forEach(function(e) {
                    return t.add(e.type)
                }), t
            }, [e]);
        return s().sortBy(c.default.filter(t), [function(e) {
            var t;
            return !(h.has(e.type) && Date.now() < (null !== (t = h.get(e.type)) && void 0 !== t ? t : 0) + O)
        }, function(e) {
            return n.has(e.type)
        }, function(e) {
            return e.hasMetadata
        }, function(e) {
            return !p.ACTIVITY_PLATFORM_TYPES.has(e.type)
        }, function(e) {
            return e.name
        }])
    }

    function v(e) {
        var t, n, r = (t = a.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = r[0],
            i = r[1];

        function u(e) {
            e.key === m.KeyboardKeysUpdated.SHIFT && i(!0)
        }

        function s(e) {
            e.key === m.KeyboardKeysUpdated.SHIFT && i(!1)
        }
        return (a.useEffect(function() {
            return window.addEventListener("keydown", u), window.addEventListener("keyup", s),
                function() {
                    window.removeEventListener("keydown", u), window.removeEventListener("keyup", s)
                }
        }, []), o && e === p.PlatformTypes.TWITTER) ? p.PlatformTypes.TWITTER_LEGACY : e
    }
}