function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("547459"),
        a = n("217014"),
        u = n("894288"),
        s = n("229053"),
        l = n("41218"),
        c = n("801776"),
        f = n("582258"),
        d = n("281767"),
        _ = n("332243");

    function E(e) {
        var t, n, l = e.editorHeight,
            f = e.textValue,
            E = r.useRef(f),
            p = (0, i.useChannelAutocompleteLayerPosition)({
                editorHeight: l
            }),
            m = (0, c.default)(),
            y = (0, o.useStateFromStores)([s.default, a.default, u.default], function() {
                var e;
                return s.default.isComboing(a.default.getId(), null !== (e = u.default.getChannelId()) && void 0 !== e ? e : d.EMPTY_STRING_SNOWFLAKE_ID)
            }),
            I = null !== (t = null == p ? void 0 : p.left) && void 0 !== t ? t : 0,
            h = (null !== (n = null == p ? void 0 : p.top) && void 0 !== n ? n : 0) - 16,
            O = r.useMemo(function() {
                return .05 > Math.random()
            }, [0 === f.length]);
        return r.useEffect(function() {
            0 !== f.length && f !== E.current && y && (m.fire(I, h, O ? {
                sprite: _.DUCK_CONFETTI_SPRITE
            } : null), E.current = f)
        }, [f, y, I, h, O, m]), null
    }

    function p(e) {
        return r.createElement(l.default, {
            confettiLocation: f.ConfettiLocation.CHAT_INPUT
        }, r.createElement(E, e))
    }
}