function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("67381"),
        a = n("784184"),
        u = n("423466"),
        s = n("357337"),
        l = n("622780"),
        c = n("7730"),
        f = n("53881"),
        d = n("850168"),
        _ = n("469849"),
        E = n("281767"),
        p = n("654546");

    function m(e) {
        var t = e.ctrlKey || e.altKey || e.metaKey;
        e.key === p.KeyboardEventKey.Tab && !t && !__OVERLAY__ && !(0, i.hasAnyModalOpen)() && c.default.maybeShowKeyboardNavigationExplainerModal()
    }

    function y() {
        (0, s.disableKeyboardMode)()
    }
    t.default = function(e, t) {
        var n = (0, o.useStateFromStores)([l.default], function() {
            return l.default.keyboardModeEnabled
        });
        (0, a.useFocusJumpSectionManager)(n);
        var i = (0, r.useCallback)(function(e) {
            ! function(e, t) {
                var n, r, o = (0, d.isInputLikeElement)(null === (n = (0, d.eventOwnerDocument)(e)) || void 0 === n ? void 0 : n.activeElement);
                if (!o || e.key === p.KeyboardEventKey.Tab) {
                    if (!(e.ctrlKey || e.altKey || e.metaKey || e.key !== p.KeyboardEventKey.Tab && e.shiftKey)) {
                        var i = function(e) {
                            var t = _.keyToCode("shift"),
                                n = _.keyToCode("tab");
                            if (e.key === p.KeyboardEventKey.Tab && e.shiftKey && null != t && null != n) return [
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, t],
                                [E.KeyboardDeviceTypes.KEYBOARD_KEY, n]
                            ];
                            var r = p.NavigationKeyShortcutMap.get(e.key);
                            if (null != r) {
                                var o = _.keyToCode(r);
                                if (null != o) return [
                                    [E.KeyboardDeviceTypes.KEYBOARD_KEY, o]
                                ]
                            }
                            return null
                        }(e);
                        null != i && !f.default.hasExactKeybind(i) && !u.default.hasBind(null !== (r = _.codeToKey(i[0])) && void 0 !== r ? r : "") && ((0, s.enableKeyboardMode)(), o && !t && e.preventDefault())
                    }
                }
            }(e, t)
        }, [t]);
        return (0, r.useLayoutEffect)(function() {
            return n ? (e.addEventListener("mousedown", y), e.addEventListener("keydown", m)) : e.addEventListener("keydown", i),
                function() {
                    n ? (e.removeEventListener("mousedown", y), e.removeEventListener("keydown", m)) : e.removeEventListener("keydown", i)
                }
        }, [e, i, n]), n
    }
}