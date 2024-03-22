function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
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

    function V(N) {
        O.default.dispatch({
            type: "CONTEXT_MENU_OPEN",
            contextMenu: N
        })
    }

    function t(N) {
        {
            let {
                flushSync: I
            } = A("817736");
            I(() => {
                O.default.wait(() => {
                    O.default.dispatch({
                        type: "CONTEXT_MENU_CLOSE"
                    }).finally(N)
                })
            })
        }
    }

    function n(N, I, A, O) {
        var t, n, i;
        if (N.stopPropagation(), null != N.currentTarget.contains && !N.currentTarget.contains(N.target)) return;
        let R = 0,
            G = 0;
        if ("pageX" in N && (R = N.pageX, G = N.pageY), 0 === R && 0 === G) {
            let I = null === (t = N.target) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                {
                    left: A = 0,
                    top: O = 0,
                    width: T = 0,
                    height: _ = 0
                } = null != I ? I : {};
            R = A + T / 2, G = O + _ / 2
        }
        let r = {
            render: I,
            renderLazy: O,
            target: null !== (n = N.target) && void 0 !== n ? n : N.currentTarget,
            rect: new DOMRect(R, G, 0, 0),
            config: {
                context: __OVERLAY__ ? E.AppContext.OVERLAY : null !== (i = (0, T.getCurrentlyInteractingAppContext)()) && void 0 !== i ? i : E.AppContext.APP,
                ...A
            }
        };
        if ((null == A ? void 0 : A.enableSpellCheck) && (0, _.isDesktop)()) {
            let N = (0, e.addResultListener)(() => {
                N(), V(r)
            })
        } else N.preventDefault(), V(r)
    }

    function i(N, I, A) {
        n(N, void 0, A, I)
    }
}