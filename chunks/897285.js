function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("57132"),
        a = n("914010"),
        s = n("924301"),
        o = n("482241");
    let l = {},
        u = new Set,
        d = async e => {
            if (0 !== s.default.getGuildScheduledEventsForGuild(e).length) {
                if (!u.has(e)) try {
                    await o.default.getGuildEventsForCurrentUser(e), u.add(e)
                } catch (e) {}
            }
        };
    class _ extends i.default {
        async getGuildEventUserCounts(e, t, n) {
            let i = n.filter(n => null == l["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - l["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
            if (!(Date.now() - l["".concat(e, "-").concat(t)] < 18e5) || 0 !== i.length) {
                l["".concat(e, "-").concat(t)] = Date.now(), i.forEach(n => l["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                try {
                    await o.default.fetchGuildEventUserCounts(e, t, i)
                } catch (e) {}
            }
        }
        getGuildEventUsers(e, t, n) {
            return o.default.fetchUsersForGuildEvent(e, t, n)
        }
        getGuildEventsForCurrentUser(e) {
            return d(e)
        }
        handleConnectionOpen() {
            u.clear(), l = {};
            let e = (0, r.isInMainTabsExperiment)(),
                t = a.default.getLastSelectedGuildId();
            e && null != t && s.default.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
        }
        handleGuildUnavailable(e) {
            let {
                guildId: t
            } = e;
            u.delete(t), delete l[t]
        }
        handleGuildDelete(e) {
            let {
                guild: t
            } = e, n = t.id;
            u.delete(n), delete l[n]
        }
        handleInviteResolveSuccess(e) {
            var t;
            let {
                invite: n
            } = e, i = n.guild_scheduled_event, r = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
            null != i && null != r && d(r)
        }
        handleChannelSelect(e) {
            let {
                guildId: t
            } = e;
            if (null != t) s.default.getGuildScheduledEventsForGuild(t).forEach(e => this.getGuildEventUserCounts(t, e.id, []))
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                GUILD_DELETE: e => this.handleGuildDelete(e),
                GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                CHANNEL_SELECT: e => this.handleChannelSelect(e)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new _
}