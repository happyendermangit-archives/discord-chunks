function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("689988"),
        o = E("305961"),
        n = E("718517"),
        r = E("299039"),
        a = E("388142"),
        i = E("711454"),
        I = E("578899");
    let T = 0;
    class s extends t.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }, this.handleConnectionOpen = e => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
            }, this.handleIdleChange = () => {
                Date.now() - T > n.default.Millis.HOUR && this._attemptDeadchatPrompt()
            }, this._attemptDeadchatPrompt = () => {
                let e = o.default.getGuilds(),
                    _ = r.default.keys(e).filter(e => I.SimpleDeadchatPromptExperiment.getCurrentConfig({
                        guildId: e,
                        location: "manager"
                    }).triggerDeadchat);
                _.length > 0 && (T = Date.now(), (0, a.initiateChannelPrompts)(_))
            }, this._triggerGamingStatsSetupExperiment = () => {
                let e = o.default.getGuilds();
                r.default.keys(e).forEach(e => {
                    i.GamingStatsSetupExperiment.trackExposure({
                        guildId: e,
                        location: "manager"
                    })
                })
            }
        }
    }
    var S = new s
}