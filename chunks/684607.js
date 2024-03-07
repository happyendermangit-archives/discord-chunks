function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("884691"),
        i = n("383018"),
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
            onEnter: m,
            allowNewLines: p,
            submit: h,
            hideAutocomplete: E,
            moveSelection: g
        } = e, S = l.useCallback(e => {
            var l;
            switch (e.which) {
                case o.KeyboardKeys.ARROW_UP:
                    if (g(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.ARROW_DOWN:
                    if (g(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.P:
                    if ((0, r.checkModifiers)(e, {
                            ctrl: !0
                        }) && g(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.N:
                    if ((0, r.checkModifiers)(e, {
                            ctrl: !0
                        }) && g(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case o.KeyboardKeys.ESCAPE:
                    null == E || E();
                    break;
                case o.KeyboardKeys.TAB:
                    if ((0, r.checkModifiers)(e, {}) && (null == f ? void 0 : f())) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    let c = i.default.getActiveCommand(n.id);
                    if (null != c) {
                        e.preventDefault(), e.stopPropagation(), e.shiftKey ? a.SlateTransforms.selectPreviousCommandOption(t) : a.SlateTransforms.selectNextCommandOption(t);
                        return
                    }
                    break;
                case o.KeyboardKeys.ENTER:
                    if ((0, r.checkModifiers)(e, {}) && (null == m ? void 0 : m(e))) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
            }
            if ((null === (l = t.onKeyDown) || void 0 === l ? void 0 : l.call(t, e)) === !0) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            e.which === o.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, s.hasOpenPlainTextCodeBlock)(t) || !p) && (e.preventDefault(), e.stopPropagation(), h()), null == d || d(e)
        }, [p, n.id, u, t, E, g, m, d, f, h]), C = l.useCallback(e => {
            null == c || c(e)
        }, [c]);
        return {
            handleKeyDown: S,
            handleKeyUp: C
        }
    }
}