function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("727318"),
        r = n("941504"),
        i = n("586393"),
        l = n("464912"),
        s = {
            experiment: a.default,
            startTimeMs: 17025768e5,
            endTimeMs: 17042184e5,
            isDesktopOnly: !0,
            ringtone: "call_ringing_snowsgiving",
            getRingtoneSettingsLabel: function() {
                return r.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️"
            },
            appSpinnerSources: {
                webmDark: i,
                webmLight: l
            },
            getLoadingTips: function() {
                return []
            }
        };
    t.default = s
}