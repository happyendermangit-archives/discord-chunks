function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007"), n("424973");
    var i = n("483366"),
        s = n.n(i),
        r = n("769846"),
        a = n("159885"),
        o = n("502945"),
        l = n("347219"),
        u = n("289382");
    let d = 7.5,
        c = (0, a.cssValueToNumber)(r.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
        f = 1 / 60;

    function _(e, t, n, i) {
        return t * (n / i) + e
    }

    function h() {
        return Math.min(Math.max(Math.min(.8 * window.innerWidth, .8 * window.innerHeight), u.MIN_RADIUS), u.MAX_RADIUS)
    }
    var E = class e {
        initialize() {
            this._resizeWave()
        }
        emphasize() {
            this.points.forEach(e => e.speedUp = 1)
        }
        terminate() {
            this.points = []
        }
        update(e) {
            0 !== this.points.length && (this.points.forEach(t => t.update(Math.min(e, f))), !this.hasEntered && this.points[0].x > c && (this.hasEntered = !0, this.updateWaveState(u.WaveStates.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && (this.isFilling = !1, this.updateWaveState(u.WaveStates.FILLED)))
        }
        render(e) {
            if (0 === this.points.length) return;
            let [t, ...n] = this.points;
            e.save(), e.beginPath(), e.moveTo(t.x, t.y), n.forEach((t, i) => {
                if (null == n[i + 1]) e.quadraticCurveTo(t.x, t.y, t.x, t.y);
                else {
                    let s = (t.x + n[i + 1].x) / 2,
                        r = (t.y + n[i + 1].y) / 2;
                    e.quadraticCurveTo(t.x, t.y, s, r)
                }
            }), e.lineTo(0, 0), e.closePath(), e.fillStyle = "#000", e.globalCompositeOperation = "destination-in", e.fill(), e.restore()
        }
        fill() {
            let e = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
                t = h() - 140,
                n = (e, t, n, i) => {
                    e.targetX = -40 + t * Math.cos(u.TWO_PI * (.25 * (n / 15) + 0)), e.targetY = -40 + t * Math.sin(u.TWO_PI * (.25 * (n / 15) + 0)), i && (e.targetX += (0, l.randomNumber)(0, 30) - 15, e.targetY += (0, l.randomNumber)(0, 30) - 15, e.speedUp = 3, e.spring.tension = u.POINT_TENSION_DEFAULT * Math.random() * .5 + u.POINT_TENSION_DEFAULT)
                };
            this.points.forEach((e, i) => n(e, t, i, !0)), setTimeout(() => {
                this.points.forEach((t, i) => {
                    n(t, e, i, !1);
                    let s = 1 - t.index / 7.5;
                    t.spring.friction += t.spring.friction + t.spring.friction * s, t.spring.tension = .7 * u.POINT_TENSION_DEFAULT + 80 * Math.random(), t.waveRange = 2 * t.waveRange
                }), this.isFilling = !0, this.updateWaveState(u.WaveStates.FILLING)
            }, 250)
        }
        constructor(e) {
            this.points = [], this.hasEntered = !1, this.isFilling = !1, this._resizeWave = () => {
                let e = h();
                this.points.forEach((t, n) => {
                    let i = -40 + e * Math.cos(u.TWO_PI * (.25 * (n / 15) + 0)),
                        s = -40 + e * Math.sin(u.TWO_PI * (.25 * (n / 15) + 0));
                    0 !== n ? s += (0, l.randomNumber)(0, 30) - 15 : i += (0, l.randomNumber)(0, 30) - 15, t.targetX = i, t.targetY = s, t.angle = Math.atan2(s, i)
                })
            }, this.resizeWave = s(this._resizeWave, 200), this.updateWaveState = e, this.hasEntered = !1;
            for (let e = 0; e <= 15; e++) this.points.push(new o.default(Math.floor(d - Math.floor(Math.abs(e - d)))))
        }
    }
}