function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("424973"), n("222007"), n("808653");
    var i, s = n("917351"),
        r = n.n(s),
        a = n("862337");
    class o {
        acknowledge(e) {
            this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e)
        }
        flushRequests(e) {
            if (0 === this._pendingRequests.size) return;
            let t = [];
            this._pendingRequests.forEach(e => {
                !this._guildMemberExists(e) && (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e))
            }), t.length > 0 && e(this._guildId, t), this._pendingRequests.clear()
        }
        requestUnacknowledged() {
            return 0 !== this._unacknowledgedRequests.size && (this._unacknowledgedRequests.forEach(e => {
                this._guildMemberExists(e) ? this._unacknowledgedRequests.delete(e) : this._pendingRequests.add(e)
            }), 0 !== this._pendingRequests.size && void 0)
        }
        request(e) {
            if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
            this._pendingRequests.add(e)
        }
        constructor(e, t) {
            this._pendingRequests = new Set, this._sentRequests = new Set, this._unacknowledgedRequests = new Set, this._guildId = e, this._guildMemberExists = n => t(e, n)
        }
    }
    i = class {
        reset() {
            this._guildStates = {}, this._flush.cancel()
        }
        request(e, t) {
            !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
        }
        acknowledge(e, t) {
            this._getGuildState(e).acknowledge(t)
        }
        flushRequests() {
            r.forEach(this._guildStates, e => e.flushRequests(this._onChange))
        }
        requestUnacknowledged() {
            let e = r.reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || t, !1);
            e && this._flush.delay()
        }
        _getGuildState(e) {
            let t = this._guildStates[e];
            return null == t && (t = this._guildStates[e] = new o(e, this._guildMemberExists)), t
        }
        constructor(e, t) {
            this._guildStates = {}, this._flush = new a.DelayedCall(0, () => this.flushRequests()), this._guildMemberExists = e, this._onChange = t
        }
    }
}