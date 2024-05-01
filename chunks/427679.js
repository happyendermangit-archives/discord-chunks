function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("765305");
    let d = {},
        _ = {};

    function c(e, t) {
        var n;
        let i = {
            ...null !== (n = d[e]) && void 0 !== n ? n : {}
        };
        null == t || t.forEach(e => {
            _[e.channel_id] = e, i[e.channel_id] = e
        }), d[e] = i
    }

    function E(e) {
        let {
            instance: t
        } = e;
        c(t.guild_id, [t])
    }

    function I(e, t) {
        var n;
        if (delete _[t], null == e) return;
        let i = {
            ...null !== (n = d[e]) && void 0 !== n ? n : {}
        };
        delete i[t], d[e] = i
    }
    class T extends(s = o.default.Store) {
        getStageInstanceByChannel(e) {
            if (null != e) return _[e]
        }
        isLive(e) {
            return null != this.getStageInstanceByChannel(e)
        }
        isPublic(e) {
            var t;
            return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === u.GuildScheduledEventPrivacyLevel.PUBLIC
        }
        getStageInstancesByGuild(e) {
            var t;
            return null == e ? {} : null !== (t = d[e]) && void 0 !== t ? t : {}
        }
        getAllStageInstances() {
            return Object.values(_)
        }
    }
    a = "StageInstanceStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new T(l.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            d = {}, _ = {}, t.forEach(e => c(e.id, e.stage_instances))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            c(t.id, t.stage_instances)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = null !== (t = d[n.id]) && void 0 !== t ? t : {};
            delete d[n.id], Object.keys(i).forEach(e => {
                delete _[e]
            })
        },
        STAGE_INSTANCE_CREATE: E,
        STAGE_INSTANCE_UPDATE: E,
        STAGE_INSTANCE_DELETE: function(e) {
            let {
                instance: t
            } = e;
            I(t.guild_id, t.channel_id)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            I(t.guild_id, t.id)
        },
        LOGOUT: function() {
            _ = {}, d = {}
        }
    })
}