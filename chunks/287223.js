function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guessGuildModeWithRemoteData: function() {
            return c
        },
        guessGuildModeWithLocalData: function() {
            return g
        }
    }), n("808653");
    var i = n("917351"),
        a = n.n(i),
        l = n("233069"),
        s = n("42203"),
        o = n("319781"),
        r = n("525065"),
        u = n("718517"),
        d = n("380353");

    function c(e, t, n, i, a) {
        var l, o, u, c;
        let g = s.default.getMutableGuildChannelsForGuild(e.id),
            m = i.filter(e => e.channel_id in g),
            h = null !== (l = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== l ? l : {},
            _ = r.default.getMemberCount(e.id),
            p = f("year", i, m, e => {
                var t;
                return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
            }),
            S = f("one month", i, m, e => {
                var t;
                return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
            }),
            E = f("three month", i, m, e => {
                var t;
                return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
            }),
            v = f("six month", i, m, e => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
            }),
            T = [S, E, v, p],
            N = 0,
            I = 0;
        m.forEach(e => {
            var t;
            N++, I += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
        });
        let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (o = h.everyones) && void 0 !== o ? o : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = h.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(N, "\n- AllVisits: ").concat(T.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(T.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(T.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(T.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(I, "\n"),
            C = E.guildOpens >= .02 * E.totalOpensAcrossAllServers,
            O = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
        if (h.messages === d.PainLevel.High) {
            if (!a) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
            if (!C && O) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y]
        }
        return [d.Mode.KeepAsIs, C, "KeepAsIs" + y]
    }

    function f(e, t, n, i) {
        let l = t.reduce((e, t) => e + i(t), 0),
            s = n.reduce((e, t) => e + i(t), 0),
            o = a.sortBy(n, i).reverse()[0],
            r = null == o ? 0 : i(o),
            u = (r / s * 100).toFixed(1);
        return {
            label: e,
            totalOpensAcrossAllServers: l,
            guildOpens: s,
            biggestChannel: r,
            biggestChannelFormatted: u
        }
    }

    function g(e, t) {
        var n, i;
        let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
            s = null !== (i = r.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
            c = Date.now() - u.default.Millis.DAYS_30,
            f = o.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof l.ChannelRecordBase && t.guild_id === e.id),
            g = f.filter(e => {
                var t, n;
                let i = null !== (n = null === (t = o.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== i.length && i[i.length - 1] >= c
            }),
            m = g.length >= 5,
            h = f.reduce((e, t) => {
                var n, i;
                return e + (null !== (i = null === (n = o.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
            }, 0),
            _ = "\n- **Local**:\n    - Guild Visits: ".concat(h, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(g.length, "\n");
        return a.messages === d.PainLevel.High || s > 1e3 ? [d.Mode.UseGreyDot, m, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, m, "KeepAsIs" + _]
    }
}