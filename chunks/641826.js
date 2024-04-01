function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        importLootboxAnimationData: function() {
            return c
        },
        randomBetween: function() {
            return l
        },
        useShouldShowMainLootboxEntrypoint: function() {
            return _
        }
    }), n("47120");
    var i = n("470079"),
        r = n("846519"),
        s = n("70956"),
        a = n("246208"),
        o = n("232700");

    function l(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function u() {
        return Date.now() < o.LOOTBOX_MAIN_ENTRYPOINT_LAST_SHOWN_TIME.getTime()
    }
    let d = s.default.Millis.HOUR;

    function _(e) {
        let {
            allowOpeningLootboxes: t
        } = a.default.useExperiment({
            location: e
        }), [n, s] = (0, i.useState)(u()), [o] = (0, i.useState)(new r.Interval);
        return (0, i.useEffect)(() => (t && n && o.start(d, () => {
            s(u())
        }), () => o.stop()), [t, o, n]), t && n
    }
    async function c() {
        return (await n.e("5083").then(n.t.bind(n, "13977", 19))).default
    }
}