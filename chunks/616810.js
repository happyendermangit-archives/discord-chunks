function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("928801"),
        r = n("549895"),
        a = n("885110");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends i.default {
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
                afk: r,
                broadcast: a
            } = e;
            this.socket.presenceUpdate(t, n, i, r, a)
        }
        handleConnectionOpen() {
            let e = !this.switchingAccounts;
            this.update({}, e), this.switchingAccounts = !1
        }
        handleAccountSwitch() {
            this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
        }
        constructor(e) {
            super(!1), s(this, "socket", void 0), s(this, "switchingAccounts", void 0), s(this, "didCommit", void 0), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, r.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
        }
    }
}