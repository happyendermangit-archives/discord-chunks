function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("609879"),
        l = n("393158"),
        i = n("941504"),
        u = n("140715");
    t.default = function(e) {
        var t, n, c = e.node,
            s = c.header,
            d = c.subheader,
            f = c.button,
            m = (null == f ? void 0 : f.type) === "submit";
        var p = r.useRef(o.default.reactParserFor((t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, a, o;
                    r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[a] = o
                })
            }
            return e
        }({}, o.default.defaultRules), n = (n = {
            link: l.LinkMarkupRule
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)));
        return r.createElement("div", {
            className: u.headerContainer
        }, null != s && "" !== s ? r.createElement(a.Heading, {
            variant: "heading-xl/semibold",
            color: "header-primary"
        }, s) : null, null != d && "" !== s ? r.createElement(a.Text, {
            variant: "text-md/normal",
            color: "header-secondary"
        }, p.current(d)) : null, m && r.createElement(a.Text, {
            variant: "text-sm/normal"
        }, i.default.Messages.MOBILE_REPORTS_SUBMIT_INFO_TEXT.format()))
    }
}