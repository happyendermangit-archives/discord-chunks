function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDismissNewQuestBadge: function() {
            return S
        },
        useIsQuestExpired: function() {
            return h
        },
        useQuestFormattedDate: function() {
            return O
        },
        useQuestFromActivities: function() {
            return v
        },
        useQuests: function() {
            return y
        },
        useShouldShowSettingBadgeForQuests: function() {
            return T
        }
    });
    var r = n("470079"),
        o = n("945816"),
        i = n("898511"),
        a = n("225098"),
        u = n("532642"),
        s = n("276269"),
        l = n("888901"),
        c = n("995389"),
        f = n("118"),
        d = n("710765"),
        _ = n("961338");

    function E(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t) {
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
        }(e, t) || m(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e, t) {
        if (e) {
            if ("string" == typeof e) return E(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return E(e, t)
        }
    }

    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = p(r.useState(!1), 2),
            o = n[0],
            a = n[1],
            l = (0, i.useStateFromStoresArray)([c.default], function() {
                var e;
                return function(e) {
                    if (Array.isArray(e)) return E(e)
                }(e = c.default.quests.values()) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || m(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }),
            f = (0, i.useStateFromStoresObject)([c.default], function() {
                return {
                    isFetchingCurrentQuests: c.default.isFetchingCurrentQuests,
                    lastFetchedCurrentQuests: c.default.lastFetchedCurrentQuests
                }
            }),
            d = f.isFetchingCurrentQuests,
            y = f.lastFetchedCurrentQuests,
            I = (0, s.getIsEligibleForQuests)({
                location: _.QuestsExperimentLocations.USE_QUESTS
            });
        return r.useEffect(function() {
            !0 === t.fetch && I && !o && !d && 0 === y && (a(!0), (0, u.fetchCurrentQuests)())
        }, [t.fetch, I, o, d, y]), {
            quests: r.useMemo(function() {
                var t = null != e ? new Set(e) : null;
                return l.filter(function(e) {
                    return null == t || t.has(e.id)
                })
            }, [e, l]),
            isFetchingCurrentQuests: d
        }
    }

    function I() {
        var e = y(),
            t = e.quests,
            n = e.isFetchingCurrentQuests,
            i = p(r.useState(function() {
                return new Map(t.map(function(e) {
                    return [e.id, (0, d.isQuestExpired)(e)]
                }))
            }), 2),
            a = i[0],
            u = i[1];
        return r.useEffect(function() {
            if (!n) {
                var e = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, l = t[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) ! function() {
                        var t = s.value;
                        if (null == t || (0, d.isQuestExpired)(t)) null != t && (0, d.isQuestExpired)(t) && u(function(e) {
                            return e.has(t.id) ? e : new Map(e).set(t.id, !0)
                        });
                        else {
                            var n = new o.Timeout,
                                r = function() {
                                    var o = Date.parse(t.config.expiresAt) - Date.now();
                                    n.start(o, function() {
                                        (0, d.isQuestExpired)(t) ? u(function(e) {
                                            return new Map(e).set(t.id, !0)
                                        }): r()
                                    }), e.push(n)
                                };
                            r()
                        }
                    }()
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && null != l.return && l.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return function() {
                    var t = !0,
                        n = !1,
                        r = void 0;
                    try {
                        for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) o.value.stop()
                    } catch (e) {
                        n = !0, r = e
                    } finally {
                        try {
                            !t && null != i.return && i.return()
                        } finally {
                            if (n) throw r
                        }
                    }
                }
            }
        }, [t, n]), a
    }

    function h(e) {
        var t = I();
        return r.useMemo(function() {
            var n;
            return null != e && null !== (n = t.get(e.id)) && void 0 !== n && n
        }, [e, t])
    }

    function O(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                dateStyle: "short"
            },
            n = (0, i.useStateFromStores)([a.default], function() {
                return a.default.locale
            });
        return r.useMemo(function() {
            return null == e ? "" : new Date(e).toLocaleDateString(n, t)
        }, [e, t, n])
    }

    function T() {
        var e = y(void 0, {
                fetch: !0
            }),
            t = e.quests,
            n = e.isFetchingCurrentQuests,
            o = I();
        return r.useMemo(function() {
            var e = [];
            if (n || 0 === t.length) return e;
            var r = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                    var l, c = u.value;
                    if (!!(0, d.includesTarget)(c, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)) {
                        if (null === (l = o.get(c.id)) || void 0 === l || !l) {
                            if ((null == c ? void 0 : c.userStatus) == null) {
                                e.push(c.id);
                                continue
                            }
                            var _ = null != c.userStatus.claimedAt,
                                E = (0, d.isDismissed)(c.userStatus, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE);
                            if (!_ && !E) {
                                e.push(c.id);
                                continue
                            }
                        }
                    }
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !r && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            return e
        }, [t, o, n])
    }

    function S() {
        var e = y().quests,
            t = T().length > 0;
        r.useEffect(function() {
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var s = i.value;
                    t && (0, u.dismissQuestContent)(s.id, f.QuestContent.GIFT_INVENTORY_SETTINGS_BADGE)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        }, [e, t])
    }

    function v(e) {
        var t = (0, l.useIsEligibleForMembersListQuestEntrypoint)({
                location: _.QuestsExperimentLocations.MEMBERS_LIST
            }),
            n = (0, i.useStateFromStores)([c.default], function() {
                return t ? c.default.quests : null
            }),
            o = r.useMemo(function() {
                return (0, d.getQuestsFromActivities)(n, e)
            }, [e, n]);
        return h(o) ? null : o
    }
}