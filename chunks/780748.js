function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("998698"),
        s = n("436660"),
        a = n("515270"),
        o = n("417662"),
        l = n("981631");

    function u(e) {
        let {
            editor: t,
            channel: n,
            disableEnterToSubmit: u,
            onKeyDown: d,
            onKeyUp: _,
            onTab: c,
            onEnter: E,
            allowNewLines: I,
            submit: T,
            hideAutocomplete: f,
            moveSelection: S
        } = e, h = i.useCallback(e => {
            var i;
            switch (e.which) {
                case l.KeyboardKeys.ARROW_UP:
                    if (S(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case l.KeyboardKeys.ARROW_DOWN:
                    if (S(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case l.KeyboardKeys.P:
                    if ((0, o.checkModifiers)(e, {
                            ctrl: !0
                        }) && S(-1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case l.KeyboardKeys.N:
                    if ((0, o.checkModifiers)(e, {
                            ctrl: !0
                        }) && S(1)) {
                        e.preventDefault();
                        return
                    }
                    break;
                case l.KeyboardKeys.ESCAPE:
                    null == f || f();
                    break;
                case l.KeyboardKeys.TAB:
                    if ((0, o.checkModifiers)(e, {}) && (null == c ? void 0 : c())) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    if (null != r.default.getActiveCommand(n.id)) {
                        e.preventDefault(), e.stopPropagation(), e.shiftKey ? s.SlateTransforms.selectPreviousCommandOption(t) : s.SlateTransforms.selectNextCommandOption(t);
                        return
                    }
                    break;
                case l.KeyboardKeys.ENTER:
                    if ((0, o.checkModifiers)(e, {}) && (null == E ? void 0 : E(e))) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
            }
            if ((null === (i = t.onKeyDown) || void 0 === i ? void 0 : i.call(t, e)) === !0) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            e.which === l.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, a.hasOpenPlainTextCodeBlock)(t) || !I) && (e.preventDefault(), e.stopPropagation(), T()), null == d || d(e)
        }, [I, n.id, u, t, f, S, E, d, c, T]);
        return {
            handleKeyDown: h,
            handleKeyUp: i.useCallback(e => {
                null == _ || _(e)
            }, [_])
        }
    }
}