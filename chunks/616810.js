function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("928801"),
        r = n("549895"),
        s = n("885110");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o extends i.default {
        getInitialState() {
            return s.default.getLocalPresence()
        }
        getNextState() {
            return s.default.getLocalPresence()
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
                broadcast: s
            } = e;
            this.socket.presenceUpdate(t, n, i, r, s)
        }
        handleConnectionOpen() {
            let e = !this.switchingAccounts;
            this.update({}, e), this.switchingAccounts = !1
        }
        handleAccountSwitch() {
            this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
        }
        constructor(e) {
            super(!1), a(this, "socket", void 0), a(this, "switchingAccounts", void 0), a(this, "didCommit", void 0), this.socket = e, this.switchingAccounts = !1, this.didCommit = (0, r.default)(5, 2e4, this.emitPresenceUpdate.bind(this))
        }
    }
}