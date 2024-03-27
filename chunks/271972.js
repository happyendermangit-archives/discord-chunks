function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentListItemSizes: function() {
            return l
        },
        default: function() {
            return g
        }
    });
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("974667"),
        d = n("77078"),
        c = n("81594"),
        f = n("149279"),
        m = n("659500"),
        p = n("645406"),
        h = n("49111"),
        x = n("782340"),
        E = n("831594");

    function y(e) {
        e.stopPropagation()
    }(i = l || (l = {}))[i.SMALL = 0] = "SMALL", i[i.MEDIUM = 1] = "MEDIUM", i[i.CLIP = 2] = "CLIP";
    var g = s.forwardRef(function(e, t) {
        let {
            id: n,
            channelId: i,
            className: l,
            children: s,
            actions: r,
            handleEditModal: g,
            keyboardModeEnabled: S,
            onKeyDown: C,
            draftType: T,
            size: _ = 1
        } = e, {
            onFocus: I,
            ...v
        } = (0, u.useListItem)(n), {
            handleFocus: A,
            handleBlur: N
        } = (0, p.useFocusInside)(I), R = 0 === _, O = null != r;
        return (0, a.jsx)(d.FocusRing, {
            children: (0, a.jsx)("li", {
                ...v,
                onFocus: A,
                onBlur: N,
                onKeyDown: e => {
                    if (S) {
                        switch (e.which) {
                            case h.KeyboardKeys.D:
                                e.preventDefault(), c.default.remove(i, n, T);
                                return;
                            case h.KeyboardKeys.E:
                                null != g && (e.preventDefault(), g(e));
                                return;
                            case h.KeyboardKeys.BACKSPACE:
                                e.ctrlKey ? (e.preventDefault(), c.default.clearAll(i, T)) : (e.preventDefault(), c.default.remove(i, n, T));
                                return;
                            case h.KeyboardKeys.ARROW_UP:
                                let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
                                if (t) return;
                                e.preventDefault(), m.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.FOCUS_MESSAGES, {
                                    atEnd: !0
                                })
                        }
                        null == C || C(e)
                    }
                },
                className: o(E.upload, l, {
                    [E.sizeClip]: 2 === _
                }),
                ref: t,
                children: (0, a.jsxs)("div", {
                    className: E.uploadContainer,
                    children: [s, O ? (0, a.jsx)("div", {
                        className: E.actionBarContainer,
                        children: (0, a.jsx)("div", {
                            className: o(E.actionBar, {
                                [E.smallActionBar]: R
                            }),
                            onContextMenu: y,
                            "aria-label": x.default.Messages.ATTACHMENT_UTILITIES,
                            children: (0, a.jsx)(f.default, {
                                className: o({
                                    [E.miniPopover]: R
                                }),
                                children: r
                            })
                        })
                    }) : null]
                })
            })
        })
    })
}