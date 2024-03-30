function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("471559"),
        i = n("453197"),
        a = n("384139"),
        u = n("246098"),
        s = n("281767");

    function l(e) {
        var t = e.editor,
            n = e.channel,
            l = e.disableEnterToSubmit,
            c = e.onKeyDown,
            f = e.onKeyUp,
            d = e.onTab,
            _ = e.onEnter,
            E = e.allowNewLines,
            p = e.submit,
            m = e.hideAutocomplete,
            y = e.moveSelection;
        return {
            handleKeyDown: r.useCallback(function(e) {
                var r;
                switch (e.which) {
                    case s.KeyboardKeys.ARROW_UP:
                        if (y(-1)) {
                            e.preventDefault();
                            return
                        }
                        break;
                    case s.KeyboardKeys.ARROW_DOWN:
                        if (y(1)) {
                            e.preventDefault();
                            return
                        }
                        break;
                    case s.KeyboardKeys.P:
                        if ((0, u.checkModifiers)(e, {
                                ctrl: !0
                            }) && y(-1)) {
                            e.preventDefault();
                            return
                        }
                        break;
                    case s.KeyboardKeys.N:
                        if ((0, u.checkModifiers)(e, {
                                ctrl: !0
                            }) && y(1)) {
                            e.preventDefault();
                            return
                        }
                        break;
                    case s.KeyboardKeys.ESCAPE:
                        null == m || m();
                        break;
                    case s.KeyboardKeys.TAB:
                        if ((0, u.checkModifiers)(e, {}) && (null == d ? void 0 : d())) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }
                        if (null != o.default.getActiveCommand(n.id)) {
                            e.preventDefault(), e.stopPropagation(), e.shiftKey ? i.SlateTransforms.selectPreviousCommandOption(t) : i.SlateTransforms.selectNextCommandOption(t);
                            return
                        }
                        break;
                    case s.KeyboardKeys.ENTER:
                        if ((0, u.checkModifiers)(e, {}) && (null == _ ? void 0 : _(e))) {
                            e.preventDefault(), e.stopPropagation();
                            return
                        }
                }
                if ((null === (r = t.onKeyDown) || void 0 === r ? void 0 : r.call(t, e)) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return
                }
                e.which === s.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!l || e.ctrlKey) && !(0, a.hasOpenPlainTextCodeBlock)(t) || !E) && (e.preventDefault(), e.stopPropagation(), p()), null == c || c(e)
            }, [E, n.id, l, t, m, y, _, c, d, p]),
            handleKeyUp: r.useCallback(function(e) {
                null == f || f(e)
            }, [f])
        }
    }
}