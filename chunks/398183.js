function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        now: function() {
            return r
        },
        TimeStampProducer: function() {
            return s
        },
        StopWatch: function() {
            return o
        },
        sleep: function() {
            return l
        }
    }), n("70102"), n("129334");
    var i = n("279295");
    let r = () => Math.floor(i.timeOrigin + i.performance.now()),
        s = new class {
            now() {
                return r()
            }
        };
    class a {
        isGreaterThan(e) {
            return this.milliseconds > e.milliseconds
        }
        isGreaterOrEqualTo(e) {
            return this.milliseconds >= e.milliseconds
        }
        constructor(e, t, n, i) {
            this.milliseconds = 0, this.asMilliseconds = () => this.milliseconds, this.asSeconds = () => this.milliseconds / 1e3, this.asMinutes = () => this.milliseconds / 1e3 / 60, this.asHours = () => this.milliseconds / 1e3 / 60 / 60, this.add = e => a.fromMilliseconds(this.milliseconds + e.milliseconds), this.subtract = e => a.fromMilliseconds(this.milliseconds - e.milliseconds), this.subtractOrZero = e => a.fromMilliseconds(Math.max(this.milliseconds - e.milliseconds, 0)), this.milliseconds += i || 0, this.milliseconds += 1e3 * (n || 0), this.milliseconds += 6e4 * (t || 0), this.milliseconds += 36e5 * (e || 0)
        }
    }
    a.fromMilliseconds = e => new a(0, 0, 0, e), a.fromSeconds = e => new a(0, 0, e), a.fromMinutes = e => new a(0, e), a.fromHours = e => new a(e);
    class o {
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
            if (null == this.startTime) return a.fromMilliseconds(this.timePassed);
            let e = this.timestampProducer.now() - this.startTime;
            return a.fromMilliseconds(this.timePassed + e)
        }
        isRunning() {
            return null != this.startTime
        }
        static startNew() {
            let e = new o;
            return e.start(), e
        }
        constructor(e = s) {
            this.timestampProducer = e, this.startTime = void 0, this.timePassed = 0
        }
    }

    function l(e) {
        let t = "number" == typeof e ? e : e.asMilliseconds();
        return new Promise(e => {
            setTimeout(() => e(), t)
        })
    }
}