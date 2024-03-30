function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("839634"),
        o = n("947063"),
        i = n("335911");

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

    function l(e, t, n) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && f(e, t)
        }(p, e);
        var t, n, r, d, _, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = c(t);
            if (n) {
                var u = c(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : a(e)
        });

        function p(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), s(a(t = E.call(this)), "socket", void 0), s(a(t), "_hadLobbyVoiceStates", void 0), t.socket = e, t._hadLobbyVoiceStates = !1, t
        }
        return r = p, d = [{
            key: "getInitialState",
            value: function() {
                return this.getNextState()
            }
        }, {
            key: "getNextState",
            value: function() {
                var e = o.default.getLobbiesWithVoice();
                return e.length > 0 && (this._hadLobbyVoiceStates = !0), {
                    lobbies: e.map(function(e) {
                        return {
                            lobbyId: e.id,
                            selfMute: i.default.isSelfMute(e.application_id),
                            selfDeaf: i.default.isSelfDeaf(e.application_id)
                        }
                    })
                }
            }
        }, {
            key: "shouldCommit",
            value: function() {
                return this._hadLobbyVoiceStates && this.socket.isSessionEstablished()
            }
        }, {
            key: "didCommit",
            value: function(e) {
                var t = e.lobbies;
                this.socket.lobbyVoiceStatesUpdate(t)
            }
        }, {
            key: "forceUpdate",
            value: function() {
                this._hadLobbyVoiceStates && l(c(p.prototype), "forceUpdate", this).call(this)
            }
        }], u(r.prototype, d), _ && u(r, _), p
    }(r.default)
}