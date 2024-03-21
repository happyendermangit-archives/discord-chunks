function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("599110"),
        a = n("39141"),
        o = n("49111");

    function l(e) {
        switch (e) {
            case a.ShakeLocation.CHAT_INPUT:
                return "chat_input";
            case a.ShakeLocation.MENTION:
                return "mention";
            case a.ShakeLocation.VOICE_USER:
                return "voice_user"
        }
    }

    function u(e) {
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
        return Object.entries(e).filter(e => {
            let [t, n] = e;
            return n
        }).map(e => {
            let [n] = e;
            return t(Number.parseInt(n))
        })
    }
    let c = s.throttle(e => {
        let {
            enabled: t,
            combosEnabled: n,
            combosRequiredCount: i,
            screenshakeEnabled: s,
            shakeIntensity: a,
            screenshakeEnabledLocations: c,
            confettiEnabled: _,
            confettiSize: f,
            confettiCount: E,
            confettiEnabledLocations: h
        } = e;
        r.default.track(o.AnalyticEvents.POGGERMODE_SETTINGS_UPDATED, {
            enabled: t,
            combos_enabled: n,
            combos_required_count: i,
            screenshake_enabled: s,
            shake_intensity: a,
            screenshake_enabled_locations: d(c, l),
            confetti_enabled: _,
            confetti_size: f,
            confetti_count: E,
            confetti_enabled_locations: d(h, u)
        })
    }, 5e3);
    var _ = c
}