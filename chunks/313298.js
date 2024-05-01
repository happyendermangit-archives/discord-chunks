function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("147913"),
        s = n("650774"),
        a = n("709054"),
        o = n("893966");
    let l = {},
        u = {},
        d = null;
    async function _(e, t) {
        null == l[e] && (l[e] = new Set), l[e].add(t), null == u[e] && (u[e] = Date.now()), E(e) && await c(e)
    }

    function c(e) {
        if (null == l[e]) return;
        let t = Array.from(l[e]);
        l[e] = new Set, u[e] = Date.now(), requestAnimationFrame(async () => {
            await i.default.dispatch({
                type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH",
                guildId: e,
                userIds: t
            })
        })
    }

    function E(e) {
        let t = l[e];
        if (null == t) return !1;
        let n = t.size >= function(e) {
                var t;
                let n = null !== (t = s.default.getMemberCount(e)) && void 0 !== t ? t : 0;
                return n >= 75e3 ? 10 : 2
            }(e),
            i = u[e];
        if (n) return !0;
        if (null == i) return !1;
        let r = Date.now() - i;
        return null != i && r >= function(e) {
            var t;
            let n = null !== (t = s.default.getMemberCount(e)) && void 0 !== t ? t : 0;
            return n >= 75e3 ? 5e3 : 2e3
        }(e)
    }

    function I(e) {
        l[e] = new Set, u[e] = null
    }
    class T extends r.default {
        handleInitialize() {
            null == d && null == d && (d = setInterval(() => {
                a.default.forEachKey(l, e => {
                    E(e) && c(e)
                })
            }, 1e4))
        }
        handleGuildMemberUpdate(e, t) {
            if (o.default.isInitialized(e)) return _(e, t)
        }
        handleGuildMemberRemove(e, t) {
            if (o.default.isInitialized(e)) return _(e, t)
        }
        handleGuildDelete(e) {
            let t = e.guild.id;
            o.default.isInitialized(t) && I(t)
        }
        handleGuildMemberSearchSuccess(e) {
            let {
                guildId: t
            } = e;
            o.default.isInitialized(t) && I(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: e => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e => this.handleGuildMemberSearchSuccess(e)
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new T
}