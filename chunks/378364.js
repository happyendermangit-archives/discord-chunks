function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("318217"),
        s = n("689938"),
        i = n("586393"),
        a = n("464912");
    let l = {
        experiment: r.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () => s.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: {
            webmDark: i,
            webmLight: a
        },
        getLoadingTips: () => []
    };
    t.default = l
}