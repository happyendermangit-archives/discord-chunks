function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("430824"),
        s = n("70956"),
        a = n("709054"),
        o = n("553385"),
        l = n("556178"),
        u = n("890477");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = 0;
    class c extends i.default {
        constructor(...e) {
            super(...e), d(this, "actions", {
                POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
                IDLE: () => this.handleIdleChange()
            }), d(this, "handleConnectionOpen", e => {
                this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
            }), d(this, "handleIdleChange", () => {
                Date.now() - _ > s.default.Millis.HOUR && this._attemptDeadchatPrompt()
            }), d(this, "_attemptDeadchatPrompt", () => {
                let e = r.default.getGuilds(),
                    t = a.default.keys(e).filter(e => u.SimpleDeadchatPromptExperiment.getCurrentConfig({
                        guildId: e,
                        location: "manager"
                    }).triggerDeadchat);
                t.length > 0 && (_ = Date.now(), (0, o.initiateChannelPrompts)(t))
            }), d(this, "_triggerGamingStatsSetupExperiment", () => {
                let e = r.default.getGuilds();
                a.default.keys(e).forEach(e => {
                    l.GamingStatsSetupExperiment.trackExposure({
                        guildId: e,
                        location: "manager"
                    })
                })
            })
        }
    }
    t.default = new c
}