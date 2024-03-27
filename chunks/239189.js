function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        assign: function() {
            return h
        },
        batchedUpdates: function() {
            return f
        },
        colorNames: function() {
            return c
        },
        createStringInterpolator: function() {
            return r
        },
        frameLoop: function() {
            return s
        },
        now: function() {
            return u
        },
        requestAnimationFrame: function() {
            return d
        },
        skipAnimation: function() {
            return l
        },
        to: function() {
            return i
        },
        willAdvance: function() {
            return p
        }
    });
    var r, i, a = n("19784"),
        o = n("217348"),
        s = new a.FrameLoop,
        u = function() {
            return performance.now()
        },
        c = null,
        l = !1,
        d = "undefined" != typeof window ? window.requestAnimationFrame : function() {
            return -1
        },
        f = function(e) {
            return e()
        },
        p = o.noop,
        h = function(e) {
            var t;
            return i = (t = Object.assign({
                to: i,
                now: u,
                frameLoop: s,
                colorNames: c,
                skipAnimation: l,
                createStringInterpolator: r,
                requestAnimationFrame: d,
                batchedUpdates: f,
                willAdvance: p
            }, function(e) {
                var t = {};
                for (var n in e) void 0 !== e[n] && (t[n] = e[n]);
                return t
            }(e))).to, u = t.now, s = t.frameLoop, c = t.colorNames, l = t.skipAnimation, r = t.createStringInterpolator, d = t.requestAnimationFrame, f = t.batchedUpdates, p = t.willAdvance, t
        }
}