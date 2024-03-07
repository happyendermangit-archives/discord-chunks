function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("118810"),
        s = n("77078"),
        r = n("244201"),
        o = n("952368"),
        u = n("924444"),
        d = n("103603"),
        c = n("866190"),
        f = n("782340"),
        m = n("542624");
    let p = "Zoomed Lazy Image Modal";
    class h extends i.PureComponent {
        render() {
            let {
                appContext: e,
                isWindowFocused: t,
                ...n
            } = this.props;
            return (0, l.jsx)(o.default, {
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
                    width: l,
                    height: i
                } = this.props;
                n((0, d.zoomFit)(l, i))
            }, this.modalContext = (0, s.modalContextFromAppContext)(this.props.appContext), this.onCloseImage = () => {
                (0, s.closeModal)(p, this.modalContext)
            }, this.onZoom = (e, t) => {
                let {
                    zoomThumbnailPlaceholder: n,
                    trigger: i
                } = t;
                e.preventDefault();
                let {
                    alt: r,
                    src: o,
                    original: d,
                    width: c,
                    height: h,
                    animated: E,
                    children: g,
                    renderLinkComponent: S,
                    isWindowFocused: C,
                    shouldHideMediaOptions: T = !1
                } = this.props, v = {
                    alt: r,
                    src: o,
                    original: null != d ? d : o,
                    width: c,
                    height: h,
                    animated: E,
                    children: g,
                    zoomThumbnailPlaceholder: n,
                    renderLinkComponent: S,
                    onContextMenu: T ? e => {
                        e.stopPropagation(), e.preventDefault()
                    } : void 0,
                    trigger: i
                };
                (0, a.isElement)(e.currentTarget) && e.currentTarget.blur(), (0, s.openModal)(e => (0, l.jsx)(s.ModalRoot, {
                    className: m.modal,
                    ...e,
                    size: s.ModalSize.DYNAMIC,
                    "aria-label": f.default.Messages.IMAGE,
                    children: (0, l.jsx)(u.ImageModal, {
                        ...v,
                        className: m.image,
                        shouldAnimate: C,
                        onClose: this.onCloseImage,
                        shouldHideMediaOptions: T
                    })
                }), {
                    modalKey: p
                }, this.modalContext)
            }
        }
    }

    function E(e) {
        let t = (0, r.useAppContext)(),
            n = (0, c.useIsWindowFocused)();
        return (0, l.jsx)(h, {
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