function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("258461"),
        a = n("452700"),
        u = n("141526"),
        s = n("155866"),
        l = n("689505");

    function c(e, t) {
        var n = r.useContext(i.default).currentPreviewRef,
            c = (0, o.useStateFromStores)([a.default], function() {
                return a.default.isPlayingSound(e.soundId)
            }, [e]),
            f = r.useCallback(function(r) {
                null != n.current && n.current.pause(), null != t && (0, u.playSound)(e, t, r)
            }, [e, n, t]),
            d = r.useCallback(function() {
                var t = new Audio((0, s.default)(e.soundId));
                null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, l.default)(e.volume), t.play()
            }, [e, n]);
        return r.useCallback(function() {
            return function() {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
            }
        }, [n]), {
            playSoundboardSound: f,
            isPlayingSound: c,
            previewSound: d
        }
    }
}