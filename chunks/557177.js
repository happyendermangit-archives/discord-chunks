function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        createSound: function() {
            return u
        },
        createSoundForPack: function() {
            return l
        },
        playSound: function() {
            return d
        }
    });
    var r = n("292619"),
        s = n("474873"),
        a = n("135906"),
        o = n("246946");
    {
        let e = (0, r.isEligibleForWebAudioAPI)({
                location: "SoundUtils"
            }),
            t = n("902653");
        i = e ? t.WebAudioAPISound : t.WebAudioSound
    }

    function l(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return u(null !== (n = (0, a.default)(t)[e]) && void 0 !== n ? n : e, e, i)
    }

    function u(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return new i(e, t, n)
    }

    function d(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 ? arguments[3] : void 0;
        if (o.default.disableSounds) return;
        let l = u(null !== (t = (0, a.default)(null != r ? r : s.default.getSoundpack())[e]) && void 0 !== t ? t : e, e, n);
        return null != i ? l.playWithListener().then(e => {
            e && i()
        }) : l.play(), l
    }
}