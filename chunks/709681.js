function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        createSoundForPack: function() {
            return o
        },
        createSound: function() {
            return l
        },
        playSound: function() {
            return u
        }
    });
    var s = n("870696"),
        r = n("319291"),
        a = n("102985");

    function o(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
            s = (0, r.default)(t);
        return l(null !== (n = s[e]) && void 0 !== n ? n : e, e, i)
    }

    function l(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return new i(e, t, n)
    }

    function u(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            i = arguments.length > 2 ? arguments[2] : void 0;
        if (a.default.disableSounds) return;
        let o = (0, r.default)(s.default.getSoundpack()),
            u = l(null !== (t = o[e]) && void 0 !== t ? t : e, e, n);
        return null != i ? u.playWithListener().then(e => {
            e && i()
        }) : u.play(), u
    }
    i = n("895737").WebAudioSound
}