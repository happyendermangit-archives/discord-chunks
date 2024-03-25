function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getInteractingModalContext: function() {
            return d
        },
        modalContextFromAppContext: function() {
            return _
        },
        useModalsStore: function() {
            return f
        },
        openModalLazy: function() {
            return S
        },
        openModal: function() {
            return E
        },
        closeModal: function() {
            return g
        },
        updateModal: function() {
            return m
        },
        hasAnyModalOpenSelector: function() {
            return h
        },
        hasAnyModalOpen: function() {
            return p
        },
        useHasAnyModalOpen: function() {
            return I
        },
        useIsModalAtTop: function() {
            return T
        },
        closeAllModals: function() {
            return v
        },
        hasModalOpenSelector: function() {
            return A
        },
        hasModalOpen: function() {
            return N
        }
    }), n("70102"), n("222007"), n("106442"), n("175143");
    var i = n("995008"),
        r = n.n(i),
        o = n("308503"),
        s = n("244201"),
        l = n("625611"),
        a = n("49111");
    let u = n("362149").default,
        c = [l.DEFAULT_MODAL_CONTEXT, l.POPOUT_MODAL_CONTEXT];

    function d() {
        let e = (0, s.getCurrentlyInteractingAppContext)();
        return null != e ? _(e) : l.DEFAULT_MODAL_CONTEXT
    }

    function _(e) {
        return e === a.AppContext.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT
    }
    let f = (0, o.default)(e => ({
        [l.DEFAULT_MODAL_CONTEXT]: [],
        [l.POPOUT_MODAL_CONTEXT]: []
    }));
    async function S(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                contextKey: n = d(),
                ...i
            } = t,
            o = null != t.modalKey ? t.modalKey : r(),
            s = !1,
            l = setTimeout(() => {
                s = !0, E(u, {
                    ...i,
                    modalKey: o
                }, n)
            }, 300),
            a = await e();
        return clearTimeout(l), s ? N(o, n) && m(o, a, i.onCloseRequest, i.onCloseCallback, n) : E(a, {
            ...i,
            modalKey: o
        }, n), o
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d(),
            {
                modalKey: i,
                instant: o,
                Layer: s,
                onCloseRequest: l,
                onCloseCallback: a,
                backdropStyle: u
            } = t,
            c = null != i ? i : r();
        return f.setState(t => {
            let i = t[n];
            return void 0 !== i && i.some(e => {
                let {
                    key: t
                } = e;
                return t === c
            }) ? t : {
                ...t,
                [n]: [...i, {
                    key: c,
                    Layer: s,
                    render: e,
                    onCloseRequest: null != l ? l : () => g(c, n),
                    onCloseCallback: a,
                    instant: o,
                    backdropStyle: u
                }]
            }
        }), c
    }

    function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d(),
            n = f.getState()[t],
            i = null != n ? n.find(t => {
                let {
                    key: n
                } = t;
                return n === e
            }) : null;
        f.setState(n => void 0 === n[t] ? n : {
            ...n,
            [t]: n[t].filter(t => {
                let {
                    key: n
                } = t;
                return n !== e
            })
        }), null != i && null != i.onCloseCallback && i.onCloseCallback()
    }

    function m(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : d();
        f.setState(o => void 0 === o[r] ? o : {
            ...o,
            [r]: o[r].map(o => o.key === e ? {
                ...o,
                render: t,
                onCloseRequest: null == n ? () => g(e, r) : n,
                onCloseCallback: i
            } : o)
        })
    }

    function h(e) {
        for (let t of c) {
            let n = e[t];
            if (null != n && n.length > 0) return !0
        }
        return !1
    }

    function p() {
        return h(f.getState())
    }

    function I() {
        let e = f();
        return h(e)
    }

    function T(e) {
        var t, n;
        let {
            default: i,
            popout: r
        } = f();
        return r.length > 0 ? (null === (t = r.at(-1)) || void 0 === t ? void 0 : t.key) === e : (null === (n = i.at(-1)) || void 0 === n ? void 0 : n.key) === e
    }

    function v() {
        let e = f.getState();
        for (let t in e)
            for (let n of e[t]) g(n.key, t)
    }

    function A(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.DEFAULT_MODAL_CONTEXT,
            i = e[n];
        return null != i && i.some(e => e.key === t)
    }

    function N(e, t) {
        return A(f.getState(), e, t)
    }
}