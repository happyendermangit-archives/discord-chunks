function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Table: function() {
            return I
        },
        TableBody: function() {
            return c
        },
        TableCell: function() {
            return u
        },
        TableColumn: function() {
            return d
        },
        TableHeader: function() {
            return E
        },
        TableRow: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("408210"),
        a = n("260034"),
        o = n("993365"),
        l = n("524290");

    function u(e) {
        return (0, i.jsx)(s.Cell, {
            ...e,
            className: l.cell
        })
    }

    function d(e) {
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

    function _(e) {
        return (0, i.jsx)(s.Row, {
            ...e,
            className: l.row
        })
    }

    function c(e) {
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

    function I(e) {
        let {
            title: t,
            header: n,
            footer: o,
            ...u
        } = e, d = r.useId();
        return (0, i.jsxs)("div", {
            className: l.container,
            children: [(0, i.jsxs)("div", {
                className: l.toolbar,
                children: [(0, i.jsx)(a.Heading, {
                    className: l.__invalid_title,
                    variant: "heading-md/semibold",
                    id: d,
                    children: t
                }), (0, i.jsx)("div", {
                    children: n
                })]
            }), (0, i.jsx)(s.Table, {
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