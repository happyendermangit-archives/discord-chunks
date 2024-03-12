function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var s = n("689988"),
        i = n("21121"),
        r = n("162771"),
        a = n("398604"),
        l = n("322224");
    let u = {},
        o = new Set,
        d = async e => {
            let t = a.default.getGuildScheduledEventsForGuild(e);
            if (0 !== t.length) {
                if (!o.has(e)) try {
                    await l.default.getGuildEventsForCurrentUser(e), o.add(e)
                } catch (e) {}
            }
        };
    class c extends s.default {
        async getGuildEventUserCounts(e, t, n) {
            let s = n.filter(n => null == u["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - u["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
            if (!(Date.now() - u["".concat(e, "-").concat(t)] < 18e5) || 0 !== s.length) {
                u["".concat(e, "-").concat(t)] = Date.now(), s.forEach(n => u["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                try {
                    await l.default.fetchGuildEventUserCounts(e, t, s)
                } catch (e) {}
            }
        }
        getGuildEventUsers(e, t, n) {
            return l.default.fetchUsersForGuildEvent(e, t, n)
        }
        getGuildEventsForCurrentUser(e) {
            return d(e)
        }
        handleConnectionOpen() {
            o.clear(), u = {};
            let e = (0, i.isInMainTabsExperiment)(),
                t = r.default.getLastSelectedGuildId();
            if (e && null != t) {
                let e = a.default.getGuildScheduledEventsForGuild(t);
                e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
            }
        }
        handleGuildUnavailable(e) {
            let {
                guildId: t
            } = e;
            o.delete(t), delete u[t]
        }
        handleGuildDelete(e) {
            let {
                guild: t
            } = e, n = t.id;
            o.delete(n), delete u[n]
        }
        handleInviteResolveSuccess(e) {
            var t;
            let {
                invite: n
            } = e, s = n.guild_scheduled_event, i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
            null != s && null != i && d(i)
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
    var E = new c
}