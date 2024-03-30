function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        computeIsMuted: function() {
            return o
        },
        default: function() {
            return a
        },
        isTemporarilyMuted: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e) {
        var t, n = e.muted,
            r = e.mute_config;
        return !!n && (null == (t = r) || null == t.end_time || new Date(t.end_time) >= new Date)
    }

    function i(e) {
        var t = e.muted,
            n = e.mute_config;
        return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date
    }
    var a = function() {
        var e, t, n;

        function o() {
            var e, t, n;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = this, n = void 0, (t = "timers") in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, this.timers = {}
        }
        return e = o, t = [{
            key: "reset",
            value: function() {
                Object.values(this.timers).forEach(function(e) {
                    return clearTimeout(e)
                }), this.timers = {}
            }
        }, {
            key: "setTimer",
            value: function(e, t, n) {
                if (null == e || null == t) return !1;
                var r, o = null == (r = t).end_time ? null : new Date(r.end_time).getTime() - Date.now();
                return null != o && (!!(o <= 0) || (this.timers[e] = setTimeout(n, Math.max(0, o)), !1))
            }
        }, {
            key: "clearTimer",
            value: function(e) {
                null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e])
            }
        }], r(e.prototype, t), n && r(e, n), o
    }()
}