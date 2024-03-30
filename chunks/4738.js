function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Paginator: function() {
            return S
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("693789"),
        l = n("1561"),
        u = n("260034"),
        d = n("463208"),
        _ = n("292937"),
        c = n("692437"),
        E = n("889963"),
        I = n("689938"),
        T = n("91662");

    function f(e) {
        let {
            page: t,
            totalPageCount: n,
            disabled: s,
            onPageChange: o
        } = e, [_, c] = r.useState(!1), [E, I] = r.useState(null), f = null != E && E >= 1 && E <= n;
        return s ? (0, i.jsx)(u.Heading, {
            className: T.gap,
            "aria-hidden": !0,
            variant: "heading-sm/semibold",
            children: "…"
        }, t.key) : _ ? (0, i.jsx)(d.TextInput, {
            autoFocus: !0,
            className: T.jumpToPageInlineInput,
            size: d.TextInput.Sizes.MINI,
            value: null == E ? "" : "".concat(E),
            onChange: e => {
                let t = parseInt(e);
                if ("" === e || isNaN(t)) {
                    I(null);
                    return
                }
                I(t)
            },
            onBlur: () => {
                c(!1), I(null)
            },
            onKeyPress: e => {
                "Enter" === e.key && null != E && f && (o(E), c(!1), I(null))
            },
            disabled: s
        }, t.key) : (0, i.jsx)(l.Clickable, {
            onClick: () => c(!0),
            children: (0, i.jsx)(u.Heading, {
                className: a()(T.roundButton, T.gap),
                "aria-hidden": !0,
                variant: "heading-sm/semibold",
                children: "…"
            })
        }, t.key)
    }

    function S(e) {
        let {
            currentPage: t,
            totalCount: n,
            pageSize: r,
            maxVisiblePages: s,
            disablePaginationGap: u,
            onPageChange: d,
            hideMaxPage: S = !1,
            className: h
        } = e, A = Math.ceil(n / r);
        return (0, i.jsx)(E.PaginationController, {
            totalPageCount: A,
            selectedPage: t,
            maxVisiblePages: s,
            hideMaxPage: S,
            onPageChange: function(e) {
                null != d && d(e)
            },
            children: function(e) {
                let {
                    pages: t,
                    hasMultiplePages: n
                } = e;
                return n ? (0, i.jsx)("div", {
                    className: a()(T.pageControlContainer, h),
                    children: (0, i.jsx)("nav", {
                        className: T.pageControl,
                        children: t.map(e => {
                            var t, n;
                            switch (e.type) {
                                case E.PaginationTypes.BACK:
                                    return function(e) {
                                        let {
                                            key: t,
                                            disabled: n,
                                            navigateToPage: r
                                        } = e;
                                        return (0, i.jsxs)(o.Button, {
                                            className: T.endButton,
                                            innerClassName: T.endButtonInner,
                                            look: o.Button.Looks.BLANK,
                                            color: o.Button.Colors.TRANSPARENT,
                                            onClick: r,
                                            disabled: n,
                                            rel: "prev",
                                            children: [(0, i.jsx)(_.default, {
                                                className: T.iconCaret,
                                                "aria-hidden": !0
                                            }), (0, i.jsx)("span", {
                                                children: I.default.Messages.BACK
                                            })]
                                        }, t)
                                    }(e);
                                case E.PaginationTypes.PAGE:
                                    ;
                                    return t = e, (0, i.jsx)(l.Clickable, {
                                        className: a()(T.roundButton, {
                                            [T.activeButton]: t.selected
                                        }),
                                        onClick: t.selected ? void 0 : t.navigateToPage,
                                        "aria-label": I.default.Messages.PAGINATION_PAGE_LABEL.format({
                                            pageNumber: t.targetPage
                                        }),
                                        "aria-current": t.selected ? "page" : void 0,
                                        children: (0, i.jsx)("span", {
                                            children: t.targetPage
                                        })
                                    }, t.key);
                                case E.PaginationTypes.GAP:
                                    ;
                                    return n = e, (0, i.jsx)(f, {
                                        page: n,
                                        totalPageCount: A,
                                        disabled: !!u,
                                        onPageChange: d
                                    }, n.key);
                                case E.PaginationTypes.NEXT:
                                    return function(e) {
                                        let {
                                            key: t,
                                            disabled: n,
                                            navigateToPage: r
                                        } = e;
                                        return (0, i.jsxs)(o.Button, {
                                            className: T.endButton,
                                            innerClassName: T.endButtonInner,
                                            look: o.Button.Looks.BLANK,
                                            color: o.Button.Colors.TRANSPARENT,
                                            onClick: r,
                                            disabled: n,
                                            rel: "next",
                                            children: [(0, i.jsx)("span", {
                                                children: I.default.Messages.NEXT
                                            }), (0, i.jsx)(c.default, {
                                                className: T.iconCaret,
                                                "aria-hidden": !0
                                            })]
                                        }, t)
                                    }(e);
                                default:
                                    return null
                            }
                        })
                    })
                }) : null
            }
        })
    }
}