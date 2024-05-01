function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("367907"),
        s = n("728345"),
        a = n("812206"),
        o = n("574176"),
        l = n("314897"),
        u = n("592125"),
        d = n("944486"),
        _ = n("885110"),
        c = n("649739"),
        E = n("981631");
    async function I(e) {
        await s.default.fetchApplications(e, !1)
    }
    async function T(e) {
        if (null == e) return;
        let t = u.default.getChannel(e),
            {
                enableHangStatus: n
            } = o.HangStatusExperiment.getCurrentConfig({
                location: "GameActivityManager"
            }, {
                autoTrackExposure: !1
            });
        if (null == t || !((0, c.isVoiceUserGameActivityEnabled)("running_games_change", !1) || n)) return;
        let i = _.default.getActivities();
        if (0 === i.length) return;
        let s = [...i].filter(e => e.type === E.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id);
        await I([...s]);
        let d = a.default.getApplication(s[0]);
        null != d && r.default.trackWithMetadata(E.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: d.name,
            user_id: l.default.getId()
        })
    }
    class f extends i.default {
        handleRunningGamesChange() {
            T(d.default.getVoiceChannelId())
        }
        handleVoiceChannelSelect(e) {
            let {
                channelId: t
            } = e;
            T(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new f
}