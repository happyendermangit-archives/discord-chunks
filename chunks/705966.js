function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        safelyMakeUrlHumanReadable: function() {
            return c
        },
        sanitizeUnicodeConfusables: function() {
            return s
        },
        sanitizeWhitespace: function() {
            return i
        }
    });
    var r = RegExp("\\p{Cf}|\\p{Zl}|\\p{Zp}|[^\\P{Cc}\\n]|[^\\P{Zs} ]", "gu"),
        o = RegExp("".concat(r.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

    function i(e) {
        return e.replace(o, "")
    }
    var a = [{
        character: "h",
        matcher: u(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
    }, {
        character: "t",
        matcher: u(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
    }, {
        character: "p",
        matcher: u(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
    }, {
        character: "s",
        matcher: u(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
    }, {
        character: ":",
        matcher: u(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
    }, {
        character: "/",
        matcher: u(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
    }];

    function u(e) {
        return RegExp(e.join("|"), "gu")
    }

    function s(e) {
        var t = e;
        return a.forEach(function(e) {
            t = t.replace(e.matcher, e.character)
        }), t
    }
    var l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

    function c(e) {
        var t = function(e) {
            if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
            var t = "";
            return "" !== e.username && (t += e.username), "" !== e.password && (t += ":" + e.password), "" !== t && (t += "@"), "".concat(e.protocol, "//").concat(t).concat(e.host)
        }(e);
        return t += f(e.pathname) + f(e.search) + f(e.hash)
    }

    function f(e) {
        try {
            t = decodeURIComponent(e)
        } catch (t) {
            return e
        }
        for (var t, n = "", r = e, o = t; r.length > 0;) {
            var i, a = r.codePointAt(0),
                u = o.codePointAt(0);
            if (a === u) {
                var s = String.fromCodePoint(a);
                n += s, r = r.substring(s.length), o = o.substring(s.length);
                continue
            }
            var c = String.fromCodePoint(u),
                f = encodeURIComponent(c),
                d = f === c ? 3 : f.length;
            n += ((i = u) >= 0 && i < 128 ? 1 !== l[i] : 8206 === i || 8207 === i || 8234 === i || 8235 === i || 8236 === i || 8237 === i || 8238 === i || 1564 === i || 8294 === i || 8295 === i || 8296 === i || 8297 === i || 128271 === i || 128272 === i || 128274 === i || 128275 === i || 133 === i || 160 === i || 5760 === i || 8192 === i || 8193 === i || 8194 === i || 8195 === i || 8196 === i || 8197 === i || 8198 === i || 8199 === i || 8200 === i || 8201 === i || 8202 === i || 8232 === i || 8233 === i || 8239 === i || 8287 === i || 12288 === i || 10240 === i || 173 === i || 847 === i || i >= 1536 && i <= 1541 || 1757 === i || 1807 === i || 2274 === i || 4447 === i || 4448 === i || 6068 === i || 6069 === i || 6155 === i || 6156 === i || 6157 === i || 6158 === i || 8203 === i || 8204 === i || 8205 === i || 8288 === i || 8289 === i || 8290 === i || 8291 === i || 8292 === i || 8293 === i || i >= 8298 && i <= 8303 || 12644 === i || i >= 65520 && i <= 65528 || i >= 65024 && i <= 65039 || 65279 === i || 65440 === i || 65529 === i || 65530 === i || 65531 === i || 69821 === i || 69837 === i || i >= 78896 && i <= 78904 || i >= 113824 && i <= 113827 || i >= 119155 && i <= 119162 || i >= 917504 && i <= 921599) ? f : c, r = r.substring(d), o = o.substring(c.length)
        }
        return n
    }
}