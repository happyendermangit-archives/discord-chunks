function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("884691"),
        l = n("383018"),
        a = n("939563"),
        s = n("467123"),
        r = n("93640"),
        o = n("49111");

    function u(e) {
        let {
            editor: t,
            channel: n,
            disableEnterToSubmit: u,
            onKeyDown: d,
            onKeyUp: c,
            onTab: f,
            onEnter: p,
            allowNewLines: m,
            submit: h,
            hideAutocomplete: x,
            moveSelection: E
        } = e, y = i.useCallback(e => {
            var i;
            switch (e.which) {
                case o.KeyboardKeys.ARROW_UP:
                    if (E(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.ARROW_DOWN:
                    if (E(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.P:
                    if ((0, r.checkModifiers)(e, {
                            ctrl: !0
                        }) && E(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.N:
                    if ((0, r.checkModifiers)(e, {
                            ctrl: !0
                        }) && E(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.ESCAPE:
                    null == x || x();
                    break;
                case o.KeyboardKeys.TAB:
                    if ((0, r.checkModifiers)(e, {}) && (null == f ? void 0 : f())) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    let c = l.default.getActiveCommand(n.id);
                    if (null != c) {
                        e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.SlateTransforms.selectPreviousCommandOption(t) : a.SlateTransforms.selectNextCommandOption(t);
                        return
                    }
                    break;
                case o.KeyboardKeys.ENTER:
                    if ((0, r.checkModifiers)(e, {}) && (null == p ? void 0 : p(e))) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
            }
            if ((null === (i = t.onKeyDown) || void 0 === i ? void 0 : i.call(t, e)) === !0) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            e.which === o.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, s.hasOpenPlainTextCodeBlock)(t) || !m) && (e.preventDefault(), e.stopPropagation(), h()), null == d || d(e)
        }, [m, n.id, u, t, x, E, p, d, f, h]), g = i.useCallback(e => {
            null == c || c(e)
        }, [c]);
        return {
            handleKeyDown: y,
            handleKeyUp: g
        }
    }
}