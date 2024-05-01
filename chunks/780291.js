function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("606992"),
        o = n("314897"),
        l = n("944486"),
        u = n("843693"),
        d = n("576125"),
        _ = n("112843"),
        c = n("524484"),
        E = n("981631"),
        I = n("675654");

    function T(e) {
        var t, n;
        let {
            editorHeight: i,
            textValue: d
        } = e, c = r.useRef(d), T = (0, s.useChannelAutocompleteLayerPosition)({
            editorHeight: i
        }), f = (0, _.default)(), S = (0, a.useStateFromStores)([u.default, o.default, l.default], () => {
            var e;
            return u.default.isComboing(o.default.getId(), null !== (e = l.default.getChannelId()) && void 0 !== e ? e : E.EMPTY_STRING_SNOWFLAKE_ID)
        }), h = null !== (t = null == T ? void 0 : T.left) && void 0 !== t ? t : 0, A = (null !== (n = null == T ? void 0 : T.top) && void 0 !== n ? n : 0) - 16, m = r.useMemo(() => .05 > Math.random(), [0 === d.length]);
        return r.useEffect(() => {
            0 !== d.length && d !== c.current && S && (f.fire(h, A, m ? {
                sprite: I.DUCK_CONFETTI_SPRITE
            } : null), c.current = d)
        }, [d, S, h, A, m, f]), null
    }

    function f(e) {
        return (0, i.jsx)(d.default, {
            confettiLocation: c.ConfettiLocation.CHAT_INPUT,
            children: (0, i.jsx)(T, {
                ...e
            })
        })
    }
}