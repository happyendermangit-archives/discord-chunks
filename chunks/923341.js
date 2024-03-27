function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        scheduler: function() {
            return d
        },
        updateCount: function() {
            return f
        }
    });
    var r = n("697171"),
        i = n("288930"),
        a = n("568764"),
        o = 0,
        s = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        c = function(e) {
            return void 0 === e && (e = 0), Date.now() + e
        },
        l = !1,
        d = new(function() {
            function e() {
                var e = this;
                this.stopped = !0, this.listener = function() {
                    return e.schedule()
                }
            }
            return e.prototype.run = function(e) {
                var t = this;
                if (void 0 === e && (e = 250), !l) {
                    l = !0;
                    var n = c(e);
                    (0, a.queueResizeObserver)(function() {
                        var i = !1;
                        try {
                            i = (0, r.process)()
                        } finally {
                            if (l = !1, e = n - c(), !o) return;
                            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                        }
                    })
                }
            }, e.prototype.schedule = function() {
                this.stop(), this.run()
            }, e.prototype.observe = function() {
                var e = this,
                    t = function() {
                        return e.observer && e.observer.observe(document.body, s)
                    };
                document.body ? t() : i.global.addEventListener("DOMContentLoaded", t)
            }, e.prototype.start = function() {
                var e = this;
                this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
                    return i.global.addEventListener(t, e.listener, !0)
                }))
            }, e.prototype.stop = function() {
                var e = this;
                !this.stopped && (this.observer && this.observer.disconnect(), u.forEach(function(t) {
                    return i.global.removeEventListener(t, e.listener, !0)
                }), this.stopped = !0)
            }, e
        }()),
        f = function(e) {
            !o && e > 0 && d.start(), (o += e) || d.stop()
        }
}