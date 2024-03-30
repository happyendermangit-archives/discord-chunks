function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StopWatch: function() {
            return d
        },
        TimeStampProducer: function() {
            return c
        },
        now: function() {
            return l
        },
        sleep: function() {
            return _
        }
    }), n("368387");
    var r = n("97744");

    function o(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = function() {
            return Math.floor(r.timeOrigin + r.performance.now())
        },
        c = new(function() {
            function e() {
                i(this, e)
            }
            return u(e, [{
                key: "now",
                value: function() {
                    return l()
                }
            }]), e
        }()),
        f = function() {
            function e(t, n, r, o) {
                var a = this;
                i(this, e), s(this, "milliseconds", 0), s(this, "asMilliseconds", function() {
                    return a.milliseconds
                }), s(this, "asSeconds", function() {
                    return a.milliseconds / 1e3
                }), s(this, "asMinutes", function() {
                    return a.milliseconds / 1e3 / 60
                }), s(this, "asHours", function() {
                    return a.milliseconds / 1e3 / 60 / 60
                }), s(this, "add", function(t) {
                    return e.fromMilliseconds(a.milliseconds + t.milliseconds)
                }), s(this, "subtract", function(t) {
                    return e.fromMilliseconds(a.milliseconds - t.milliseconds)
                }), s(this, "subtractOrZero", function(t) {
                    return e.fromMilliseconds(Math.max(a.milliseconds - t.milliseconds, 0))
                }), this.milliseconds += o || 0, this.milliseconds += 1e3 * (r || 0), this.milliseconds += 6e4 * (n || 0), this.milliseconds += 36e5 * (t || 0)
            }
            return u(e, [{
                key: "isGreaterThan",
                value: function(e) {
                    return this.milliseconds > e.milliseconds
                }
            }, {
                key: "isGreaterOrEqualTo",
                value: function(e) {
                    return this.milliseconds >= e.milliseconds
                }
            }]), e
        }();
    s(f, "fromMilliseconds", function(e) {
        return new f(0, 0, 0, e)
    }), s(f, "fromSeconds", function(e) {
        return new f(0, 0, e)
    }), s(f, "fromMinutes", function(e) {
        return new f(0, e)
    }), s(f, "fromHours", function(e) {
        return new f(e)
    });
    var d = function() {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
            i(this, e), s(this, "timestampProducer", void 0), s(this, "startTime", void 0), s(this, "timePassed", void 0), this.timestampProducer = t, this.startTime = void 0, this.timePassed = 0
        }
        return u(e, [{
            key: "start",
            value: function() {
                null == this.startTime && (this.startTime = this.timestampProducer.now())
            }
        }, {
            key: "restart",
            value: function() {
                this.startTime = this.timestampProducer.now()
            }
        }, {
            key: "reset",
            value: function() {
                this.startTime = void 0, this.timePassed = 0
            }
        }, {
            key: "stop",
            value: function() {
                null != this.startTime && (this.timePassed += this.timestampProducer.now() - this.startTime, this.startTime = void 0)
            }
        }, {
            key: "toggle",
            value: function(e) {
                e !== this.isRunning() && (e ? this.start() : this.stop())
            }
        }, {
            key: "elapsed",
            value: function() {
                if (null == this.startTime) return f.fromMilliseconds(this.timePassed);
                var e = this.timestampProducer.now() - this.startTime;
                return f.fromMilliseconds(this.timePassed + e)
            }
        }, {
            key: "isRunning",
            value: function() {
                return null != this.startTime
            }
        }], [{
            key: "startNew",
            value: function() {
                var t = new e;
                return t.start(), t
            }
        }]), e
    }();

    function _(e) {
        var t = "number" == typeof e ? e : e.asMilliseconds();
        return new Promise(function(e) {
            setTimeout(function() {
                return e()
            }, t)
        })
    }
}