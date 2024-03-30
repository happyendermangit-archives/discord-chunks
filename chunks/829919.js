function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getDomElement: function() {
            return s
        },
        getLocationHref: function() {
            return o
        },
        htmlTreeAsString: function() {
            return a
        }
    });
    var r = n("46834");
    let i = (0, n("24716").getGlobalObject)();

    function a(t, e = {}) {
        try {
            let n, i = t,
                a = [],
                o = 0,
                s = 0,
                u = 3,
                l = Array.isArray(e) ? e : e.keyAttrs,
                c = !Array.isArray(e) && e.maxStringLength || 80;
            for (; i && o++ < 5 && (n = function(t, e) {
                    let n, i, a, o, s;
                    let u = [];
                    if (!t || !t.tagName) return "";
                    u.push(t.tagName.toLowerCase());
                    let l = e && e.length ? e.filter(e => t.getAttribute(e)).map(e => [e, t.getAttribute(e)]) : null;
                    if (l && l.length) l.forEach(t => {
                        u.push(`[${t[0]}="${t[1]}"]`)
                    });
                    else if (t.id && u.push(`#${t.id}`), (n = t.className) && (0, r.isString)(n))
                        for (s = 0, i = n.split(/\s+/); s < i.length; s++) u.push(`.${i[s]}`);
                    let c = ["aria-label", "type", "name", "title", "alt"];
                    for (s = 0; s < c.length; s++) a = c[s], (o = t.getAttribute(a)) && u.push(`[${a}="${o}"]`);
                    return u.join("")
                }(i, l), "html" !== n && (!(o > 1) || !(s + a.length * u + n.length >= c)));) {
                ;
                a.push(n), s += n.length, i = i.parentNode
            }
            return a.reverse().join(" > ")
        } catch (t) {
            return "<unknown>"
        }
    }

    function o() {
        try {
            return i.document.location.href
        } catch (t) {
            return ""
        }
    }

    function s(t) {
        return i.document && i.document.querySelector ? i.document.querySelector(t) : null
    }
}