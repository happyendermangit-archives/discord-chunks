function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        closeContextMenu: function() {
            return t
        },
        openContextMenu: function() {
            return n
        },
        openContextMenuLazy: function() {
            return i
        }
    }), A("506083");
    var O = A("913144"),
        T = A("244201"),
        _ = A("773336"),
        e = A("749866"),
        E = A("49111");

    function V(I) {
        O.default.dispatch({
            type: "CONTEXT_MENU_OPEN",
            contextMenu: I
        })
    }

    function t(I) {
        {
            let {
                flushSync: N
            } = A("817736");
            N(() => {
                O.default.wait(() => {
                    O.default.dispatch({
                        type: "CONTEXT_MENU_CLOSE"
                    }).finally(I)
                })
            })
        }
    }

    function n(I, N, A, O) {
        var t, n, i;
        if (I.stopPropagation(), null != I.currentTarget.contains && !I.currentTarget.contains(I.target)) return;
        let R = 0,
            G = 0;
        if ("pageX" in I && (R = I.pageX, G = I.pageY), 0 === R && 0 === G) {
            let N = null === (t = I.target) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                {
                    left: A = 0,
                    top: O = 0,
                    width: T = 0,
                    height: _ = 0
                } = null != N ? N : {};
            R = A + T / 2, G = O + _ / 2
        }
        let r = {
            render: N,
            renderLazy: O,
            target: null !== (n = I.target) && void 0 !== n ? n : I.currentTarget,
            rect: new DOMRect(R, G, 0, 0),
            config: {
                context: __OVERLAY__ ? E.AppContext.OVERLAY : null !== (i = (0, T.getCurrentlyInteractingAppContext)()) && void 0 !== i ? i : E.AppContext.APP,
                ...A
            }
        };
        if ((null == A ? void 0 : A.enableSpellCheck) && (0, _.isDesktop)()) {
            let I = (0, e.addResultListener)(() => {
                I(), V(r)
            })
        } else I.preventDefault(), V(r)
    }

    function i(I, N, A) {
        n(I, void 0, A, N)
    }
}