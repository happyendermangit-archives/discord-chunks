function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("348327"),
        o = n.n(r);

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                a(e, t, n[t])
            })
        }
        return e
    }
    var s = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), a(this, "dirty", !1), a(this, "state", this.getInitialState())
        }
        return e = r, t = [{
            key: "shouldCommit",
            value: function() {
                return !0
            }
        }, {
            key: "setState",
            value: function(e) {
                this.state = u({}, this.state, e)
            }
        }, {
            key: "getState",
            value: function() {
                return this.state
            }
        }, {
            key: "reset",
            value: function() {
                this.dirty = !1, this.state = this.getInitialState()
            }
        }, {
            key: "update",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = this.getNextState(u({}, this.state, e));
                if (t) this.dirty = !o()(n, this.getInitialState());
                else {
                    var r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var s, l = Object.keys(n)[Symbol.iterator](); !(r = (s = l.next()).done); r = !0) {
                            var c = s.value;
                            this.dirty = this.dirty || !o()(this.state[c], n[c])
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && null != l.return && l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }
                return this.state = n, !!(this.dirty && this.shouldCommit()) && (this.dirty = !1, this.didCommit(this.state), !0)
            }
        }, {
            key: "forceUpdate",
            value: function() {
                this.dirty = !1, this.didCommit(this.state)
            }
        }], i(e.prototype, t), n && i(e, n), r
    }()
}