function(l, o, r) {
    "use strict";

    function n(l, o) {
        (null == o || o > l.length) && (o = l.length);
        for (var r = 0, n = Array(o); r < o; r++) n[r] = l[r];
        return n
    }
    r.r(o), r.d(o, {
        cssValueToNumber: function() {
            return O
        },
        getAcronym: function() {
            return c
        },
        normalize: function() {
            return f
        },
        stripDiacritics: function() {
            return s
        },
        truncateText: function() {
            return a
        },
        upperCaseFirstChar: function() {
            return u
        }
    });

    function t(l) {
        return function(l) {
            if (Array.isArray(l)) return n(l)
        }(l) || function(l) {
            if ("undefined" != typeof Symbol && null != l[Symbol.iterator] || null != l["@@iterator"]) return Array.from(l)
        }(l) || function(l, o) {
            if (l) {
                if ("string" == typeof l) return n(l, o);
                var r = Object.prototype.toString.call(l).slice(8, -1);
                if ("Object" === r && l.constructor && (r = l.constructor.name), "Map" === r || "Set" === r) return Array.from(r);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(l, o)
            }
        }(l) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var e = /[\u0300-\u036f]/g,
        i = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    function u(l) {
        return null == l ? "" : "".concat(l.charAt(0).toUpperCase()).concat(l.slice(1))
    }
    var a = function(l, o) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
        if (null == l || null == o) return "";
        if (l.length > o) {
            var n = i.test(l) ? t(l).slice(0, o - r.length).join("") : l.substring(0, o - r.length);
            return "".concat(n.replace(/[\s.]+$/, "")).concat(r)
        }
        return l
    };

    function c(l) {
        return null != l ? l.replace(/'s /g, " ").replace(/\w+/g, function(l) {
            return l[0]
        }).replace(/\s/g, "") : ""
    }

    function O(l) {
        var o = parseInt(l, 10);
        return isNaN(o) ? 0 : o
    }
    var s = null == String.prototype.normalize ? function(l) {
            return l
        } : function(l) {
            return l.normalize("NFD").replace(e, "").normalize("NFC")
        },
        f = null == String.prototype.normalize ? function(l) {
            return l
        } : function(l) {
            var o = r("510085"),
                n = "";
            return t(l.normalize("NFD")).forEach(function(l) {
                var r;
                n += null !== (r = o[l]) && void 0 !== r ? r : l
            }), n.normalize("NFD").toLocaleLowerCase()
        }
}