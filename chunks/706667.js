function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("135869"),
        a = n("763296"),
        o = n("242291"),
        l = n("22382"),
        u = n("747071");

    function d(e, t) {
        let {
            currentPreviewRef: n
        } = i.useContext(s.default), d = (0, r.useStateFromStores)([a.default], () => a.default.isPlayingSound(e.soundId), [e]), _ = i.useCallback(i => {
            null != n.current && n.current.pause(), null != t && (0, o.playSound)(e, t, i)
        }, [e, n, t]), c = i.useCallback(() => {
            let t = new Audio((0, l.default)(e.soundId));
            null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.default)(e.volume), t.play()
        }, [e, n]);
        return i.useCallback(() => () => {
            var e;
            return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
        }, [n]), {
            playSoundboardSound: _,
            isPlayingSound: d,
            previewSound: c
        }
    }
}