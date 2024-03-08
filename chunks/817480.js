function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("118810"),
        s = n("77078"),
        r = n("244201"),
        o = n("952368"),
        u = n("924444"),
        d = n("103603"),
        c = n("866190"),
        f = n("782340"),
        p = n("542624");
    let m = "Zoomed Lazy Image Modal";
    class h extends l.PureComponent {
        render() {
            let {
                appContext: e,
                isWindowFocused: t,
                ...n
            } = this.props;
            return (0, i.jsx)(o.default, {
                ...n,
                onZoom: this.onZoom,
                onMouseEnter: this.onMouseEnter,
                shouldAnimate: t
            })
        }
        constructor(...e) {
            super(...e), this.onMouseEnter = (e, t) => {
                let {
                    preloadImage: n
                } = t, {
                    width: i,
                    height: l
                } = this.props;
                n((0, d.zoomFit)(i, l))
            }, this.modalContext = (0, s.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
                (0, s.closeModal)(m, this.modalContext)
            }, this.onZoom = (e, t) => {
                let {
                    zoomThumbnailPlaceholder: n,
                    trigger: l
                } = t;
                e.preventDefault();
                let {
                    alt: r,
                    src: o,
                    original: d,
                    width: c,
                    height: h,
                    animated: x,
                    children: E,
                    renderLinkComponent: y,
                    isWindowFocused: g,
                    shouldHideMediaOptions: S = !1
                } = this.props, C = {
                    alt: r,
                    src: o,
                    original: null != d ? d : o,
                    width: c,
                    height: h,
                    animated: x,
                    children: E,
                    zoomThumbnailPlaceholder: n,
                    renderLinkComponent: y,
                    onContextMenu: S ? e => {
                        e.stopPropagation(), e.preventDefault()
                    } : void 0,
                    trigger: l
                };
                (0, a.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, s.openModal)(e => (0, i.jsx)(s.ModalRoot, {
                    className: p.modal,
                    ...e,
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": f.default.Messages.IMAGE,
                    children: (0, i.jsx)(u.ImageModal, {
                        ...C,
                        className: p.image,
                        shouldAnimate: g,
                        onClose: this.onCloseImage,
                        shouldHideMediaOptions: S
                    })
                }), {
                    modalKey: m
                }, this.modalContext)
            }
        }
    }

    function x(e) {
        let t = (0, r.useAppContext)(),
            n = (0, c.useIsWindowFocused)();
        return (0, i.jsx)(h, {
            ...e,
            isWindowFocused: n,
            appContext: t
        })
    }
    h.defaultProps = {
        shouldLink: !0,
        autoPlay: !1,
        animated: !1
    }
}