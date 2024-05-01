function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        closeAllModals: function() {
            return p
        },
        closeModal: function() {
            return f
        },
        getInteractingModalContext: function() {
            return _
        },
        hasAnyModalOpen: function() {
            return A
        },
        hasAnyModalOpenSelector: function() {
            return h
        },
        hasModalOpen: function() {
            return R
        },
        hasModalOpenSelector: function() {
            return O
        },
        modalContextFromAppContext: function() {
            return c
        },
        openModal: function() {
            return T
        },
        openModalLazy: function() {
            return I
        },
        updateModal: function() {
            return S
        },
        useHasAnyModalOpen: function() {
            return m
        },
        useIsModalAtTop: function() {
            return N
        },
        useModalsStore: function() {
            return E
        }
    }), n("411104"), n("47120"), n("571269"), n("298267");
    var i = n("97613"),
        r = n.n(i),
        a = n("652874"),
        s = n("40851"),
        o = n("602091"),
        l = n("981631");
    let u = n("338305").default,
        d = [o.DEFAULT_MODAL_CONTEXT, o.POPOUT_MODAL_CONTEXT];

    function _() {
        let e = (0, s.getCurrentlyInteractingAppContext)();
        return null != e ? c(e) : o.DEFAULT_MODAL_CONTEXT
    }

    function c(e) {
        return e === l.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
    }
    let E = (0, a.default)(e => ({
        [o.DEFAULT_MODAL_CONTEXT]: [],
        [o.POPOUT_MODAL_CONTEXT]: []
    }));
    async function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                contextKey: n = _(),
                ...i
            } = t,
            a = null != t.modalKey ? t.modalKey : r()(),
            s = !1,
            o = setTimeout(() => {
                s = !0, T(u, {
                    ...i,
                    modalKey: a
                }, n)
            }, 300),
            l = await e();
        return clearTimeout(o), s ? R(a, n) && S(a, l, i.onCloseRequest, i.onCloseCallback, n) : T(l, {
            ...i,
            modalKey: a
        }, n), a
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _(),
            {
                modalKey: i,
                instant: a,
                Layer: s,
                onCloseRequest: o,
                onCloseCallback: l,
                backdropStyle: u
            } = t,
            d = null != i ? i : r()();
        return E.setState(t => {
            let i = t[n];
            return void 0 !== i && i.some(e => {
                let {
                    key: t
                } = e;
                return t === d
            }) ? t : {
                ...t,
                [n]: [...i, {
                    key: d,
                    Layer: s,
                    render: e,
                    onCloseRequest: null != o ? o : () => f(d, n),
                    onCloseCallback: l,
                    instant: a,
                    backdropStyle: u
                }]
            }
        }), d
    }

    function f(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _(),
            n = E.getState()[t],
            i = null != n ? n.find(t => {
                let {
                    key: n
                } = t;
                return n === e
            }) : null;
        E.setState(n => void 0 === n[t] ? n : {
            ...n,
            [t]: n[t].filter(t => {
                let {
                    key: n
                } = t;
                return n !== e
            })
        }), null != i && null != i.onCloseCallback && i.onCloseCallback()
    }

    function S(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _();
        E.setState(a => void 0 === a[r] ? a : {
            ...a,
            [r]: a[r].map(a => a.key === e ? {
                ...a,
                render: t,
                onCloseRequest: null == n ? () => f(e, r) : n,
                onCloseCallback: i
            } : a)
        })
    }

    function h(e) {
        for (let t of d) {
            let n = e[t];
            if (null != n && n.length > 0) return !0
        }
        return !1
    }

    function A() {
        return h(E.getState())
    }

    function m() {
        return h(E())
    }

    function N(e) {
        var t, n;
        let {
            default: i,
            popout: r
        } = E();
        return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e
    }

    function p() {
        let e = E.getState();
        for (let t in e)
            for (let n of e[t]) f(n.key, t)
    }

    function O(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.DEFAULT_MODAL_CONTEXT,
            i = e[n];
        return null != i && i.some(e => e.key === t)
    }

    function R(e, t) {
        return O(E.getState(), e, t)
    }
}