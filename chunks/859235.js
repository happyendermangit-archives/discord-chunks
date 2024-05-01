function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentListItemSizes: function() {
            return r
        }
    });
    var i, r, a = n("735250"),
        s = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("924826"),
        d = n("481060"),
        _ = n("166459"),
        c = n("404975"),
        E = n("585483"),
        I = n("43085"),
        T = n("981631"),
        f = n("689938"),
        S = n("200624");

    function h(e) {
        e.stopPropagation()
    }(i = r || (r = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.CLIP = 2] = "CLIP";
    t.default = s.forwardRef(function(e, t) {
        let {
            id: n,
            channelId: i,
            className: r,
            children: s,
            actions: o,
            handleEditModal: A,
            keyboardModeEnabled: m,
            onKeyDown: N,
            draftType: p,
            size: O = 1
        } = e, {
            onFocus: R,
            ...C
        } = (0, u.useListItem)(n), {
            handleFocus: g,
            handleBlur: L
        } = (0, I.useFocusInside)(R), v = 0 === O, D = null != o;
        return (0, a.jsx)(d.FocusRing, {
            children: (0, a.jsx)("li", {
                ...C,
                onFocus: g,
                onBlur: L,
                onKeyDown: e => {
                    if (m) {
                        switch (e.which) {
                            case T.KeyboardKeys.D:
                                e.preventDefault(), _.default.remove(i, n, p);
                                return;
                            case T.KeyboardKeys.E:
                                null != A && (e.preventDefault(), A(e));
                                return;
                            case T.KeyboardKeys.BACKSPACE:
                                e.ctrlKey ? (e.preventDefault(), _.default.clearAll(i, p)) : (e.preventDefault(), _.default.remove(i, n, p));
                                return;
                            case T.KeyboardKeys.ARROW_UP:
                                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                                e.preventDefault(), E.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.FOCUS_MESSAGES, {
                                    atEnd: !0
                                })
                        }
                        null == N || N(e)
                    }
                },
                className: l()(S.upload, r, {
                    [S.sizeClip]: 2 === O
                }),
                ref: t,
                children: (0, a.jsxs)("div", {
                    className: S.uploadContainer,
                    children: [s, D ? (0, a.jsx)("div", {
                        className: S.actionBarContainer,
                        children: (0, a.jsx)("div", {
                            className: l()(S.actionBar, {
                                [S.smallActionBar]: v
                            }),
                            onContextMenu: h,
                            "aria-label": f.default.Messages.ATTACHMENT_UTILITIES,
                            children: (0, a.jsx)(c.default, {
                                className: l()({
                                    [S.miniPopover]: v
                                }),
                                children: o
                            })
                        })
                    }) : null]
                })
            })
        })
    })
}