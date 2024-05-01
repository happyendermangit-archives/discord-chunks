function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusJumpSection: function() {
            return _
        },
        useFocusJumpSection: function() {
            return d
        },
        useFocusJumpSectionManager: function() {
            return E
        }
    }), n("735250");
    var i = n("470079"),
        r = n("372817"),
        a = n("5967"),
        s = n("420212");
    let o = "data-jump-section",
        l = "global",
        u = i.createContext(l);

    function d() {
        let e = i.useContext(u);
        return i.useMemo(() => ({
            [o]: e
        }), [e])
    }

    function _(e) {
        let t = d();
        return e.children(t)
    }
    async function c(e) {
        var t, n, i, u;
        if (e.key !== s.FOCUS_SECTION_JUMP_KEY) return;
        let d = (0, a.eventOwnerDocument)(e);
        if (null == d) return;
        let _ = null,
            c = null,
            E = e.target;
        for (; null != E;) {
            if (E.hasAttribute(o)) {
                _ = E.getAttribute(o), c = E;
                break
            }
            E = E.parentElement
        }
        let I = (0, r.createFocusManager)({
            getFocusableElements: () => Array.from(d.querySelectorAll("[".concat(o, '="').concat(null != _ ? _ : l, '"]'))),
            getActiveElement: () => d.activeElement
        });
        if ((null === (t = (0, a.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement) == null || null == c) {
            null === (n = I.getFirstFocusableElement()) || void 0 === n || n.focus();
            return
        }
        e.getModifierState("Shift") ? null === (i = await I.getPreviousFocusableElement({
            wrap: !0,
            from: c
        })) || void 0 === i || i.focus() : null === (u = await I.getNextFocusableElement({
            wrap: !0,
            from: c
        })) || void 0 === u || u.focus()
    }

    function E(e) {
        i.useEffect(() => {
            if (e) return window.addEventListener("keydown", c), () => {
                window.removeEventListener("keydown", c)
            }
        }, [e])
    }
}