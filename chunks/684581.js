function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("94927"),
        r = n("782340"),
        a = n("32209"),
        i = n("381471");
    let l = {
        experiment: s.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () => r.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: {
            webmDark: a,
            webmLight: i
        },
        getLoadingTips: () => []
    };
    var u = l
}