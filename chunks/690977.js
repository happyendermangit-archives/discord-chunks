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
            return f
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
    async function _(e) {
        var t, n, i, u;
        if (e.key !== a.FOCUS_SECTION_JUMP_KEY) return;
        let d = (0, r.eventOwnerDocument)(e);
        if (null == d) return;
        let c = null,
            _ = null,
            f = e.target;
        for (; null != f;) {
            if (f.hasAttribute(o)) {
                c = f.getAttribute(o), _ = f;
                break
            }
            f = f.parentElement
        }
        let E = (0, s.createFocusManager)({
            getFocusableElements: () => Array.from(d.querySelectorAll("[".concat(o, '="').concat(null != c ? c : l, '"]'))),
            getActiveElement: () => d.activeElement
        });
        if ((null === (t = (0, r.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == _) {
            null === (n = E.getFirstFocusableElement()) || void 0 === n || n.focus();
            return
        }
        e.getModifierState("Shift") ? null === (i = await E.getPreviousFocusableElement({
            wrap: !0,
            from: _
        })) || void 0 === i || i.focus() : null === (u = await E.getNextFocusableElement({
            wrap: !0,
            from: _
        })) || void 0 === u || u.focus()
    }

    function f(e) {
        i.useEffect(() => {
            if (e) return window.addEventListener("keydown", _), () => {
                window.removeEventListener("keydown", _)
            }
        }, [e])
    }
}