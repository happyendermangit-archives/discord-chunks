function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guessGuildModeWithLocalData: function() {
            return E
        },
        guessGuildModeWithRemoteData: function() {
            return _
        }
    }), n("724458");
    var i = n("392711"),
        r = n.n(i),
        s = n("131704"),
        a = n("592125"),
        o = n("580005"),
        l = n("650774"),
        u = n("70956"),
        d = n("789662");

    function _(e, t, n, i, r) {
        var s, o, u, _;
        let E = a.default.getMutableGuildChannelsForGuild(e.id),
            I = i.filter(e => e.channel_id in E),
            T = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {},
            f = l.default.getMemberCount(e.id),
            S = c("year", i, I, e => {
                var t;
                return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
            }),
            h = c("one month", i, I, e => {
                var t;
                return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
            }),
            A = c("three month", i, I, e => {
                var t;
                return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
            }),
            m = [h, A, c("six month", i, I, e => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
            }), S],
            N = 0,
            p = 0;
        I.forEach(e => {
            var t;
            N++, p += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
        });
        let O = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (o = T.everyones) && void 0 !== o ? o : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = T.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(f, "\n**Remote**:\n- Channels: ").concat(N, "\n- AllVisits: ").concat(m.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(m.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(m.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(m.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(p, "\n"),
            R = A.guildOpens >= .02 * A.totalOpensAcrossAllServers,
            C = (null !== (_ = S.guildOpens) && void 0 !== _ ? _ : 0) > 0;
        if (T.messages === d.PainLevel.High) {
            if (!r) return [d.Mode.UseGreyDot, R, "UseGreyDot" + O];
            if (!R && C) return [d.Mode.UseGreyDot, R, "UseGreyDot" + O]
        }
        return [d.Mode.KeepAsIs, R, "KeepAsIs" + O]
    }

    function c(e, t, n, i) {
        let s = t.reduce((e, t) => e + i(t), 0),
            a = n.reduce((e, t) => e + i(t), 0),
            o = r().sortBy(n, i).reverse()[0],
            l = null == o ? 0 : i(o),
            u = (l / a * 100).toFixed(1);
        return {
            label: e,
            totalOpensAcrossAllServers: s,
            guildOpens: a,
            biggestChannel: l,
            biggestChannelFormatted: u
        }
    }

    function E(e, t) {
        var n, i;
        let r = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
            a = null !== (i = l.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
            _ = Date.now() - u.default.Millis.DAYS_30,
            c = o.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
            E = c.filter(e => {
                var t, n;
                let i = null !== (n = null === (t = o.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== i.length && i[i.length - 1] >= _
            }),
            I = E.length >= 5,
            T = c.reduce((e, t) => {
                var n, i;
                return e + (null !== (i = null === (n = o.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
            }, 0),
            f = "\n- **Local**:\n    - Guild Visits: ".concat(T, "\n    - Channels: ").concat(c.length, "\n    - Recent Channels: ").concat(E.length, "\n");
        return r.messages === d.PainLevel.High || a > 1e3 ? [d.Mode.UseGreyDot, I, "SuggestGreyDot" + f] : [d.Mode.KeepAsIs, I, "KeepAsIs" + f]
    }
}