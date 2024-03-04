function(D, u, E) {
    "use strict";
    E.r(u), E.d(u, {
        upperCaseFirstChar: function() {
            return B
        },
        truncateText: function() {
            return A
        },
        getAcronym: function() {
            return l
        },
        cssValueToNumber: function() {
            return o
        },
        stripDiacritics: function() {
            return r
        },
        normalize: function() {
            return n
        }
    }), E("222007"), E("781738");
    let C = /[\u0300-\u036f]/g,
        F = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

    function B(D) {
        return null == D ? "" : "".concat(D.charAt(0).toUpperCase()).concat(D.slice(1))
    }
    let A = function(D, u) {
        let E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "…";
        if (null == D || null == u) return "";
        if (D.length > u) {
            let C = F.test(D) ? [...D].slice(0, u - E.length).join("") : D.substring(0, u - E.length);
            return "".concat(C.replace(/[\s.]+$/, "")).concat(E)
        }
        return D
    };

    function l(D) {
        return null != D ? D.replace(/'s /g, " ").replace(/\w+/g, D => D[0]).replace(/\s/g, "") : ""
    }

    function o(D) {
        let u = parseInt(D, 10);
        return isNaN(u) ? 0 : u
    }
    let r = null == String.prototype.normalize ? D => D : D => D.normalize("NFD").replace(C, "").normalize("NFC"),
        n = null == String.prototype.normalize ? D => D : function(D) {
            let u = E("525217"),
                C = "";
            return [...D.normalize("NFD")].forEach(D => {
                var E;
                C += null !== (E = u[D]) && void 0 !== E ? E : D
            }), C.normalize("NFD").toLocaleLowerCase()
        }
}