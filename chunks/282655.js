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
        a = E("699209"),
        i = E("271938"),
        I = E("42203"),
        T = E("18494"),
        s = E("101125"),
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
            } = a.HangStatusExperiment.getCurrentConfig({
                location: "GameActivityManager"
            }, {
                autoTrackExposure: !1
            });
        if (null == _ || !((0, S.isVoiceUserGameActivityEnabled)("running_games_change", !1) || E)) return;
        let t = s.default.getActivities();
        if (0 === t.length) return;
        let n = [...t].filter(e => e.type === N.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id);
        await O([...n]);
        let T = r.default.getApplication(n[0]);
        null != T && o.default.trackWithMetadata(N.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: _.guild_id,
            game_name: T.name,
            user_id: i.default.getId()
        })
    }
    class R extends t.default {
        handleRunningGamesChange() {
            let e = T.default.getVoiceChannelId();
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