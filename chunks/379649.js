function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StopWatch: function() {
            return l
        },
        TimeStampProducer: function() {
            return s
        },
        now: function() {
            return a
        },
        sleep: function() {
            return u
        }
    }), n("411104"), n("368387");
    var i = n("643191");

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let a = () => Math.floor(i.timeOrigin + i.performance.now()),
        s = new class {
            now() {
                return a()
            }
        };
    class o {
        isGreaterThan(e) {
            return this.milliseconds > e.milliseconds
        }
        isGreaterOrEqualTo(e) {
            return this.milliseconds >= e.milliseconds
        }
        constructor(e, t, n, i) {
            r(this, "milliseconds", 0), r(this, "asMilliseconds", () => this.milliseconds), r(this, "asSeconds", () => this.milliseconds / 1e3), r(this, "asMinutes", () => this.milliseconds / 1e3 / 60), r(this, "asHours", () => this.milliseconds / 1e3 / 60 / 60), r(this, "add", e => o.fromMilliseconds(this.milliseconds + e.milliseconds)), r(this, "subtract", e => o.fromMilliseconds(this.milliseconds - e.milliseconds)), r(this, "subtractOrZero", e => o.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0))), this.milliseconds += i || 0, this.milliseconds += 1e3 * (n || 0), this.milliseconds += 6e4 * (t || 0), this.milliseconds += 36e5 * (e || 0)
        }
    }
    r(o, "fromMilliseconds", e => new o(0, 0, 0, e)), r(o, "fromSeconds", e => new o(0, 0, e)), r(o, "fromMinutes", e => new o(0, e)), r(o, "fromHours", e => new o(e));
    class l {
        start() {
            null == this.startTime && (this.startTime = this.timestampProducer.now())
        }
        restart() {
            this.startTime = this.timestampProducer.now()
        }
        reset() {
            this.startTime = void 0, this.timePassed = 0
        }
        stop() {
            null != this.startTime && (this.timePassed += this.timestampProducer.now() - this.startTime, this.startTime = void 0)
        }
        toggle(e) {
            e !== this.isRunning() && (e ? this.start() : this.stop())
        }
        elapsed() {
            if (null == this.startTime) return o.fromMilliseconds(this.timePassed);
            let e = this.timestampProducer.now() - this.startTime;
            return o.fromMilliseconds(this.timePassed + e)
        }
        isRunning() {
            return null != this.startTime
        }
        static startNew() {
            let e = new l;
            return e.start(), e
        }
        constructor(e = s) {
            r(this, "timestampProducer", void 0), r(this, "startTime", void 0), r(this, "timePassed", void 0), this.timestampProducer = e, this.startTime = void 0, this.timePassed = 0
        }
    }

    function u(e) {
        let t = "number" == typeof e ? e : e.asMilliseconds();
        return new Promise(e => {
            setTimeout(() => e(), t)
        })
    }
}