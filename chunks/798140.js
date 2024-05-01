function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeIsMuted: function() {
            return i
        },
        default: function() {
            return s
        },
        isTemporarilyMuted: function() {
            return r
        }
    });

    function i(e) {
        var t;
        let {
            muted: n,
            mute_config: i
        } = e;
        return !!n && (null == (t = i) || null == t.end_time || new Date(t.end_time) >= new Date)
    }

    function r(e) {
        let {
            muted: t,
            mute_config: n
        } = e;
        return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date
    }
    class s {
        reset() {
            Object.values(this.timers).forEach(e => clearTimeout(e)), this.timers = {}
        }
        setTimer(e, t, n) {
            var i;
            if (null == e || null == t) return !1;
            let r = null == (i = t).end_time ? null : new Date(i.end_time).getTime() - Date.now();
            return null != r && (!!(r <= 0) || (this.timers[e] = setTimeout(n, Math.max(0, r)), !1))
        }
        clearTimer(e) {
            null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e])
        }
        constructor() {
            var e, t, n;
            e = this, n = void 0, (t = "timers") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, this.timers = {}
        }
    }
}