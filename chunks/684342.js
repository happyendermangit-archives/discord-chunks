function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        scheduler: function() {
            return l
        },
        updateCount: function() {
            return d
        }
    });
    var r = n("468343"),
        i = n("559972"),
        a = n("789741"),
        o = 0,
        s = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        },
        u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
        c = !1,
        l = new(function() {
            function e() {
                var e = this;
                this.stopped = !0, this.listener = function() {
                    return e.schedule()
                }
            }
            return e.prototype.run = function(e) {
                var t = this;
                !c && (c = !0, (0, a.queueResizeObserver)(function() {
                    var n = !1;
                    try {
                        n = (0, r.process)()
                    } finally {
                        if (c = !1, !o) return;
                        n ? t.run(60) : e ? t.run(e - 1) : t.start()
                    }
                }))
            }, e.prototype.schedule = function() {
                this.stop(), this.run(12)
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
        d = function(e) {
            !o && e > 0 && l.start(), (o += e) || l.stop()
        }
}