function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("653041");
    let r = 1 / 240;
    class s {
        to(e) {
            let {
                to: t,
                from: n,
                animate: i = !1,
                callback: r
            } = e;
            if (this.target = t, null != r && this.callbacks.push(r), null != n && (this.from = n), !i) {
                this.stop(t);
                return
            }
            return this.animating ? this : (this.start(), this)
        }
        cancel() {
            return this.stop(this.from), this
        }
        start() {
            var e, t;
            this.animating = !0, this.vel = 0, this.last = null, this.nodeWindow = this.getNodeWindow(), this.nextTick = null !== (t = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== t ? t : -1
        }
        getUpdates(e, t) {
            let n = -this.tension * (t - this.target),
                i = (n + -this.friction * e) / this.mass;
            return Math.abs(e += i * r) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)), {
                from: t += e * r,
                vel: e,
                accel: i
            }
        }
        stop(e) {
            var t;
            null === (t = this.nodeWindow) || void 0 === t || t.cancelAnimationFrame(this.nextTick), this.animating = !1, this.accumulator = 0, null != e && (this.target = this.from = e, this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach(e => e()), this.callbacks.length = 0)
        }
        constructor({
            callback: e,
            tension: t = 160,
            friction: n = 22,
            mass: s = 1,
            threshold: a = .001,
            clamp: o = !1,
            maxVelocity: l = 1 / 0,
            getNodeWindow: u = () => window
        }) {
            i(this, "tension", void 0), i(this, "friction", void 0), i(this, "threshold", void 0), i(this, "mass", void 0), i(this, "maxVelocity", void 0), i(this, "clamp", void 0), i(this, "callback", void 0), i(this, "accumulator", 0), i(this, "from", 0), i(this, "target", 0), i(this, "vel", 0), i(this, "animating", !1), i(this, "last", null), i(this, "nextTick", -1), i(this, "getNodeWindow", void 0), i(this, "nodeWindow", null), i(this, "callbacks", []), i(this, "mergeTo", e => {
                let {
                    to: t,
                    callback: n
                } = e;
                !this.animating && (null != n && this.callbacks.push(n), this.stop(t));
                let i = t - this.from;
                this.from = t, this.target = this.target + i, this.callback(this.from, this.abort), null != n && n()
            }), i(this, "abort", () => {
                this.animating = !1
            }), i(this, "update", e => {
                var t, n, i, s;
                if (null == this.last) {
                    this.last = e, this.nextTick = null !== (n = null === (t = this.nodeWindow) || void 0 === t ? void 0 : t.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1;
                    return
                }
                for (this.accumulator = Math.min((e - this.last) / 1e3 + this.accumulator, 2); this.accumulator > r;) {
                    this.accumulator -= r;
                    let {
                        vel: e,
                        from: t,
                        accel: n
                    } = this.getUpdates(this.vel, this.from);
                    if (this.vel = e, this.clamp && (t === this.target || t < this.target && this.from > this.target || t > this.target && this.from < this.target) || Math.abs(n * r) < this.threshold) {
                        this.stop(this.target);
                        return
                    }
                    this.from = t
                }
                let {
                    from: a
                } = this;
                if (this.accumulator > 0) {
                    let {
                        from: e
                    } = this.getUpdates(this.vel, a), t = this.accumulator / r * (e - a);
                    a += t
                }
                this.callback(a, this.abort), this.animating && (this.last = e, this.nextTick = null !== (s = null === (i = this.nodeWindow) || void 0 === i ? void 0 : i.requestAnimationFrame(this.update)) && void 0 !== s ? s : -1)
            }), this.callback = e, this.from = 0, this.tension = t, this.friction = n, this.mass = s, this.maxVelocity = l, this.threshold = a, this.clamp = o, this.getNodeWindow = u
        }
    }
}