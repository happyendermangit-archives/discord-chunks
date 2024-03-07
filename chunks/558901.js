function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("280214"),
        r = n("271938"),
        o = n("18494"),
        u = n("943551"),
        d = n("232268"),
        c = n("798592"),
        f = n("39141"),
        m = n("49111"),
        p = n("172858");

    function h(e) {
        var t, n;
        let {
            editorHeight: l,
            textValue: d
        } = e, f = i.useRef(d), h = (0, s.useChannelAutocompleteLayerPosition)({
            editorHeight: l
        }), E = (0, c.default)(), g = (0, a.useStateFromStores)([u.default, r.default, o.default], () => {
            var e;
            return u.default.isComboing(r.default.getId(), null !== (e = o.default.getChannelId()) && void 0 !== e ? e : m.EMPTY_STRING_SNOWFLAKE_ID)
        }), S = null !== (t = null == h ? void 0 : h.left) && void 0 !== t ? t : 0, C = (null !== (n = null == h ? void 0 : h.top) && void 0 !== n ? n : 0) - 16, T = i.useMemo(() => .05 > Math.random(), [0 === d.length]);
        return i.useEffect(() => {
            0 !== d.length && d !== f.current && g && (E.fire(S, C, T ? {
                sprite: p.DUCK_CONFETTI_SPRITE
            } : null), f.current = d)
        }, [d, g, S, C, T, E]), null
    }

    function E(e) {
        return (0, l.jsx)(d.default, {
            confettiLocation: f.ConfettiLocation.CHAT_INPUT,
            children: (0, l.jsx)(h, {
                ...e
            })
        })
    }
}