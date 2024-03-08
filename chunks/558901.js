function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("446674"),
        s = n("280214"),
        r = n("271938"),
        o = n("18494"),
        u = n("943551"),
        d = n("232268"),
        c = n("798592"),
        f = n("39141"),
        p = n("49111"),
        m = n("172858");

    function h(e) {
        var t, n;
        let {
            editorHeight: i,
            textValue: d
        } = e, f = l.useRef(d), h = (0, s.useChannelAutocompleteLayerPosition)({
            editorHeight: i
        }), x = (0, c.default)(), E = (0, a.useStateFromStores)([u.default, r.default, o.default], () => {
            var e;
            return u.default.isComboing(r.default.getId(), null !== (e = o.default.getChannelId()) && void 0 !== e ? e : p.EMPTY_STRING_SNOWFLAKE_ID)
        }), y = null !== (t = null == h ? void 0 : h.left) && void 0 !== t ? t : 0, g = (null !== (n = null == h ? void 0 : h.top) && void 0 !== n ? n : 0) - 16, S = l.useMemo(() => .05 > Math.random(), [0 === d.length]);
        return l.useEffect(() => {
            0 !== d.length && d !== f.current && E && (x.fire(y, g, S ? {
                sprite: m.DUCK_CONFETTI_SPRITE
            } : null), f.current = d)
        }, [d, E, y, g, S, x]), null
    }

    function x(e) {
        return (0, i.jsx)(d.default, {
            confettiLocation: f.ConfettiLocation.CHAT_INPUT,
            children: (0, i.jsx)(h, {
                ...e
            })
        })
    }
}