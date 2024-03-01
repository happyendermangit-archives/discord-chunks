function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TableCell: function() {
            return u
        },
        TableColumn: function() {
            return c
        },
        TableRow: function() {
            return d
        },
        TableBody: function() {
            return f
        },
        TableHeader: function() {
            return E
        },
        Table: function() {
            return p
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("999013"),
        a = n("605451"),
        o = n("577776"),
        l = n("474496");

    function u(e) {
        return (0, i.jsx)(s.Cell, {
            ...e,
            className: l.cell
        })
    }

    function c(e) {
        let {
            children: t,
            ...n
        } = e;
        return (0, i.jsx)(s.Column, {
            ...n,
            className: l.column,
            children: (0, i.jsx)(o.Text, {
                variant: "eyebrow",
                className: l.columnText,
                children: t
            })
        })
    }

    function d(e) {
        return (0, i.jsx)(s.Row, {
            ...e,
            className: l.row
        })
    }

    function f(e) {
        return (0, i.jsx)(s.TableBody, {
            ...e,
            className: l.body
        })
    }

    function E(e) {
        return (0, i.jsx)(s.TableHeader, {
            ...e,
            className: l.header
        })
    }

    function p(e) {
        let {
            title: t,
            header: n,
            footer: o,
            ...u
        } = e, c = r.useId();
        return (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsxs)("div", {
                className: l.toolbar,
                children: [(0, i.jsx)(a.Heading, {
                    className: l.title,
                    variant: "heading-md/semibold",
                    id: c,
                    children: t
                }), (0, i.jsx)("div", {
                    children: n
                })]
            }), (0, i.jsx)(s.Table, {
                ...u,
                "aria-labelledby": c,
                className: l.table
            }), null != o && (0, i.jsx)("div", {
                className: l.footer,
                children: o
            })]
        })
    }
}