function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getDomElement: function() {
            return c
        },
        getLocationHref: function() {
            return o
        },
        htmlTreeAsString: function() {
            return s
        }
    }), n("424973");
    var r = n("825167"),
        i = n("232945");
    let a = (0, i.getGlobalObject)();

    function s(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        try {
            let n, i = t,
                a = [],
                s = 0,
                o = 0,
                c = 3,
                l = Array.isArray(e) ? e : e.keyAttrs,
                u = !Array.isArray(e) && e.maxStringLength || 80;
            for (; i && s++ < 5 && (n = function(t, e) {
                    let n, i, a, s, o;
                    let c = [];
                    if (!t || !t.tagName) return "";
                    c.push(t.tagName.toLowerCase());
                    let l = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                    if (l && l.length) l.forEach(t => {
                        c.push("[".concat(t[0], '="').concat(t[1], '"]'))
                    });
                    else if (t.id && c.push("#".concat(t.id)), (n = t.className) && (0, r.isString)(n))
                        for (o = 0, i = n.split(/\s+/); o < i.length; o++) c.push(".".concat(i[o]));
                    let u = ["aria-label", "type", "name", "title", "alt"];
                    for (o = 0; o < u.length; o++) a = u[o], (s = t.getAttribute(a)) && c.push("[".concat(a, '="').concat(s, '"]'));
                    return c.join("")
                }(i, l), "html" !== n && (!(s > 1) || !(o + a.length * c + n.length >= u)));) {
                ;
                a.push(n), o += n.length, i = i.parentNode
            }
            return a.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }

    function o() {
        try {
            return a.document.location.href
        } catch (t) {
            return ""
        }
    }

    function c(t) {
        return a.document && a.document.querySelector ? a.document.querySelector(t) : null
    }
}