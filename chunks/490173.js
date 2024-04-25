function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
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
        f = n("981631");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let h = e => {
        let {
            children: t,
            close: n,
            onUnmount: o,
            target: u,
            rect: c,
            position: E,
            align: T,
            impressionName: S,
            impressionProperties: h
        } = e, A = r.useRef(null), m = r.useMemo(() => ({
            current: u
        }), [u]);
        r.useEffect(() => {
            var e, t;
            let i = (0, s.findDOMNode)(A.current);
            if (null == i) return;
            let r = e => {
                let t = e.target,
                    i = (0, s.findDOMNode)(A.current);
                !(null != i && (0, l.referencePortalAwareContains)(i, t)) && (window.getSelection().removeAllRanges(), n())
            };
            return null === (e = i.ownerDocument) || void 0 === e || e.addEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.addEventListener("contextmenu", r, !0), () => {
                var e, t;
                null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener("click", r, !0), null === (t = i.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", r, !0)
            }
        }, [n]);
        let N = r.useRef(o);
        r.useEffect(() => void(N.current = o)), r.useEffect(() => () => {
            var e;
            return null === (e = N.current) || void 0 === e ? void 0 : e.call(N)
        }, []), r.useLayoutEffect(() => {
            var e;
            null === (e = A.current) || void 0 === e || e.updatePosition()
        }), (0, _.default)({
            type: a.ImpressionTypes.MENU,
            name: S,
            properties: h
        });
        let p = (0, d.useWindowDispatch)(),
            O = r.useCallback(() => {
                p.dispatch(f.ComponentActions.POPOUT_SHOW)
            }, [p]),
            R = r.useCallback(() => {
                p.dispatch(f.ComponentActions.POPOUT_HIDE)
            }, [p]);
        return (0, i.jsx)(I.AppReferencePositionLayer, {
            onMount: O,
            onUnmount: R,
            targetRef: m,
            overrideTargetRect: c,
            position: null != E ? E : "right",
            align: null != T ? T : "top",
            autoInvert: !0,
            ref: A,
            nudgeAlignIntoViewport: !0,
            children: t
        })
    };
    class A extends r.PureComponent {
        componentDidMount() {
            let {
                renderLazy: e,
                renderWindow: t
            } = this.props;
            if (t.addEventListener("resize", this.closeResize, !0), T.ComponentDispatch.subscribe(f.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
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
            e.removeEventListener("resize", this.closeResize, !0), T.ComponentDispatch.unsubscribe(f.ComponentActions.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
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
            return r && null != o && null != a && null != n && null != l && a.context === t ? (0, i.jsx)(h, {
                target: n,
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
            super(...e), S(this, "state", {
                render: void 0
            }), S(this, "closeResize", e => {
                let {
                    renderWindow: t
                } = this.props;
                e.target === t && this.close()
            }), S(this, "close", () => {
                let {
                    isOpen: e,
                    closeContextMenu: t
                } = this.props;
                e && t()
            })
        }
    }

    function m() {
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
        return (0, i.jsx)(A, {
            appContext: a,
            renderWindow: l,
            ...e,
            isOpen: n,
            theme: s,
            closeContextMenu: u.closeContextMenu
        }, t)
    }
}