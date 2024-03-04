function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TableCell: function() {
            return u
        },
        TableColumn: function() {
            return d
        },
        TableRow: function() {
            return c
        },
        TableBody: function() {
            return f
        },
        TableHeader: function() {
            return _
        },
        Table: function() {
            return h
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("999013"),
        a = n("605451"),
        o = n("577776"),
        l = n("474496");

    function u(e) {
        return (0, i.jsx)(r.Cell, {
            ...e,
            className: l.cell
        })
    }

    function d(e) {
        let {
            children: t,
            ...n
        } = e;
        return (0, i.jsx)(r.Column, {
            ...n,
            className: l.column,
            children: (0, i.jsx)(o.Text, {
                variant: "eyebrow",
                className: l.columnText,
                children: t
            })
        })
    }

    function c(e) {
        return (0, i.jsx)(r.Row, {
            ...e,
            className: l.row
        })
    }

    function f(e) {
        return (0, i.jsx)(r.TableBody, {
            ...e,
            className: l.body
        })
    }

    function _(e) {
        return (0, i.jsx)(r.TableHeader, {
            ...e,
            className: l.header
        })
    }

    function h(e) {
        let {
            title: t,
            header: n,
            footer: o,
            ...u
        } = e, d = s.useId();
        return (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsxs)("div", {
                className: l.toolbar,
                children: [(0, i.jsx)(a.Heading, {
                    className: l.title,
                    variant: "heading-md/semibold",
                    id: d,
                    children: t
                }), (0, i.jsx)("div", {
                    children: n
                })]
            }), (0, i.jsx)(r.Table, {
                ...u,
                "aria-labelledby": d,
                className: l.table
            }), null != o && (0, i.jsx)("div", {
                className: l.footer,
                children: o
            })]
        })
    }
}