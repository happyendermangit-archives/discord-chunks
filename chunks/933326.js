function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var i = n("689988"),
        s = n("21121"),
        l = n("162771"),
        a = n("398604"),
        r = n("322224");
    let o = {},
        u = new Set,
        d = async e => {
            let t = a.default.getGuildScheduledEventsForGuild(e);
            if (0 !== t.length) {
                if (!u.has(e)) try {
                    await r.default.getGuildEventsForCurrentUser(e), u.add(e)
                } catch (e) {}
            }
        };
    class c extends i.default {
        async getGuildEventUserCounts(e, t, n) {
            let i = n.filter(n => null == o["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
            if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== i.length) {
                o["".concat(e, "-").concat(t)] = Date.now(), i.forEach(n => o["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                try {
                    await r.default.fetchGuildEventUserCounts(e, t, i)
                } catch (e) {}
            }
        }
        getGuildEventUsers(e, t, n) {
            return r.default.fetchUsersForGuildEvent(e, t, n)
        }
        getGuildEventsForCurrentUser(e) {
            return d(e)
        }
        handleConnectionOpen() {
            u.clear(), o = {};
            let e = (0, s.isInMainTabsExperiment)(),
                t = l.default.getLastSelectedGuildId();
            if (e && null != t) {
                let e = a.default.getGuildScheduledEventsForGuild(t);
                e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
            }
        }
        handleGuildUnavailable(e) {
            let {
                guildId: t
            } = e;
            u.delete(t), delete o[t]
        }
        handleGuildDelete(e) {
            let {
                guild: t
            } = e, n = t.id;
            u.delete(n), delete o[n]
        }
        handleInviteResolveSuccess(e) {
            var t;
            let {
                invite: n
            } = e, i = n.guild_scheduled_event, s = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
            null != i && null != s && d(s)
        }
        handleChannelSelect(e) {
            let {
                guildId: t
            } = e;
            if (null == t) return;
            let n = a.default.getGuildScheduledEventsForGuild(t);
            n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
        }
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e)
            }
        }
    }
    var f = new c
}