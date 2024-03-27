function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FrameLoop: function() {
            return a
        }
    });
    var r = n("239189");
    n("444675");
    var i = function(e) {
            return (0, r.requestAnimationFrame)(e)
        },
        a = function(e) {
            void 0 === e && (e = i);
            var t = !0,
                n = !1,
                a = 0,
                s = [],
                u = 0,
                c = new Set,
                l = new Set,
                d = new Set,
                f = function(e) {
                    var t = s.indexOf(e);
                    t < 0 && (t = s.findIndex(function(t) {
                        return t.priority > e.priority
                    }), s.splice(~t ? t : s.length, 0, e))
                },
                p = function() {
                    if (!t) try {
                        g(), e(p)
                    } catch (e) {
                        console.error(e)
                    }
                },
                h = function() {
                    t && (t = !1, 0 == a && (a = r.now(), e(p)))
                },
                m = [];
            this.setTimeout = function(e, t) {
                var n = r.now() + t,
                    i = function() {
                        var e = m.findIndex(function(e) {
                            return e.cancel == i
                        });
                        e >= 0 && m.splice(e, 1)
                    },
                    a = o(m, function(e) {
                        return e.time > n
                    }),
                    s = {
                        time: n,
                        handler: e,
                        cancel: i
                    };
                return m.splice(a, 0, s), h(), s
            };
            var g = this.advance = function() {
                var e = r.now();
                if (c.size && (c.forEach(f), c.clear()), m.length && r.batchedUpdates(function() {
                        var t = o(m, function(t) {
                            return t.time > e
                        });
                        m.splice(0, t).forEach(function(e) {
                            return e.handler()
                        })
                    }), e > a) {
                    var t = Math.min(64, e - a);
                    a = e, r.batchedUpdates(function() {
                        s.length && (r.willAdvance(s), s = s.filter(function(e) {
                            return u = e.priority, !e.idle && e.advance(t), !e.idle
                        }), u = 0), l.size && (l.forEach(function(t) {
                            return t(e)
                        }), l.clear()), d.size && (n = !0, d.forEach(function(t) {
                            return t(e)
                        }), d.clear(), n = !1)
                    })
                }
            };
            this.start = function(e) {
                u > e.priority ? c.add(e) : (f(e), h())
            }, this.onFrame = function(e) {
                l.add(e), h()
            }, this.onWrite = function(e) {
                n ? e(a) : d.add(e)
            }
        };

    function o(e, t) {
        var n = e.findIndex(t);
        return n < 0 ? e.length : n
    }
}