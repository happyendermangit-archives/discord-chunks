function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("870331"),
        a = n("582258"),
        u = n("281767");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e) {
        switch (e) {
            case a.ShakeLocation.CHAT_INPUT:
                return "chat_input";
            case a.ShakeLocation.MENTION:
                return "mention";
            case a.ShakeLocation.VOICE_USER:
                return "voice_user"
        }
    }

    function f(e) {
        switch (e) {
            case a.ConfettiLocation.CHAT_INPUT:
                return "chat_input";
            case a.ConfettiLocation.MEMBER_USER:
                return "member_user";
            case a.ConfettiLocation.REACTION:
                return "reaction";
            case a.ConfettiLocation.CALL_TILE:
                return "call_tile"
        }
    }

    function d(e, t) {
        return Object.entries(e).filter(function(e) {
            var t = l(e, 2);
            return t[0], t[1]
        }).map(function(e) {
            return t(Number.parseInt(l(e, 1)[0]))
        })
    }
    var _ = o().throttle(function(e) {
        var t = e.enabled,
            n = e.combosEnabled,
            r = e.combosRequiredCount,
            o = e.screenshakeEnabled,
            a = e.shakeIntensity,
            s = e.screenshakeEnabledLocations,
            l = e.confettiEnabled,
            _ = e.confettiSize,
            E = e.confettiCount,
            p = e.confettiEnabledLocations;
        i.default.track(u.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
            enabled: t,
            combos_enabled: n,
            combos_required_count: r,
            screenshake_enabled: o,
            shake_intensity: a,
            screenshake_enabled_locations: d(s, c),
            confetti_enabled: l,
            confetti_size: _,
            confetti_count: E,
            confetti_enabled_locations: d(p, f)
        })
    }, 5e3);
    t.default = _
}