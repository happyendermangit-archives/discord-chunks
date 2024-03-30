function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("945816");

    function a(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = function() {
            function e(t, n) {
                a(this, e), l(this, "_guildId", void 0), l(this, "_pendingRequests", new Set), l(this, "_sentRequests", new Set), l(this, "_unacknowledgedRequests", new Set), l(this, "_guildMemberExists", void 0), this._guildId = t, this._guildMemberExists = function(e) {
                    return n(t, e)
                }
            }
            return s(e, [{
                key: "acknowledge",
                value: function(e) {
                    this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e)
                }
            }, {
                key: "flushRequests",
                value: function(e) {
                    var t = this;
                    if (0 !== this._pendingRequests.size) {
                        var n = [];
                        this._pendingRequests.forEach(function(e) {
                            !t._guildMemberExists(e) && (t._unacknowledgedRequests.add(e), t._sentRequests.add(e), n.push(e))
                        }), n.length > 0 && e(this._guildId, n), this._pendingRequests.clear()
                    }
                }
            }, {
                key: "requestUnacknowledged",
                value: function() {
                    var e = this;
                    return 0 !== this._unacknowledgedRequests.size && (this._unacknowledgedRequests.forEach(function(t) {
                        e._guildMemberExists(t) ? e._unacknowledgedRequests.delete(t) : e._pendingRequests.add(t)
                    }), 0 !== this._pendingRequests.size && void 0)
                }
            }, {
                key: "request",
                value: function(e) {
                    if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
                    this._pendingRequests.add(e)
                }
            }]), e
        }(),
        f = function() {
            function e(t, n) {
                var r = this;
                a(this, e), l(this, "_onChange", void 0), l(this, "_guildMemberExists", void 0), l(this, "_guildStates", {}), l(this, "_flush", new i.DelayedCall(0, function() {
                    return r.flushRequests()
                })), this._guildMemberExists = t, this._onChange = n
            }
            return s(e, [{
                key: "reset",
                value: function() {
                    this._guildStates = {}, this._flush.cancel()
                }
            }, {
                key: "request",
                value: function(e, t) {
                    !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1)
                }
            }, {
                key: "acknowledge",
                value: function(e, t) {
                    this._getGuildState(e).acknowledge(t)
                }
            }, {
                key: "flushRequests",
                value: function() {
                    var e = this;
                    o().forEach(this._guildStates, function(t) {
                        return t.flushRequests(e._onChange)
                    })
                }
            }, {
                key: "requestUnacknowledged",
                value: function() {
                    o().reduce(this._guildStates, function(e, t) {
                        return !1 !== t.requestUnacknowledged() || t
                    }, !1) && this._flush.delay()
                }
            }, {
                key: "_getGuildState",
                value: function(e) {
                    var t = this._guildStates[e];
                    return null == t && (t = this._guildStates[e] = new c(e, this._guildMemberExists)), t
                }
            }]), e
        }()
}