function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("470079"),
        r = n("442837"),
        a = n("952265"),
        s = n("481060"),
        o = n("714338"),
        l = n("857595"),
        u = n("607070"),
        d = n("627845"),
        _ = n("556296"),
        c = n("5967"),
        E = n("13140"),
        I = n("981631"),
        T = n("420212");

    function f(e) {
        let t = e.ctrlKey || e.altKey || e.metaKey;
        e.key === T.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, a.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
    }

    function S() {
        (0, l.disableKeyboardMode)()
    }
    t.default = function(e, t) {
        let n = (0, r.useStateFromStores)([u.default], () => u.default.keyboardModeEnabled);
        (0, s.useFocusJumpSectionManager)(n);
        let a = (0, i.useCallback)(e => {
            ! function(e, t) {
                var n, i;
                let r = (0, c.isInputLikeElement)(null === (n = (0, c.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                if (r && e.key !== T.KeyboardEventKey.Tab || e.ctrlKey || e.altKey || e.metaKey || e.key !== T.KeyboardEventKey.Tab && e.shiftKey) return;
                let a = function(e) {
                    let t = E.keyToCode("shift"),
                        n = E.keyToCode("tab");
                    if (e.key === T.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                        [I.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                        [I.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                    ];
                    let i = T.NavigationKeyShortcutMap.get(e.key);
                    if (null != i) {
                        let e = E.keyToCode(i);
                        if (null != e) return [
                            [I.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                        ]
                    }
                    return null
                }(e);
                null != a && !_.default.hasExactKeybind(a) && !o.default.hasBind(null !== (i = E.codeToKey(a[0])) && void 0 !== i ? i : "") && ((0, l.enableKeyboardMode)(), r && !t && e.preventDefault())
            }(e, t)
        }, [t]);
        return (0, i.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", S), e.addEventListener("keydown", f)) : e.addEventListener("keydown", a), () => {
            n ? (e.removeEventListener("mousedown", S), e.removeEventListener("keydown", f)) : e.removeEventListener("keydown", a)
        }), [e, a, n]), n
    }
}