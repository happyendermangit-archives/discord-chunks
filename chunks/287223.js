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
    var a = n("917351"),
        i = n.n(a),
        s = n("233069"),
        l = n("42203"),
        o = n("319781"),
        r = n("525065"),
        u = n("718517"),
        d = n("380353");

    function c(e, t, n, a, i) {
        var s, o, u, c;
        let g = l.default.getMutableGuildChannelsForGuild(e.id),
            m = a.filter(e => e.channel_id in g),
            h = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {},
            _ = r.default.getMemberCount(e.id),
            p = f("year", a, m, e => {
                var t;
                return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
            }),
            E = f("one month", a, m, e => {
                var t;
                return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
            }),
            S = f("three month", a, m, e => {
                var t;
                return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
            }),
            T = f("six month", a, m, e => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
            }),
            v = [E, S, T, p],
            N = 0,
            I = 0;
        m.forEach(e => {
            var t;
            N++, I += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
        });
        let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (o = h.everyones) && void 0 !== o ? o : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = h.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(N, "\n- AllVisits: ").concat(v.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(v.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(v.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(v.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(I, "\n"),
            C = S.guildOpens >= .02 * S.totalOpensAcrossAllServers,
            M = (null !== (c = p.guildOpens) && void 0 !== c ? c : 0) > 0;
        if (h.messages === d.PainLevel.High) {
            if (!i) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
            if (!C && M) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y]
        }
        return [d.Mode.KeepAsIs, C, "KeepAsIs" + y]
    }

    function f(e, t, n, a) {
        let s = t.reduce((e, t) => e + a(t), 0),
            l = n.reduce((e, t) => e + a(t), 0),
            o = i.sortBy(n, a).reverse()[0],
            r = null == o ? 0 : a(o),
            u = (r / l * 100).toFixed(1);
        return {
            label: e,
            totalOpensAcrossAllServers: s,
            guildOpens: l,
            biggestChannel: r,
            biggestChannelFormatted: u
        }
    }

    function g(e, t) {
        var n, a;
        let i = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
            l = null !== (a = r.default.getMemberCount(e.id)) && void 0 !== a ? a : 0,
            c = Date.now() - u.default.Millis.DAYS_30,
            f = o.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
            g = f.filter(e => {
                var t, n;
                let a = null !== (n = null === (t = o.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== a.length && a[a.length - 1] >= c
            }),
            m = g.length >= 5,
            h = f.reduce((e, t) => {
                var n, a;
                return e + (null !== (a = null === (n = o.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== a ? a : 0)
            }, 0),
            _ = "\n- **Local**:\n    - Guild Visits: ".concat(h, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(g.length, "\n");
        return i.messages === d.PainLevel.High || l > 1e3 ? [d.Mode.UseGreyDot, m, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, m, "KeepAsIs" + _]
    }
}