function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentListItemSizes: function() {
            return r
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
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
        S = n("196826");

    function A(e) {
        e.stopPropagation()
    }(i = r || (r = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.CLIP = 2] = "CLIP";
    t.default = a.forwardRef(function(e, t) {
        let {
            id: n,
            channelId: i,
            className: r,
            children: a,
            actions: o,
            handleEditModal: h,
            keyboardModeEnabled: m,
            onKeyDown: N,
            draftType: O,
            size: p = 1
        } = e, {
            onFocus: R,
            ...C
        } = (0, u.useListItem)(n), {
            handleFocus: g,
            handleBlur: L
        } = (0, I.useFocusInside)(R), D = 0 === p, v = null != o;
        return (0, s.jsx)(d.FocusRing, {
            children: (0, s.jsx)("li", {
                ...C,
                onFocus: g,
                onBlur: L,
                onKeyDown: e => {
                    if (m) {
                        switch (e.which) {
                            case T.KeyboardKeys.D:
                                e.preventDefault(), _.default.remove(i, n, O);
                                return;
                            case T.KeyboardKeys.E:
                                null != h && (e.preventDefault(), h(e));
                                return;
                            case T.KeyboardKeys.BACKSPACE:
                                e.ctrlKey ? (e.preventDefault(), _.default.clearAll(i, O)) : (e.preventDefault(), _.default.remove(i, n, O));
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
                    [S.sizeClip]: 2 === p
                }),
                ref: t,
                children: (0, s.jsxs)("div", {
                    className: S.uploadContainer,
                    children: [a, v ? (0, s.jsx)("div", {
                        className: S.actionBarContainer,
                        children: (0, s.jsx)("div", {
                            className: l()(S.actionBar, {
                                [S.smallActionBar]: D
                            }),
                            onContextMenu: A,
                            "aria-label": f.default.Messages.ATTACHMENT_UTILITIES,
                            children: (0, s.jsx)(c.default, {
                                className: l()({
                                    [S.miniPopover]: D
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