function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("318217"),
        a = n("689938"),
        s = n("586393"),
        i = n("464912");
    let l = {
        experiment: r.default,
        startTimeMs: 17025768e5,
        endTimeMs: 17042184e5,
        isDesktopOnly: !0,
        ringtone: "call_ringing_snowsgiving",
        getRingtoneSettingsLabel: () => a.default.Messages.SOUND_INCOMING_RING_EOY_2023 + " ❄️",
        appSpinnerSources: {
            webmDark: s,
            webmLight: i
        },
        getLoadingTips: () => []
    };
    t.default = l
}