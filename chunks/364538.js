function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("569492"),
        a = n("46234"),
        u = n("935741"),
        s = n("644779"),
        l = n("493549"),
        c = n("29884"),
        f = n("848957"),
        d = n("388990"),
        _ = n("947248"),
        E = n("162677"),
        p = n("483647"),
        m = n("281767"),
        y = n("382021");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return I(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || O(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function O(e, t) {
        if (e) {
            if ("string" == typeof e) return I(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
        }
    }

    function T(e, t, n, r, _) {
        if (t !== p.Mode.UseGreyDot) return [{
            label: "Setting the guild to a white dot unread",
            apply: function(e, t) {
                S(e, t, !0)
            }
        }];
        var y = [],
            I = Object.values(u.default.getMutableGuildChannelsForGuild(e.id)).filter(function(e) {
                return c.default.can(m.Permissions.VIEW_CHANNEL, e)
            });
        return y.push.apply(y, h(function(e, t) {
            if (!(f.default.isMuted(e.id) && !f.default.isTemporarilyMuted(e.id))) return [];
            var n = [{
                    label: "Unmuting the guild and marking it as read",
                    apply: function(e) {
                        e.muted = !1, e.mute_config = null
                    },
                    needsMarkedAsRead: !0
                }],
                r = t.filter(function(t) {
                    return f.default.getChannelMessageNotifications(e.id, t.id) === m.UserNotificationSettings.ALL_MESSAGES
                });
            return r.length > 0 && n.push({
                label: "Setting ".concat(r.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                debug: r.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = r[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                            var s = a.value;
                            v(e, t, s.id, function(e) {
                                e.message_notifications = m.UserNotificationSettings.ONLY_MENTIONS
                            })
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !n && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }), n
        }(e, I))), y.push(function(e) {
            if (f.default.getMessageNotifications(e.id) === m.UserNotificationSettings.ALL_MESSAGES) return {
                label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                apply: function(e) {
                    e.message_notifications = m.UserNotificationSettings.ONLY_MENTIONS
                }
            }
        }(e)), y.push(function() {
            return {
                label: "Setting the guild to a grey dot unread",
                apply: function(e, t) {
                    S(e, t, !1)
                }
            }
        }()), y.push.apply(y, h(function(e) {
            var t, n, r = [];
            var i = (t = o()(e).filter(function(e) {
                    return e.type === m.ChannelTypes.GUILD_ANNOUNCEMENT
                }).partition(function(e) {
                    return f.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && f.default.isChannelMuted(e.guild_id, e.parent_id)
                }).value(), n = 2, function(e) {
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
                }(t, n) || O(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                a = i[0],
                u = i[1];
            return a.length > 0 && r.push({
                label: "Not touching ".concat(a.length, " announcement channels since they are muted"),
                debug: a.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join("")
            }), u.length > 0 && r.push({
                label: "Setting ".concat(u.length, " announcement channels to white-dot"),
                debug: u.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = u[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var s = i.value;
                            g(e, t, s.id, !0)
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
                }
            }), r
        }(I))), y.push.apply(y, h(function(e) {
            var t = [],
                n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, s = e[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                    var l = u.value;
                    f.default.isChannelMuted(l.guild_id, l.id) && l.isCategory() && !a.default.isCollapsed(l.id) && n.push(l)
                }
            } catch (e) {
                o = !0, i = e
            } finally {
                try {
                    !r && null != s.return && s.return()
                } finally {
                    if (o) throw i
                }
            }
            return n.length > 0 && t.push({
                label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
                debug: n.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            g(e, t, s.id, !1), v(e, t, s.id, function(e) {
                                e.muted = !1, e.mute_config = null
                            })
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }), t
        }(I))), y.push.apply(y, h(function(e) {
            var t = [],
                n = [],
                r = [];
            return e.forEach(function(e) {
                if (!f.default.isChannelMuted(e.guild_id, e.id)) {
                    var t = f.default.getChannelMessageNotifications(e.guild_id, e.id);
                    t === m.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === m.UserNotificationSettings.ONLY_MENTIONS && r.push(e)
                }
            }), n.length > 0 && t.push({
                label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
                debug: n.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            g(e, t, s.id, !0)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }), r.length > 0 && t.push({
                label: "Setting ".concat(r.length, " channels to grey-dot since they were explicitly Mentions Only"),
                debug: r.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = r[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                            var s = a.value;
                            g(e, t, s.id, !1)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !n && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }), t
        }(I))), s.default.hasConsented(m.Consents.PERSONALIZATION) ? y.push.apply(y, h(function(e, t, n, r, i) {
            if (f.default.isMuted(e.id) && !f.default.isTemporarilyMuted(e.id)) return [];
            var a = new Set(t.map(function(e) {
                    return e.id
                })),
                u = r.filter(function(e) {
                    return a.has(e.channel_id)
                }),
                s = o().keyBy(u, "channel_id"),
                l = Math.max(n.messages === p.PainLevel.High ? i.frecency.yearMinOpensLargeServer : i.frecency.yearMinOpensSmallServer, u.reduce(function(e, t) {
                    var n;
                    return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                }, 0) * i.frecency.totalOpensPercent),
                c = Math.max(i.frecency.monthMinOpens, u.reduce(function(e, t) {
                    var n;
                    return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                }, 0) * i.frecency.totalOpensPercent),
                d = [],
                _ = [];
            t.forEach(function(e) {
                var t, n, r, o, i = null !== (t = s[e.id]) && void 0 !== t ? t : {};
                Number(null !== (n = i.num_year_opens) && void 0 !== n ? n : 0) > l || Number(null !== (r = i.num_month_opens) && void 0 !== r ? r : 0) > c ? d.push(e) : Number(null !== (o = i.num_three_month_opens) && void 0 !== o ? o : 0) > 2 && _.push(e)
            });
            var E = [];
            return d.length > 0 && E.push({
                label: "Setting ".concat(d.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: d.map(function(e) {
                    return "\n    - #".concat(e.name, " (").concat(JSON.stringify(s[e.id]), ")")
                }).join(""),
                apply: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = d[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            g(e, t, u.id, !0)
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
                }
            }), _.length > 0 && E.push({
                label: "NOT setting ".concat(_.length, " channels to white-dot because they were only viewed a little."),
                debug: _.map(function(e) {
                    return "\n    - #".concat(e.name, " (").concat(JSON.stringify(s[e.id]), ")")
                }).join("")
            }), E
        }(e, I, n, r, _))) : y.push.apply(y, h(function(e, t) {
            if (f.default.isMuted(e.id) && !f.default.isTemporarilyMuted(e.id)) return [];
            var n = [],
                r = new Set(t.map(function(e) {
                    return e.id
                })),
                o = Date.now() - d.default.Millis.DAYS_30,
                a = l.default.getFrequentlyWithoutFetchingLatest().filter(function(e) {
                    var t, n;
                    return t = e, (null != (n = i.ChannelRecordBase) && "undefined" != typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](t) : t instanceof n) && r.has(e.id)
                }).filter(function(e) {
                    var t, n, r = null !== (n = null === (t = l.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                    return 0 !== r.length && r[r.length - 1] >= o
                });
            return a.length > 0 && n.push({
                label: "Setting ".concat(a.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: a.map(function(e) {
                    return "\n    - #".concat(e.name)
                }).join(""),
                apply: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, u = a[Symbol.iterator](); !(n = (i = u.next()).done); n = !0) {
                            var s = i.value;
                            g(e, t, s.id, !0)
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != u.return && u.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                }
            }), n
        }(e, I))), y.filter(E.isNotNullish)
    }

    function S(e, t, n) {
        var r, o;
        e.flags = (0, _.setFlag)(null !== (o = null !== (r = e.flags) && void 0 !== r ? r : t.flags) && void 0 !== o ? o : 0, y.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, _.setFlag)(e.flags, y.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
    }

    function v(e, t, n, r) {
        var i, a, u, s, l = null !== (u = null === (i = e.channel_overrides) || void 0 === i ? void 0 : i[n]) && void 0 !== u ? u : {};
        r(l, null !== (s = null === (a = t.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== s ? s : {}), !o().isEmpty(l) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = l)
    }

    function g(e, t, n, r) {
        v(e, t, n, function(e, t) {
            var n, o;
            e.flags = (0, _.setFlag)(null !== (o = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== o ? o : 0, y.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, r), e.flags = (0, _.setFlag)(e.flags, y.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !r)
        })
    }
}