function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Paginator: function() {
            return m
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("271841"),
        l = n("227645"),
        u = n("605451"),
        d = n("240353"),
        c = n("980428"),
        _ = n("772280"),
        f = n("21872"),
        E = n("782340"),
        h = n("546933");

    function g(e) {
        let {
            page: t,
            totalPageCount: n,
            disabled: r,
            onPageChange: o
        } = e, [c, _] = s.useState(!1), [f, E] = s.useState(null), g = null != f && f >= 1 && f <= n;
        return r ? (0, i.jsx)(u.Heading, {
            className: h.gap,
            "aria-hidden": !0,
            variant: "heading-sm/semibold",
            children: "…"
        }, t.key) : c ? (0, i.jsx)(d.TextInput, {
            autoFocus: !0,
            className: h.jumpToPageInlineInput,
            size: d.TextInput.Sizes.MINI,
            value: null == f ? "" : "".concat(f),
            onChange: e => {
                let t = parseInt(e);
                if ("" === e || isNaN(t)) {
                    E(null);
                    return
                }
                E(t)
            },
            onBlur: () => {
                _(!1), E(null)
            },
            onKeyPress: e => {
                "Enter" === e.key && null != f && g && (o(f), _(!1), E(null))
            },
            disabled: r
        }, t.key) : (0, i.jsx)(l.Clickable, {
            onClick: () => _(!0),
            children: (0, i.jsx)(u.Heading, {
                className: a(h.roundButton, h.gap),
                "aria-hidden": !0,
                variant: "heading-sm/semibold",
                children: "…"
            })
        }, t.key)
    }

    function m(e) {
        let {
            currentPage: t,
            totalCount: n,
            pageSize: s,
            maxVisiblePages: r,
            disablePaginationGap: u,
            onPageChange: d,
            hideMaxPage: m = !1,
            className: p
        } = e, S = Math.ceil(n / s);
        return (0, i.jsx)(f.PaginationController, {
            totalPageCount: S,
            selectedPage: t,
            maxVisiblePages: r,
            hideMaxPage: m,
            onPageChange: function(e) {
                null != d && d(e)
            },
            children: function(e) {
                let {
                    pages: t,
                    hasMultiplePages: n
                } = e;
                return n ? (0, i.jsx)("div", {
                    className: a(h.pageControlContainer, p),
                    children: (0, i.jsx)("nav", {
                        className: h.pageControl,
                        children: t.map(e => {
                            var t, n;
                            switch (e.type) {
                                case f.PaginationTypes.BACK:
                                    return function(e) {
                                        let {
                                            key: t,
                                            disabled: n,
                                            navigateToPage: s
                                        } = e;
                                        return (0, i.jsxs)(o.Button, {
                                            className: h.endButton,
                                            innerClassName: h.endButtonInner,
                                            look: o.Button.Looks.BLANK,
                                            color: o.Button.Colors.TRANSPARENT,
                                            onClick: s,
                                            disabled: n,
                                            rel: "prev",
                                            children: [(0, i.jsx)(c.default, {
                                                className: h.iconCaret,
                                                "aria-hidden": !0
                                            }), (0, i.jsx)("span", {
                                                children: E.default.Messages.BACK
                                            })]
                                        }, t)
                                    }(e);
                                case f.PaginationTypes.PAGE:
                                    ;
                                    return t = e, (0, i.jsx)(l.Clickable, {
                                        className: a(h.roundButton, {
                                            [h.activeButton]: t.selected
                                        }),
                                        onClick: t.selected ? void 0 : t.navigateToPage,
                                        "aria-label": E.default.Messages.PAGINATION_PAGE_LABEL.format({
                                            pageNumber: t.targetPage
                                        }),
                                        "aria-current": t.selected ? "page" : void 0,
                                        children: (0, i.jsx)("span", {
                                            children: t.targetPage
                                        })
                                    }, t.key);
                                case f.PaginationTypes.GAP:
                                    ;
                                    return n = e, (0, i.jsx)(g, {
                                        page: n,
                                        totalPageCount: S,
                                        disabled: !!u,
                                        onPageChange: d
                                    }, n.key);
                                case f.PaginationTypes.NEXT:
                                    return function(e) {
                                        let {
                                            key: t,
                                            disabled: n,
                                            navigateToPage: s
                                        } = e;
                                        return (0, i.jsxs)(o.Button, {
                                            className: h.endButton,
                                            innerClassName: h.endButtonInner,
                                            look: o.Button.Looks.BLANK,
                                            color: o.Button.Colors.TRANSPARENT,
                                            onClick: s,
                                            disabled: n,
                                            rel: "next",
                                            children: [(0, i.jsx)("span", {
                                                children: E.default.Messages.NEXT
                                            }), (0, i.jsx)(_.default, {
                                                className: h.iconCaret,
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