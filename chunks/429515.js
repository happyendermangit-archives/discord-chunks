function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormSection: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("433952"),
        i = n("512341"),
        a = n("924900"),
        u = n("441422");

    function s(e) {
        var t, n = e.children,
            s = e.className,
            l = e.titleClassName,
            c = e.title,
            f = e.icon,
            d = e.disabled,
            _ = e.htmlFor,
            E = e.tag,
            p = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["children", "className", "titleClassName", "title", "icon", "disabled", "htmlFor", "tag"]),
            m = r.useId(),
            y = null !== (t = p.titleId) && void 0 !== t ? t : m;
        return null != c ? r.createElement("div", {
            className: s
        }, r.createElement(o.HeadingLevel, {
            component: r.createElement("div", {
                className: u.sectionTitle
            }, f, null != c ? r.createElement(a.FormTitle, {
                tag: void 0 === E ? "h5" : E,
                id: y,
                htmlFor: _,
                disabled: d,
                className: l
            }, c) : null)
        }, r.createElement("div", {
            className: u.children
        }, r.createElement(i.FormContextProvider, {
            titleId: y
        }, n)))) : r.createElement("div", {
            className: s
        }, n)
    }
}