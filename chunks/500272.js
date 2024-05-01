function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("314897"),
        a = n("592125"),
        s = n("496675"),
        o = n("979651"),
        l = n("906605"),
        u = n("574176"),
        d = n("106301"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class E extends i.default {
        constructor(...e) {
            super(...e), c(this, "previousVoiceChannelId", void 0), c(this, "actions", {
                VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }), c(this, "handleVoiceChannelSelect", e => {
                let {
                    channelId: t,
                    guildId: n
                } = e, {
                    enableHangStatus: i,
                    setDefaultStatus: r
                } = u.HangStatusExperiment.getCurrentConfig({
                    guildId: null != n ? n : _.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "HangStatusManager"
                }, {
                    autoTrackExposure: !0
                });
                if (null == n && null == t) {
                    this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = t;
                    return
                }
                if (!i || t === this.previousVoiceChannelId) return;
                if (this.previousVoiceChannelId = t, null == n || null == t) return;
                let o = a.default.getChannel(t);
                if (null == o || o.type !== _.ChannelTypes.GUILD_VOICE || !s.default.can(_.Permissions.SET_VOICE_CHANNEL_STATUS, o) || null != d.default.getCurrentHangStatus()) return;
                let c = d.default.getCurrentDefaultStatus();
                if ((null == c ? void 0 : c.expiresAt) != null && (null == c ? void 0 : c.expiresAt) >= Date.now()) {
                    if (c.status === _.HangStatusTypes.CUSTOM && null != c.customHangStatus) {
                        let {
                            status: e,
                            emoji: t
                        } = c.customHangStatus;
                        (0, l.updateCustomHangStatus)(e, t);
                        return
                    }
                    if (null == c.status) return;
                    else {
                        (0, l.updateHangStatus)(c.status);
                        return
                    }
                }
                r && (0, l.updateHangStatus)(_.HangStatusTypes.CHILLING)
            }), c(this, "handleGuildMemberUpdate", e => {
                let {
                    user: t,
                    guildId: n
                } = e;
                if (t.id !== r.default.getId()) return;
                let i = o.default.getCurrentClientVoiceChannelId(n);
                if (null == i || null == d.default.getCurrentHangStatus()) return;
                let u = a.default.getChannel(i);
                !s.default.can(_.Permissions.SET_VOICE_CHANNEL_STATUS, u) && (0, l.clearHangStatus)()
            }), c(this, "handleDisconnectFromVoiceChannel", () => {
                (0, l.clearHangStatus)()
            }), c(this, "handleLogout", () => {
                this.handleDisconnectFromVoiceChannel()
            })
        }
    }
    t.default = new E
}