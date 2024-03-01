function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var a = n("884691"),
        r = n("446674"),
        s = n("551042"),
        l = n("77078"),
        i = n("485328"),
        u = n("180748"),
        o = n("206230"),
        d = n("951212"),
        c = n("227602"),
        f = n("791776"),
        h = n("13798"),
        E = n("49111"),
        p = n("894282");

    function m(e) {
        let t = e.ctrlKey || e.altKey || e.metaKey;
        e.key === p.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, s.hasAnyModalOpen)() && d.default.maybeShowKeyboardNavigationExplainerModal()
    }

    function C() {
        (0, u.disableKeyboardMode)()
    }
    var S = function(e, t) {
        let n = (0, r.useStateFromStores)([o.default], () => o.default.keyboardModeEnabled);
        (0, l.useFocusJumpSectionManager)(n);
        let s = (0, a.useCallback)(e => {
            ! function(e, t) {
                var n, a;
                let r = (0, f.isInputLikeElement)(null === (n = (0, f.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                if (r && e.key !== p.KeyboardEventKey.Tab) return;
                let s = e.ctrlKey || e.altKey || e.metaKey || e.key !== p.KeyboardEventKey.Tab && e.shiftKey;
                if (s) return;
                let l = function(e) {
                    let t = h.keyToCode("shift"),
                        n = h.keyToCode("tab");
                    if (e.key === p.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                        [E.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                        [E.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                    ];
                    let a = p.NavigationKeyShortcutMap.get(e.key);
                    if (null != a) {
                        let e = h.keyToCode(a);
                        if (null != e) return [
                            [E.KeyboardDeviceTypes.KEYBOARD_KEY, e]
                        ]
                    }
                    return null
                }(e);
                null != l && !c.default.hasExactKeybind(l) && !i.default.hasBind(null !== (a = h.codeToKey(l[0])) && void 0 !== a ? a : "") && ((0, u.enableKeyboardMode)(), r && !t && e.preventDefault())
            }(e, t)
        }, [t]);
        return (0, a.useLayoutEffect)(() => (n ? (e.addEventListener("mousedown", C), e.addEventListener("keydown", m)) : e.addEventListener("keydown", s), () => {
            n ? (e.removeEventListener("mousedown", C), e.removeEventListener("keydown", m)) : e.removeEventListener("keydown", s)
        }), [e, s, n]), n
    }
}