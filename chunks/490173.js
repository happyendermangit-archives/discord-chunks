function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("699581"),
        a = n("990547"),
        o = n("442837"),
        l = n("481060"),
        u = n("239091"),
        d = n("40851"),
        _ = n("213609"),
        c = n("210887"),
        E = n("574254"),
        I = n("153850"),
        T = n("585483"),
        f = n("632120"),
        S = n("981631");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = e => {
        let {
            children: t,
            close: n,
            onUnmount: o,
            rect: u,
            position: c,
            align: E,
            impressionName: T,
            impressionProperties: f
        } = e, h = r.useRef(null);
        r.useEffect(() => {
            var e, t;
            let i = (0, s.findDOMNode)(h.current);
            if (null == i) return;
            let r = e => {
                let t = e.target,
                    i = (0, s.findDOMNode)(h.current);
                !(null != i && (0, l.referencePortalAwareContains)(i, t)) && (window.getSelection().removeAllRanges(), n())
            };
            return null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
                var e, t;
                null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
            }
        }, [n]);
        let A = r.useRef(o);
        r.useEffect(() => void(A.current = o)), r.useEffect(() => () => {
            var e;
            return null === (e = A.current) || void 0 === e ? void 0 : e.call(A)
        }, []), r.useLayoutEffect(() => {
            var e;
            null === (e = h.current) || void 0 === e || e.updatePosition()
        }), (0, _.default)({
            type: a.ImpressionTypes.MENU,
            name: T,
            properties: f
        });
        let m = (0, d.useWindowDispatch)(),
            N = r.useCallback(() => {
                m.dispatch(S.ComponentActions.POPOUT_SHOW)
            }, [m]),
            p = r.useCallback(() => {
                m.dispatch(S.ComponentActions.POPOUT_HIDE)
            }, [m]);
        return (0, i.jsx)(I.AppReferencePositionLayer, {
            onMount: N,
            onUnmount: p,
            reference: () => u,
            position: null != c ? c : "right",
            align: null != E ? E : "top",
            autoInvert: !0,
            ref: h,
            nudgeAlignIntoViewport: !0,
            children: t
        })
    };
    class m extends r.PureComponent {
        componentDidMount() {
            let {
                renderLazy: e,
                renderWindow: t
            } = this.props;
            if (t.addEventListener("resize", this.closeResize, !0), T.ComponentDispatch.subscribe(S.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
                let t = setTimeout(() => {
                    this.setState({
                        render: () => (0, i.jsx)(l.MenuSpinner, {})
                    })
                }, 300);
                e().then(e => {
                    this.setState({
                        render: e
                    }), clearTimeout(t)
                })
            }
        }
        componentDidUpdate(e) {
            let {
                isOpen: t
            } = this.props;
            if (!t && e.isOpen) {
                var n, i;
                null === (i = e.config) || void 0 === i || null === (n = i.onClose) || void 0 === n || n.call(i)
            }
        }
        componentWillUnmount() {
            let {
                renderWindow: e
            } = this.props;
            e.removeEventListener("resize", this.closeResize, !0), T.ComponentDispatch.unsubscribe(S.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
        }
        render() {
            var e;
            let {
                appContext: t,
                target: n,
                isOpen: r,
                theme: s,
                config: a,
                rect: o
            } = this.props, l = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
            return r && null != o && null != a && null != n && null != l && a.context === t ? (0, i.jsx)(A, {
                rect: o,
                close: this.close,
                onUnmount: a.onClose,
                align: a.align,
                position: a.position,
                impressionName: a.impressionName,
                impressionProperties: a.impressionProperties,
                children: (e, i) => {
                    let {
                        position: r
                    } = e;
                    return l({
                        className: f.ContextMenuClassName,
                        position: r,
                        theme: s,
                        onHeightUpdate: i,
                        config: a,
                        target: n,
                        context: t
                    })
                }
            }) : null
        }
        constructor(...e) {
            super(...e), h(this, "state", {
                render: void 0
            }), h(this, "closeResize", e => {
                let {
                    renderWindow: t
                } = this.props;
                e.target === t && this.close()
            }), h(this, "close", () => {
                let {
                    isOpen: e,
                    closeContextMenu: t
                } = this.props;
                e && t()
            })
        }
    }

    function N() {
        let {
            contextMenu: e,
            version: t,
            isOpen: n
        } = (0, o.useStateFromStoresObject)([E.default], () => ({
            contextMenu: E.default.getContextMenu(),
            version: E.default.version,
            isOpen: E.default.isOpen()
        })), s = (0, o.useStateFromStores)([c.default], () => c.default.theme), {
            appContext: a,
            renderWindow: l
        } = r.useContext(d.default);
        return (0, i.jsx)(m, {
            appContext: a,
            renderWindow: l,
            ...e,
            isOpen: n,
            theme: s,
            closeContextMenu: u.closeContextMenu
        }, t)
    }
}