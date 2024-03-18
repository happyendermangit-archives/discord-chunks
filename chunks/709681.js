function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        createSoundForPack: function() {
            return l
        },
        createSound: function() {
            return u
        },
        playSound: function() {
            return d
        }
    });
    var s = n("817720"),
        r = n("870696"),
        a = n("319291"),
        o = n("102985");
    {
        let e = (0, s.isEligibleForWebAudioAPI)({
                location: "SoundUtils"
            }),
            t = n("895737");
        i = e ? t.WebAudioAPISound : t.WebAudioSound
    }

    function l(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = (0, a.default)(t);
        return u(null !== (n = s[e]) && void 0 !== n ? n : e, e, i)
    }

    function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return new i(e, t, n)
    }

    function d(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 ? arguments[2] : void 0;
        if (o.default.disableSounds) return;
        let s = (0, a.default)(r.default.getSoundpack()),
            l = u(null !== (t = s[e]) && void 0 !== t ? t : e, e, n);
        return null != i ? l.playWithListener().then(e => {
            e && i()
        }) : l.play(), l
    }
}