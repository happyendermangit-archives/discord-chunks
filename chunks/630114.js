function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("653041"), n("47120"), n("789020"), n("724458");
    var i = n("392711"),
        r = n.n(i),
        a = n("131704"),
        s = n("680089"),
        o = n("592125"),
        l = n("480294"),
        u = n("580005"),
        d = n("496675"),
        _ = n("9156"),
        c = n("70956"),
        E = n("630388"),
        I = n("823379"),
        T = n("789662"),
        f = n("981631"),
        S = n("526761");

    function h(e, t, n, i, E) {
        if (t !== T.Mode.UseGreyDot) return [{
            label: "Setting the guild to a white dot unread",
            apply: (e, t) => {
                A(e, t, !0)
            }
        }];
        let S = [],
            h = Object.values(o.default.getMutableGuildChannelsForGuild(e.id)).filter(e => d.default.can(f.Permissions.VIEW_CHANNEL, e));
        return S.push(... function(e, t) {
            if (!(_.default.isMuted(e.id) && !_.default.isTemporarilyMuted(e.id))) return [];
            let n = [{
                    label: "Unmuting the guild and marking it as read",
                    apply: e => {
                        e.muted = !1, e.mute_config = null
                    },
                    needsMarkedAsRead: !0
                }],
                i = t.filter(t => _.default.getChannelMessageNotifications(e.id, t.id) === f.UserNotificationSettings.ALL_MESSAGES);
            return i.length > 0 && n.push({
                label: "Setting ".concat(i.length, " to mentions-only since they were all-messages and we are unmuting the guild"),
                debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of i) m(e, t, n.id, e => {
                        e.message_notifications = f.UserNotificationSettings.ONLY_MENTIONS
                    })
                }
            }), n
        }(e, h)), S.push(function(e) {
            if (_.default.getMessageNotifications(e.id) === f.UserNotificationSettings.ALL_MESSAGES) return {
                label: "Setting the guild to only mentions since it is in care-a-little but was previously all-messages",
                apply: e => {
                    e.message_notifications = f.UserNotificationSettings.ONLY_MENTIONS
                }
            }
        }(e)), S.push(function() {
            return {
                label: "Setting the guild to a grey dot unread",
                apply: (e, t) => {
                    A(e, t, !1)
                }
            }
        }()), S.push(... function(e) {
            let t = [],
                [n, i] = r()(e).filter(e => e.type === f.ChannelTypes.GUILD_ANNOUNCEMENT).partition(e => _.default.isChannelMuted(e.guild_id, e.id) || null != e.parent_id && _.default.isChannelMuted(e.guild_id, e.parent_id)).value();
            return n.length > 0 && t.push({
                label: "Not touching ".concat(n.length, " announcement channels since they are muted"),
                debug: n.map(e => "\n    - #".concat(e.name)).join("")
            }), i.length > 0 && t.push({
                label: "Setting ".concat(i.length, " announcement channels to white-dot"),
                debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of i) N(e, t, n.id, !0)
                }
            }), t
        }(h)), S.push(... function(e) {
            let t = [],
                n = [];
            for (let t of e) _.default.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !s.default.isCollapsed(t.id) && n.push(t);
            return n.length > 0 && t.push({
                label: "Unmuting ".concat(n.length, " categories and setting to grey-dot"),
                debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let i of n) N(e, t, i.id, !1), m(e, t, i.id, e => {
                        e.muted = !1, e.mute_config = null
                    })
                }
            }), t
        }(h)), S.push(... function(e) {
            let t = [],
                n = [],
                i = [];
            return e.forEach(e => {
                if (_.default.isChannelMuted(e.guild_id, e.id)) return;
                let t = _.default.getChannelMessageNotifications(e.guild_id, e.id);
                t === f.UserNotificationSettings.ALL_MESSAGES ? n.push(e) : t === f.UserNotificationSettings.ONLY_MENTIONS && i.push(e)
            }), n.length > 0 && t.push({
                label: "Setting ".concat(n.length, " channels to white-dot since they were explicitly All Messages"),
                debug: n.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let i of n) N(e, t, i.id, !0)
                }
            }), i.length > 0 && t.push({
                label: "Setting ".concat(i.length, " channels to grey-dot since they were explicitly Mentions Only"),
                debug: i.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of i) N(e, t, n.id, !1)
                }
            }), t
        }(h)), l.default.hasConsented(f.Consents.PERSONALIZATION) ? S.push(... function(e, t, n, i, a) {
            if (_.default.isMuted(e.id) && !_.default.isTemporarilyMuted(e.id)) return [];
            let s = new Set(t.map(e => e.id)),
                o = i.filter(e => s.has(e.channel_id)),
                l = r().keyBy(o, "channel_id"),
                u = Math.max(n.messages === T.PainLevel.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer, o.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0)
                }, 0) * a.frecency.totalOpensPercent),
                d = Math.max(a.frecency.monthMinOpens, o.reduce((e, t) => {
                    var n;
                    return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0)
                }, 0) * a.frecency.totalOpensPercent),
                c = [],
                E = [];
            t.forEach(e => {
                var t, n, i, r;
                let a = null !== (t = l[e.id]) && void 0 !== t ? t : {};
                Number(null !== (n = a.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (i = a.num_month_opens) && void 0 !== i ? i : 0) > d ? c.push(e) : Number(null !== (r = a.num_three_month_opens) && void 0 !== r ? r : 0) > 2 && E.push(e)
            });
            let I = [];
            return c.length > 0 && I.push({
                label: "Setting ".concat(c.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: c.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join(""),
                apply: (e, t) => {
                    for (let n of c) N(e, t, n.id, !0)
                }
            }), E.length > 0 && I.push({
                label: "NOT setting ".concat(E.length, " channels to white-dot because they were only viewed a little."),
                debug: E.map(e => "\n    - #".concat(e.name, " (").concat(JSON.stringify(l[e.id]), ")")).join("")
            }), I
        }(e, h, n, i, E)) : S.push(... function(e, t) {
            if (_.default.isMuted(e.id) && !_.default.isTemporarilyMuted(e.id)) return [];
            let n = [],
                i = new Set(t.map(e => e.id)),
                r = Date.now() - c.default.Millis.DAYS_30,
                s = u.default.getFrequentlyWithoutFetchingLatest().filter(e => e instanceof a.ChannelRecordBase && i.has(e.id)).filter(e => {
                    var t, n;
                    let i = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                    return 0 !== i.length && i[i.length - 1] >= r
                });
            return s.length > 0 && n.push({
                label: "Setting ".concat(s.length, " channels to white-dot since they are recent and frequently viewed"),
                debug: s.map(e => "\n    - #".concat(e.name)).join(""),
                apply: (e, t) => {
                    for (let n of s) N(e, t, n.id, !0)
                }
            }), n
        }(e, h)), S.filter(I.isNotNullish)
    }

    function A(e, t, n) {
        var i, r;
        e.flags = (0, E.setFlag)(null !== (r = null !== (i = e.flags) && void 0 !== i ? i : t.flags) && void 0 !== r ? r : 0, S.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES, n), e.flags = (0, E.setFlag)(e.flags, S.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !n)
    }

    function m(e, t, n, i) {
        var a, s, o, l;
        let u = null !== (o = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== o ? o : {};
        i(u, null !== (l = null === (s = t.channel_overrides) || void 0 === s ? void 0 : s[n]) && void 0 !== l ? l : {}), !r().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), e.channel_overrides[n] = u)
    }

    function N(e, t, n, i) {
        m(e, t, n, (e, t) => {
            var n, r;
            e.flags = (0, E.setFlag)(null !== (r = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== r ? r : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES, i), e.flags = (0, E.setFlag)(e.flags, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS, !i)
        })
    }
}