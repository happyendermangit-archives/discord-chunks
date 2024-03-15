function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusJumpSection: function() {
            return d
        },
        FocusJumpSection: function() {
            return c
        },
        useFocusJumpSectionManager: function() {
            return _
        }
    }), n("37983");
    var i = n("884691"),
        s = n("71185"),
        r = n("791776"),
        a = n("894282");
    let o = "data-jump-section",
        l = "global",
        u = i.createContext(l);

    function d() {
        let e = i.useContext(u);
        return i.useMemo(() => ({
            [o]: e
        }), [e])
    }

    function c(e) {
        let t = d();
        return e.children(t)
    }
    async function f(e) {
        var t, n, i, u;
        if (e.key !== a.FOCUS_SECTION_JUMP_KEY) return;
        let d = (0, r.eventOwnerDocument)(e);
        if (null == d) return;
        let c = null,
            f = null,
            _ = e.target;
        for (; null != _;) {
            if (_.hasAttribute(o)) {
                c = _.getAttribute(o), f = _;
                break
            }
            _ = _.parentElement
        }
        let E = (0, s.createFocusManager)({
            getFocusableElements: () => Array.from(d.querySelectorAll("[".concat(o, '="').concat(null != c ? c : l, '"]'))),
            getActiveElement: () => d.activeElement
        });
        if ((null === (t = (0, r.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == f) {
            null === (n = E.getFirstFocusableElement()) || void 0 === n || n.focus();
            return
        }
        e.getModifierState("Shift") ? null === (i = await E.getPreviousFocusableElement({
            wrap: !0,
            from: f
        })) || void 0 === i || i.focus() : null === (u = await E.getNextFocusableElement({
            wrap: !0,
            from: f
        })) || void 0 === u || u.focus()
    }

    function _(e) {
        i.useEffect(() => {
            if (e) return window.addEventListener("keydown", f), () => {
                window.removeEventListener("keydown", f)
            }
        }, [e])
    }
}