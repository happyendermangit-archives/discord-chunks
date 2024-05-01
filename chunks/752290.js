function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("729357"),
        r = n.n(i),
        a = n("147913"),
        s = n("557177");
    let o = (0, s.createSound)("vibing_wumpus", "vibing_wumpus", 0),
        l = 0,
        u = 0,
        d = null;

    function _(e, t) {
        let n = Math.round(100 * e),
            i = Math.round(100 * u),
            a = Math.round(100 * l);
        n > 0 && a >= i || n < 0 && a <= i ? (clearInterval(d), 0 === i && null != t && t()) : (a += n, l = a / 100, o.volume = r()(l, 0, .5))
    }

    function c(e) {
        null != d && clearInterval(d), u = 0;
        let t = f();
        d = setInterval(() => {
            _(t, e)
        }, 100)
    }

    function E() {
        null != d && clearInterval(d), o.loop(), u = .5;
        let e = f();
        d = setInterval(() => _(e), 100)
    }

    function I() {
        c(o.pause.bind(o))
    }

    function T() {
        c(o.stop.bind(o))
    }

    function f() {
        return .2 * (u - l)
    }
    class S extends a.default {
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                VIBING_WUMPUS_PLAY_MUSIC: E,
                VIBING_WUMPUS_STOP_MUSIC: T,
                VIBING_WUMPUS_PAUSE_MUSIC: I
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new S
}