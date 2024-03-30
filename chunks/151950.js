function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("839634"),
        o = n("835833"),
        i = n("575098");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var f = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(E, e);
        var t, n, r, f, d, _ = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function E(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), s(a(t = _.call(this)), "socket", void 0), s(a(t), "switchingAccounts", void 0), s(a(t), "didCommit", void 0), t.socket = e, t.switchingAccounts = !1, t.didCommit = (0, o.default)(5, 2e4, t.emitPresenceUpdate.bind(a(t))), t
        }
        return r = E, f = [{
            key: "getInitialState",
            value: function() {
                return i.default.getLocalPresence()
            }
        }, {
            key: "getNextState",
            value: function() {
                return i.default.getLocalPresence()
            }
        }, {
            key: "shouldCommit",
            value: function() {
                return this.socket.isSessionEstablished()
            }
        }, {
            key: "emitPresenceUpdate",
            value: function(e) {
                var t = e.status,
                    n = e.since,
                    r = e.activities,
                    o = e.afk,
                    i = e.broadcast;
                this.socket.presenceUpdate(t, n, r, o, i)
            }
        }, {
            key: "handleConnectionOpen",
            value: function() {
                var e = !this.switchingAccounts;
                this.update({}, e), this.switchingAccounts = !1
            }
        }, {
            key: "handleAccountSwitch",
            value: function() {
                this.switchingAccounts = !0, this.reset(), this.emitPresenceUpdate(this.getState())
            }
        }], u(r.prototype, f), d && u(r, d), E
    }(r.default)
}