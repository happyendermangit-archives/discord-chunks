function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guessGuildModeWithLocalData: function() {
            return _
        },
        guessGuildModeWithRemoteData: function() {
            return f
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("569492"),
        a = n("935741"),
        u = n("493549"),
        s = n("382199"),
        l = n("388990"),
        c = n("483647");

    function f(e, t, n, r, o) {
        var i, u, l, f, _ = a.default.getMutableGuildChannelsForGuild(e.id),
            E = r.filter(function(e) {
                return e.channel_id in _
            }),
            p = null !== (i = n.filter(function(t) {
                return t.guild_id === e.id
            })[0]) && void 0 !== i ? i : {},
            m = s.default.getMemberCount(e.id),
            y = d("year", r, E, function(e) {
                var t;
                return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
            }),
            I = d("one month", r, E, function(e) {
                var t;
                return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
            }),
            h = d("three month", r, E, function(e) {
                var t;
                return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
            }),
            O = [I, h, d("six month", r, E, function(e) {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
            }), y],
            T = 0,
            S = 0;
        E.forEach(function(e) {
            var t;
            T++, S += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
        });
        var v = "\n**Pain**:\n- Everyones: ".concat(c.PainLevel[null !== (u = p.everyones) && void 0 !== u ? u : 0], "\n- Messages: ").concat(c.PainLevel[null !== (l = p.messages) && void 0 !== l ? l : 0], "\n- Size: ").concat(m, "\n**Remote**:\n- Channels: ").concat(T, "\n- AllVisits: ").concat(O.map(function(e) {
                return e.totalOpensAcrossAllServers
            }).join(" / "), "\n- GuildVisits: ").concat(O.map(function(e) {
                return e.guildOpens
            }).join(" / "), "\n- Biggest Channel (abs): ").concat(O.map(function(e) {
                return e.biggestChannel
            }).join(" / "), "\n- Biggest Channel (%): ").concat(O.map(function(e) {
                return e.biggestChannelFormatted
            }).join(" / "), "\n- Sent Msgs: ").concat(S, "\n"),
            g = h.guildOpens >= .02 * h.totalOpensAcrossAllServers,
            A = (null !== (f = y.guildOpens) && void 0 !== f ? f : 0) > 0;
        if (p.messages === c.PainLevel.High) {
            if (!o) return [c.Mode.UseGreyDot, g, "UseGreyDot" + v];
            if (!g && A) return [c.Mode.UseGreyDot, g, "UseGreyDot" + v]
        }
        return [c.Mode.KeepAsIs, g, "KeepAsIs" + v]
    }

    function d(e, t, n, r) {
        var i = t.reduce(function(e, t) {
                return e + r(t)
            }, 0),
            a = n.reduce(function(e, t) {
                return e + r(t)
            }, 0),
            u = o().sortBy(n, r).reverse()[0],
            s = null == u ? 0 : r(u),
            l = (s / a * 100).toFixed(1);
        return {
            label: e,
            totalOpensAcrossAllServers: i,
            guildOpens: a,
            biggestChannel: s,
            biggestChannelFormatted: l
        }
    }

    function _(e, t) {
        var n, r, o = null !== (n = t.filter(function(t) {
                return t.guild_id === e.id
            })[0]) && void 0 !== n ? n : {},
            a = null !== (r = s.default.getMemberCount(e.id)) && void 0 !== r ? r : 0,
            f = Date.now() - l.default.Millis.DAYS_30,
            d = u.default.getFrequentlyWithoutFetchingLatest().filter(function(t) {
                var n, r;
                return n = t, (null != (r = i.ChannelRecordBase) && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r) && t.guild_id === e.id
            }),
            _ = d.filter(function(e) {
                var t, n, r = null !== (n = null === (t = u.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== r.length && r[r.length - 1] >= f
            }),
            E = _.length >= 5,
            p = d.reduce(function(e, t) {
                var n, r;
                return e + (null !== (r = null === (n = u.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== r ? r : 0)
            }, 0),
            m = "\n- **Local**:\n    - Guild Visits: ".concat(p, "\n    - Channels: ").concat(d.length, "\n    - Recent Channels: ").concat(_.length, "\n");
        return o.messages === c.PainLevel.High || a > 1e3 ? [c.Mode.UseGreyDot, E, "SuggestGreyDot" + m] : [c.Mode.KeepAsIs, E, "KeepAsIs" + m]
    }
}