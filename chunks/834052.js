function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("745049");
    let a = {},
        o = {};

    function l(e, t) {
        var n;
        let i = null !== (n = a[e]) && void 0 !== n ? n : {},
            s = {
                ...i
            };
        null == t || t.forEach(e => {
            o[e.channel_id] = e, s[e.channel_id] = e
        }), a[e] = s
    }

    function u(e) {
        let {
            instance: t
        } = e;
        l(t.guild_id, [t])
    }

    function d(e, t) {
        var n;
        if (delete o[t], null == e) return;
        let i = null !== (n = a[e]) && void 0 !== n ? n : {},
            s = {
                ...i
            };
        delete s[t], a[e] = s
    }
    class c extends i.default.Store {
        getStageInstanceByChannel(e) {
            if (null != e) return o[e]
        }
        isLive(e) {
            return null != this.getStageInstanceByChannel(e)
        }
        isPublic(e) {
            var t;
            return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === r.GuildScheduledEventPrivacyLevel.PUBLIC
        }
        getStageInstancesByGuild(e) {
            var t;
            return null == e ? {} : null !== (t = a[e]) && void 0 !== t ? t : {}
        }
        getAllStageInstances() {
            return Object.values(o)
        }
    }
    c.displayName = "StageInstanceStore";
    var _ = new c(s.default, {
        CONNECTION_OPEN: function(e) {
            let {
                guilds: t
            } = e;
            a = {}, o = {}, t.forEach(e => l(e.id, e.stage_instances))
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            l(t.id, t.stage_instances)
        },
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e, i = null !== (t = a[n.id]) && void 0 !== t ? t : {};
            delete a[n.id], Object.keys(i).forEach(e => {
                delete o[e]
            })
        },
        STAGE_INSTANCE_CREATE: u,
        STAGE_INSTANCE_UPDATE: u,
        STAGE_INSTANCE_DELETE: function(e) {
            let {
                instance: t
            } = e;
            d(t.guild_id, t.channel_id)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            d(t.guild_id, t.id)
        },
        LOGOUT: function() {
            o = {}, a = {}
        }
    })
}