function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFocusJumpSection: function() {
            return c
        },
        FocusJumpSection: function() {
            return d
        },
        useFocusJumpSectionManager: function() {
            return E
        }
    }), n("37983");
    var i = n("884691"),
        r = n("71185"),
        s = n("791776"),
        a = n("894282");
    let o = "data-jump-section",
        l = "global",
        u = i.createContext(l);

    function c() {
        let e = i.useContext(u);
        return i.useMemo(() => ({
            [o]: e
        }), [e])
    }

    function d(e) {
        let t = c();
        return e.children(t)
    }
    async function f(e) {
        var t, n, i, u;
        if (e.key !== a.FOCUS_SECTION_JUMP_KEY) return;
        let c = (0, s.eventOwnerDocument)(e);
        if (null == c) return;
        let d = null,
            f = null,
            E = e.target;
        for (; null != E;) {
            if (E.hasAttribute(o)) {
                d = E.getAttribute(o), f = E;
                break
            }
            E = E.parentElement
        }
        let p = (0, r.createFocusManager)({
            getFocusableElements: () => Array.from(c.querySelectorAll("[".concat(o, '="').concat(null != d ? d : l, '"]'))),
            getActiveElement: () => c.activeElement
        });
        if ((null === (t = (0, s.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == f) {
            null === (n = p.getFirstFocusableElement()) || void 0 === n || n.focus();
            return
        }
        e.getModifierState("Shift") ? null === (i = await p.getPreviousFocusableElement({
            wrap: !0,
            from: f
        })) || void 0 === i || i.focus() : null === (u = await p.getNextFocusableElement({
            wrap: !0,
            from: f
        })) || void 0 === u || u.focus()
    }

    function E(e) {
        i.useEffect(() => {
            if (e) return window.addEventListener("keydown", f), () => {
                window.removeEventListener("keydown", f)
            }
        }, [e])
    }
}