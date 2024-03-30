function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDismissibleContentDismissed: function() {
            return T
        },
        markDismissibleContentAsDismissed: function() {
            return g
        },
        requestMarkDismissibleContentAsShown: function() {
            return v
        },
        useIsDismissibleContentDismissed: function() {
            return S
        }
    });
    var r = n("898511"),
        o = n("14782"),
        i = n("271330"),
        a = n("968574"),
        u = n("851285"),
        s = n("870331"),
        l = n("453604"),
        c = n("360636"),
        f = n("733934"),
        d = n("469936"),
        _ = n("331424"),
        E = n("286218"),
        p = n("59562"),
        m = n("348201"),
        y = n("281767");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e, t) {
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
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function T(e) {
        if ((0, p.disableNewUserDismissibleContent)(e)) return !0;
        var t, n = null === (t = u.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
        return null != n && (0, l.hasBit)(n, e)
    }

    function S(e) {
        return (0, r.useStateFromStores)([u.default], function() {
            return T(e)
        })
    }

    function v(e, t, n) {
        if (!((0, E.isContentShown)(e) || d.default.hasUserHitDCCap(e) || function(e) {
                var t = _.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e);
                return i.default.getCurrentConfig({
                    location: "isUserSubjectToDCFHoldout"
                }, {
                    autoTrackExposure: !t
                }).enabled && !t
            }(e))) !n && (0, E.addCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: function() {
                var n, r = O((0, E.getCurrentlyShownCounts)(), 2),
                    i = r[0],
                    a = r[1];
                (0, f.handleDCShownToUser)(e), s.default.track(y.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                    type: o.DismissibleContent[e],
                    content_count: i,
                    fatigable_content_count: a,
                    group_name: null == t ? void 0 : t.groupName,
                    bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                    guild_id: null == t ? void 0 : t.guildId
                }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
            }
        })
    }

    function g(e) {
        return A.apply(this, arguments)
    }

    function A() {
        var e;
        return e = function(e) {
            var t, n, r = arguments;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = r.length > 1 && void 0 !== r[1] ? r[1] : {}, ((0, E.isContentShown)(e) || t.forceTrack) && function(e, t) {
                            var n, r = O((0, E.getCurrentlyShownCounts)(), 1)[0],
                                i = d.default.getRenderedAtTimestamp(e),
                                a = new Date,
                                u = null == i ? null : a.getTime() - i;
                            s.default.track(y.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                                type: o.DismissibleContent[e],
                                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : m.ContentDismissActionType.UNKNOWN,
                                content_count: r,
                                group_name: null == t ? void 0 : t.groupName,
                                bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                                guild_id: null == t ? void 0 : t.guildId,
                                shown_duration: u
                            })
                        }(e, t), (0, f.handleDCDismissed)(e), [4, (0, a.addDismissedContent)(e)];
                    case 1:
                        return i.sent(), n = !d.default.hasUserHitDCCap(), (0, E.removeCandidateContent)({
                            content: e,
                            groupName: null == t ? void 0 : t.groupName
                        }, n), [2]
                }
            })
        }, (A = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    h(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    h(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
}