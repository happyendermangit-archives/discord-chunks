function(e, t, n) {
    "use strict";
    n("781738"), n("70102");
    var r = "%[a-f0-9]{2}",
        i = RegExp("(" + r + ")|([^%]+?)", "gi"),
        o = RegExp("(" + r + ")+", "gi");
    e.exports = function(e) {
        if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
        try {
            return e = e.replace(/\+/g, " "), decodeURIComponent(e)
        } catch (t) {
            return function(e) {
                for (var t = {
                        "%FE%FF": "��",
                        "%FF%FE": "��"
                    }, n = o.exec(e); n;) {
                    try {
                        t[n[0]] = decodeURIComponent(n[0])
                    } catch (e) {
                        var r = function(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (r) {
                                for (var t = e.match(i) || [], n = 1; n < t.length; n++) t = (e = (function e(t, n) {
                                    try {
                                        return [decodeURIComponent(t.join(""))]
                                    } catch (e) {}
                                    if (1 === t.length) return t;
                                    n = n || 1;
                                    var r = t.slice(0, n),
                                        i = t.slice(n);
                                    return Array.prototype.concat.call([], e(r), e(i))
                                })(t, n).join("")).match(i) || [];
                                return e
                            }
                        }(n[0]);
                        r !== n[0] && (t[n[0]] = r)
                    }
                    n = o.exec(e)
                }
                t["%C2"] = "�";
                for (var s = Object.keys(t), a = 0; a < s.length; a++) {
                    var c = s[a];
                    e = e.replace(RegExp(c, "g"), t[c])
                }
                return e
            }(e)
        }
    }
}