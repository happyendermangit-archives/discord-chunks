function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        scheduler: function() {
            return f
        },
        updateCount: function() {
            return d
        }
    });
    var n = r("812587"),
        u = r("344502"),
        a = r("118141"),
        o = 0,
        i = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        s = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        l = function(e) {
            return void 0 === e && (e = 0), Date.now() + e
        },
        c = !1,
        f = new(function() {
            function e() {
                var e = this;
                this.stopped = !0, this.listener = function() {
                    return e.schedule()
                }
            }
            return e.prototype.run = function(e) {
                var t = this;
                if (void 0 === e && (e = 250), !c) {
                    c = !0;
                    var r = l(e);
                    (0, a.queueResizeObserver)(function() {
                        var u = !1;
                        try {
                            u = (0, n.process)()
                        } finally {
                            if (c = !1, e = r - l(), !o) return;
                            u ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                        }
                    })
                }
            }, e.prototype.schedule = function() {
                this.stop(), this.run()
            }, e.prototype.observe = function() {
                var e = this,
                    t = function() {
                        return e.observer && e.observer.observe(document.body, i)
                    };
                document.body ? t() : u.global.addEventListener("DOMContentLoaded", t)
            }, e.prototype.start = function() {
                var e = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), s.forEach(function(t) {
                    return u.global.addEventListener(t, e.listener, !0)
                }))
            }, e.prototype.stop = function() {
                var e = this;
                !this.stopped && (this.observer && this.observer.disconnect(), s.forEach(function(t) {
                    return u.global.removeEventListener(t, e.listener, !0)
                }), this.stopped = !0)
            }, e
        }()),
        d = function(e) {
            !o && e > 0 && f.start(), (o += e) || f.stop()
        }
}