function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = 1 / 240,
        a = function() {
            var e, t, n;

            function a(e) {
                var t = this,
                    n = e.callback,
                    r = e.tension,
                    u = e.friction,
                    s = e.mass,
                    l = e.threshold,
                    c = e.clamp,
                    f = e.maxVelocity,
                    d = e.getNodeWindow,
                    _ = void 0 === d ? function() {
                        return window
                    } : d;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), o(this, "tension", void 0), o(this, "friction", void 0), o(this, "threshold", void 0), o(this, "mass", void 0), o(this, "maxVelocity", void 0), o(this, "clamp", void 0), o(this, "callback", void 0), o(this, "accumulator", 0), o(this, "from", 0), o(this, "target", 0), o(this, "vel", 0), o(this, "animating", !1), o(this, "last", null), o(this, "nextTick", -1), o(this, "getNodeWindow", void 0), o(this, "nodeWindow", null), o(this, "callbacks", []), o(this, "mergeTo", function(e) {
                    var n = e.to,
                        r = e.callback;
                    !t.animating && (null != r && t.callbacks.push(r), t.stop(n));
                    var o = n - t.from;
                    t.from = n, t.target = t.target + o, t.callback(t.from, t.abort), null != r && r()
                }), o(this, "abort", function() {
                    t.animating = !1
                }), o(this, "update", function(e) {
                    if (null == t.last) {
                        t.last = e, t.nextTick = null !== (r = null === (n = t.nodeWindow) || void 0 === n ? void 0 : n.requestAnimationFrame(t.update)) && void 0 !== r ? r : -1;
                        return
                    }
                    for (t.accumulator = Math.min((e - t.last) / 1e3 + t.accumulator, 2); t.accumulator > i;) {
                        t.accumulator -= i;
                        var n, r, o, a, u = t.getUpdates(t.vel, t.from),
                            s = u.vel,
                            l = u.from,
                            c = u.accel;
                        if (t.vel = s, t.clamp && (l === t.target || l < t.target && t.from > t.target || l > t.target && t.from < t.target) || Math.abs(c * i) < t.threshold) {
                            t.stop(t.target);
                            return
                        }
                        t.from = l
                    }
                    var f = t.from;
                    if (t.accumulator > 0) {
                        var d = t.getUpdates(t.vel, f).from,
                            _ = t.accumulator / i * (d - f);
                        f += _
                    }
                    t.callback(f, t.abort), t.animating && (t.last = e, t.nextTick = null !== (a = null === (o = t.nodeWindow) || void 0 === o ? void 0 : o.requestAnimationFrame(t.update)) && void 0 !== a ? a : -1)
                }), this.callback = n, this.from = 0, this.tension = void 0 === r ? 160 : r, this.friction = void 0 === u ? 22 : u, this.mass = void 0 === s ? 1 : s, this.maxVelocity = void 0 === f ? 1 / 0 : f, this.threshold = void 0 === l ? .001 : l, this.clamp = void 0 !== c && c, this.getNodeWindow = _
            }
            return e = a, t = [{
                key: "to",
                value: function(e) {
                    var t = e.to,
                        n = e.from,
                        r = e.animate,
                        o = e.callback;
                    if (this.target = t, null != o && this.callbacks.push(o), null != n && (this.from = n), !(void 0 !== r && r)) {
                        this.stop(t);
                        return
                    }
                    return this.animating ? this : (this.start(), this)
                }
            }, {
                key: "cancel",
                value: function() {
                    return this.stop(this.from), this
                }
            }, {
                key: "start",
                value: function() {
                    var e, t;
                    this.animating = !0, this.vel = 0, this.last = null, this.nodeWindow = this.getNodeWindow(), this.nextTick = null !== (t = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== t ? t : -1
                }
            }, {
                key: "getUpdates",
                value: function(e, t) {
                    var n = (-this.tension * (t - this.target) + -this.friction * e) / this.mass;
                    return Math.abs(e += n * i) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)), {
                        from: t += e * i,
                        vel: e,
                        accel: n
                    }
                }
            }, {
                key: "stop",
                value: function(e) {
                    var t;
                    null === (t = this.nodeWindow) || void 0 === t || t.cancelAnimationFrame(this.nextTick), this.animating = !1, this.accumulator = 0, null != e && (this.target = this.from = e, this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach(function(e) {
                        return e()
                    }), this.callbacks.length = 0)
                }
            }], r(e.prototype, t), n && r(e, n), a
        }()
}