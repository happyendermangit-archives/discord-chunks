function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("570140"),
        r = n("287734"),
        a = n("147913"),
        s = n("703656"),
        o = n("769654"),
        l = n("131951"),
        u = n("944486"),
        d = n("914010"),
        _ = n("981631");
    class c extends a.default {
        handleGuildCreate(e) {
            let {
                guild: t
            } = e, n = u.default.getChannelId(_.ME), i = u.default.getVoiceChannelId();
            t.id === n && (0, o.transitionToGuild)(t.id), t.id === i && !1 !== t.unavailable && null == i && r.default.selectVoiceChannel((0, u.findFirstVoiceChannelId)(t.id))
        }
        handleChannelCreate(e) {
            let {
                channel: t
            } = e;
            if (t.type !== _.ChannelTypes.GROUP_DM) return;
            let n = t.originChannelId,
                i = u.default.getChannelId(_.NULL_STRING_GUILD_ID);
            null == d.default.getGuildId() && null != n && n === i && (0, s.transitionTo)(_.Routes.CHANNEL(_.ME, t.id)), null != n && n === u.default.getVoiceChannelId() && r.default.selectVoiceChannel(t.id, l.default.isVideoEnabled())
        }
        handleLogout() {
            i.default.dispatch({
                type: "VOICE_CHANNEL_SELECT",
                channelId: null,
                guildId: null,
                video: !1,
                currentVoiceChannelId: null
            })
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                GUILD_CREATE: this.handleGuildCreate,
                CHANNEL_CREATE: this.handleChannelCreate,
                LOGOUT: this.handleLogout
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new c
}