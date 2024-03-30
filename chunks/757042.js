function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("989600"),
        l = n("727075"),
        u = n("793030"),
        d = n("524437"),
        _ = n("692547"),
        c = n("481060"),
        E = n("230711"),
        I = n("605236"),
        T = n("246208"),
        f = n("266983"),
        S = n("635869"),
        h = n("232700"),
        A = n("981631"),
        m = n("921944"),
        N = n("689938"),
        O = n("127906");
    let p = "https://www.youtube.com/embed/".concat(h.LOOTBOX_VIDEO_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(h.LOOTBOX_VIDEO_ID, "&origin=https://").concat(A.PRIMARY_DOMAIN);

    function R() {
        let [e, t] = r.useState(!1), {
            showMainEntrypoints: n
        } = T.default.useExperiment({
            location: "lootbox_entrypoint"
        }), s = !(0, I.useIsDismissibleContentDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT), h = e => {
            (0, I.markDismissibleContentAsDismissed)(d.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
                dismissAction: e
            })
        };
        return n && s ? (0, i.jsxs)("div", {
            className: a()(O.wrapper, e ? O.wrapperHovered : null),
            onMouseLeave: () => t(!1),
            children: [(0, i.jsxs)(c.Clickable, {
                className: O.closeButton,
                onClick: () => h(m.ContentDismissActionType.DISMISS),
                children: [(0, i.jsx)(l.CloseSmallIcon, {
                    className: O.closeIcon,
                    color: _.default.colors.WHITE
                }), (0, i.jsx)(u.Text, {
                    variant: "text-xs/bold",
                    color: "always-white",
                    children: N.default.Messages.PACKAGES_ENTRYPOINT_CLOSE
                })]
            }), (0, i.jsxs)("div", {
                className: O.videoWrapper,
                children: [(0, i.jsx)("iframe", {
                    className: O.video,
                    src: p,
                    sandbox: "allow-same-origin allow-scripts allow-popups"
                }), (0, i.jsxs)(c.Clickable, {
                    className: O.entrypoint,
                    onClick: () => {
                        h(m.ContentDismissActionType.PRIMARY), E.default.open(A.UserSettingsSections.LOOTBOXES)
                    },
                    onMouseEnter: () => t(!0),
                    children: [(0, i.jsx)("div", {
                        className: O.backgroundWrapper,
                        children: (0, i.jsx)(S.default, {
                            className: O.backgroundImage,
                            pageMultiplier: 5
                        })
                    }), (0, i.jsx)(f.default, {
                        className: O.image,
                        color: _.default.colors.POLLS_NORMAL_FILL_HOVER,
                        width: 70,
                        height: 70
                    }), (0, i.jsxs)("div", {
                        className: O.body,
                        children: [(0, i.jsx)(u.Text, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: N.default.Messages.PACKAGES_ENTRYPOINT_TITLE
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: N.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION
                        })]
                    }), (0, i.jsx)("div", {
                        className: O.buttonWrapper,
                        children: (0, i.jsx)("div", {
                            className: O.iconButton,
                            children: (0, i.jsx)(o.ArrowLargeRightIcon, {
                                className: O.buttonIcon,
                                color: _.default.colors.WHITE
                            })
                        })
                    })]
                })]
            })]
        }) : null
    }
}