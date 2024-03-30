function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createSound: function() {
            return f
        },
        createSoundForPack: function() {
            return c
        },
        playSound: function() {
            return d
        }
    });
    var r, o = n("631928"),
        i = n("694179"),
        a = n("345507"),
        u = n("930949"),
        s = (0, o.isEligibleForWebAudioAPI)({
            location: "SoundUtils"
        }),
        l = n("427266");

    function c(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return f(null !== (n = (0, a.default)(t)[e]) && void 0 !== n ? n : e, e, r)
    }

    function f(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return new r(e, t, n)
    }

    function d(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
            r = arguments.length > 2 ? arguments[2] : void 0;
        if (!u.default.disableSounds) {
            var o = f(null !== (t = (0, a.default)(i.default.getSoundpack())[e]) && void 0 !== t ? t : e, e, n);
            return null != r ? o.playWithListener().then(function(e) {
                e && r()
            }) : o.play(), o
        }
    }
    r = s ? l.WebAudioAPISound : l.WebAudioSound
}