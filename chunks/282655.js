function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return l
        }
    }), E("222007");
    var t = E("689988"),
        o = E("716241"),
        n = E("651057"),
        r = E("299285"),
        i = E("699209"),
        a = E("271938"),
        I = E("42203"),
        s = E("18494"),
        T = E("101125"),
        S = E("774539"),
        N = E("49111");
    async function O(e) {
        await n.default.fetchApplications(e, !1)
    }
    async function A(e) {
        if (null == e) return;
        let _ = I.default.getChannel(e),
            {
                enableHangStatus: E
            } = i.HangStatusExperiment.getCurrentConfig({
                location: "GameActivityManager"
            }, {
                autoTrackExposure: !1
            });
        if (null == _ || !((0, S.isVoiceUserGameActivityEnabled)("running_games_change", !1) || E)) return;
        let t = T.default.getActivities();
        if (0 === t.length) return;
        let n = [...t].filter(e => e.type === N.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id);
        await O([...n]);
        let s = r.default.getApplication(n[0]);
        null != s && o.default.trackWithMetadata(N.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: _.guild_id,
            game_name: s.name,
            user_id: a.default.getId()
        })
    }
    class R extends t.default {
        handleRunningGamesChange() {
            let e = s.default.getVoiceChannelId();
            A(e)
        }
        handleVoiceChannelSelect(e) {
            let {
                channelId: _
            } = e;
            A(_)
        }
        constructor(...e) {
            super(...e), this.actions = {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
            }
        }
    }
    var l = new R
}