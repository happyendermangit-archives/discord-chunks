function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("201876"),
        r = n("661736"),
        a = n("101125");
    i = class extends s.default {
        getInitialState() {
            return a.default.getLocalPresence()
        }
        getNextState() {
            return a.default.getLocalPresence()
        }
        shouldCommit() {
            return this.socket.isSessionEstablished()
        }
        emitPresenceUpdate(e) {
            let {
                status: t,
                since: n,
                activities: i,
                afk: s,
                broadcast: r
            } = e;
            this.socket.presenceUpdate(t, n, i, s, r)
        }
        handleConnectionOpen() {
            let e = !this.switchingAccounts;
            this.update({}, e), this.switchingAccounts = !1
        }
        handleAccountSwitch() {
            this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
        }
        constructor(e) {
            super(), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, r.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
        }
    }
}