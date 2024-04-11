function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("47120");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("374470"),
        o = n("481060"),
        l = n("40851"),
        u = n("261922"),
        d = n("926836"),
        _ = n("956664"),
        c = n("506071"),
        E = n("689938"),
        I = n("988517");

    function T(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let f = "Zoomed Lazy Image Modal";
    class S extends(i = s.PureComponent) {
        render() {
            let {
                appContext: e,
                isWindowFocused: t,
                ...n
            } = this.props;
            return (0, r.jsx)(u.default, {
                ...n,
                onZoom: this.onZoom,
                onMouseEnter: this.onMouseEnter,
                shouldAnimate: t
            })
        }
        constructor(...e) {
            super(...e), T(this, "onMouseEnter", (e, t) => {
                let {
                    preloadImage: n
                } = t, {
                    width: i,
                    height: r
                } = this.props;
                n((0, _.zoomFit)(i, r))
            }), T(this, "modalContext", (0, o.modalContextFromAppContext)(this.props.appContext)), T(this, "onCloseImage", () => {
                (0, o.closeModal)(f, this.modalContext)
            }), T(this, "onZoom", (e, t) => {
                let {
                    zoomThumbnailPlaceholder: n,
                    trigger: i
                } = t;
                e.preventDefault();
                let {
                    alt: s,
                    src: l,
                    original: u,
                    width: _,
                    height: c,
                    animated: T,
                    children: S,
                    renderLinkComponent: A,
                    isWindowFocused: h,
                    shouldHideMediaOptions: m = !1
                } = this.props, N = {
                    alt: s,
                    src: l,
                    original: null != u ? u : l,
                    width: _,
                    height: c,
                    animated: T,
                    children: S,
                    zoomThumbnailPlaceholder: n,
                    renderLinkComponent: A,
                    onContextMenu: m ? e => {
                        e.stopPropagation(), e.preventDefault()
                    } : void 0,
                    trigger: i
                };
                (0, a.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, o.openModal)(e => (0, r.jsx)(o.ModalRoot, {
                    className: I.modal,
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    "aria-label": E.default.Messages.IMAGE,
                    children: (0, r.jsx)(d.ImageModal, {
                        ...N,
                        className: I.image,
                        shouldAnimate: h,
                        onClose: this.onCloseImage,
                        shouldHideMediaOptions: m
                    })
                }), {
                    modalKey: f
                }, this.modalContext)
            })
        }
    }

    function A(e) {
        let t = (0, l.useAppContext)(),
            n = (0, c.useIsWindowFocused)();
        return (0, r.jsx)(S, {
            ...e,
            isWindowFocused: n,
            appContext: t
        })
    }
    T(S, "defaultProps", {
        shouldLink: !0,
        autoPlay: !1,
        animated: !1
    })
}