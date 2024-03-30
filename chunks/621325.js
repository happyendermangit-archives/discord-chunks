function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("954955"),
        o = n.n(r),
        i = n("337905"),
        a = n("778513"),
        u = n("916658"),
        s = n("932980"),
        l = n("450112");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var _ = 7.5,
        E = (0, a.cssValueToNumber)(i.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        p = 1 / 60;

    function m(e, t, n, r) {
        return n / r * t + e
    }

    function y() {
        return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), l.MIN_RADIUS), l.MAX_RADIUS)
    }
    var I = function() {
        var e, t, n;

        function r(e) {
            var t = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), d(this, "points", []), d(this, "hasEntered", !1), d(this, "isFilling", !1), d(this, "updateWaveState", void 0), d(this, "_resizeWave", function() {
                var e = y();
                t.points.forEach(function(t, n) {
                    var r = -40 + e * Math.cos(l.TWO_PI * (n / 15 * .25 + 0)),
                        o = -40 + e * Math.sin(l.TWO_PI * (n / 15 * .25 + 0));
                    0 !== n ? o += (0, s.randomNumber)(0, 30) - 15 : r += (0, s.randomNumber)(0, 30) - 15, t.targetX = r, t.targetY = o, t.angle = Math.atan2(o, r)
                })
            }), d(this, "resizeWave", o()(this._resizeWave, 200)), this.updateWaveState = e, this.hasEntered = !1;
            for (var n = 0; n <= 15; n++) this.points.push(new u.default(Math.floor(_ - Math.floor(Math.abs(n - _)))))
        }
        return e = r, t = [{
            key: "initialize",
            value: function() {
                this._resizeWave()
            }
        }, {
            key: "emphasize",
            value: function() {
                this.points.forEach(function(e) {
                    return e.speedUp = 1
                })
            }
        }, {
            key: "terminate",
            value: function() {
                this.points = []
            }
        }, {
            key: "update",
            value: function(e) {
                0 !== this.points.length && (this.points.forEach(function(t) {
                    return t.update(Math.min(e, p))
                }), !this.hasEntered && this.points[0].x > E && (this.hasEntered = !0, this.updateWaveState(l.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(l.WaveStates.FILLED)))
            }
        }, {
            key: "render",
            value: function(e) {
                if (0 !== this.points.length) {
                    var t, n = function(e) {
                            if (Array.isArray(e)) return e
                        }(t = this.points) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(t) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return c(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                            }
                        }(t) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }(),
                        r = n[0],
                        o = n.slice(1);
                    e.save(), e.beginPath(), e.moveTo(r.x, r.y), o.forEach(function(t, n) {
                        if (null == o[n + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                        else {
                            var r = (t.x + o[n + 1].x) / 2,
                                i = (t.y + o[n + 1].y) / 2;
                            e.quadraticCurveTo(t.x, t.y, r, i)
                        }
                    }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
                }
            }
        }, {
            key: "fill",
            value: function() {
                var e = this,
                    t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                    n = y() - 140,
                    r = function(e, t, n, r) {
                        e.targetX = -40 + t * Math.cos(l.TWO_PI * (n / 15 * .25 + 0)), e.targetY = -40 + t * Math.sin(l.TWO_PI * (n / 15 * .25 + 0)), r && (e.targetX += (0, s.randomNumber)(0, 30) - 15, e.targetY += (0, s.randomNumber)(0, 30) - 15, e.speedUp = 3, e.spring.tension = l.POINT_TENSION_DEFAULT * Math.random() * .5 + l.POINT_TENSION_DEFAULT)
                    };
                this.points.forEach(function(e, t) {
                    return r(e, n, t, !0)
                }), setTimeout(function() {
                    e.points.forEach(function(e, n) {
                        r(e, t, n, !1);
                        var o = 1 - e.index / 7.5;
                        e.spring.friction += e.spring.friction + e.spring.friction * o, e.spring.tension = .7 * l.POINT_TENSION_DEFAULT + 80 * Math.random(), e.waveRange = 2 * e.waveRange
                    }), e.isFilling = !0, e.updateWaveState(l.WaveStates.FILLING)
                }, 250)
            }
        }], f(e.prototype, t), n && f(e, n), r
    }();
    t.default = I
}