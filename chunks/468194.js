function(l, o, r) {
    "use strict";
    r.r(o), r.d(o, {
        cssValueToNumber: function() {
            return O
        },
        getAcronym: function() {
            return u
        },
        normalize: function() {
            return a
        },
        stripDiacritics: function() {
            return c
        },
        truncateText: function() {
            return e
        },
        upperCaseFirstChar: function() {
            return i
        }
    }), r("47120"), r("757143");
    let n = /[\u0300-\u036f]/g,
        t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    function i(l) {
        return null == l ? "" : "".concat(l.charAt(0).toUpperCase()).concat(l.slice(1))
    }
    let e = function(l, o) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
        if (null == l || null == o) return "";
        if (l.length > o) {
            let n = t.test(l) ? [...l].slice(0, o - r.length).join("") : l.substring(0, o - r.length);
            return "".concat(n.replace(/[\s.]+$/, "")).concat(r)
        }
        return l
    };

    function u(l) {
        return null != l ? l.replace(/'s /g, " ").replace(/\w+/g, l => l[0]).replace(/\s/g, "") : ""
    }

    function O(l) {
        let o = parseInt(l, 10);
        return isNaN(o) ? 0 : o
    }
    let c = null == String.prototype.normalize ? l => l : l => l.normalize("NFD").replace(n, "").normalize("NFC"),
        a = null == String.prototype.normalize ? l => l : function(l) {
            let o = r("510085"),
                n = "";
            return [...l.normalize("NFD")].forEach(l => {
                var r;
                n += null !== (r = o[l]) && void 0 !== r ? r : l
            }), n.normalize("NFD").toLocaleLowerCase()
        }
}