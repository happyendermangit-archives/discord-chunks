function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        safelyMakeUrlHumanReadable: function() {
            return u
        },
        sanitizeUnicodeConfusables: function() {
            return o
        },
        sanitizeWhitespace: function() {
            return r
        }
    }), n("757143");
    let i = RegExp("".concat(/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

    function r(e) {
        return e.replace(i, "")
    }
    let a = [{
        character: "h",
        matcher: s(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
    }, {
        character: "t",
        matcher: s(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
    }, {
        character: "p",
        matcher: s(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
    }, {
        character: "s",
        matcher: s(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
    }, {
        character: ":",
        matcher: s(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
    }, {
        character: "/",
        matcher: s(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
    }];

    function s(e) {
        return RegExp(e.join("|"), "gu")
    }

    function o(e) {
        let t = e;
        return a.forEach(e => {
            t = t.replace(e.matcher, e.character)
        }), t
    }
    let l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

    function u(e) {
        let t = function(e) {
            if ("null" === e.origin && e.pathname.startsWith("//")) return e.protocol;
            let t = "";
            return "" !== e.username && (t += e.username), "" !== e.password && (t += ":" + e.password), "" !== t && (t += "@"), "".concat(e.protocol, "//").concat(t).concat(e.host)
        }(e);
        return t += d(e.pathname) + d(e.search) + d(e.hash)
    }

    function d(e) {
        let t;
        try {
            t = decodeURIComponent(e)
        } catch {
            return e
        }
        let n = "",
            i = e,
            r = t;
        for (; i.length > 0;) {
            var a;
            let e = i.codePointAt(0),
                t = r.codePointAt(0);
            if (e === t) {
                let t = String.fromCodePoint(e);
                n += t, i = i.substring(t.length), r = r.substring(t.length);
                continue
            }
            let s = String.fromCodePoint(t),
                o = encodeURIComponent(s),
                u = o === s ? 3 : o.length;
            n += ((a = t) >= 0 && a < 128 ? 1 !== l[a] : 8206 === a || 8207 === a || 8234 === a || 8235 === a || 8236 === a || 8237 === a || 8238 === a || 1564 === a || 8294 === a || 8295 === a || 8296 === a || 8297 === a || 128271 === a || 128272 === a || 128274 === a || 128275 === a || 133 === a || 160 === a || 5760 === a || 8192 === a || 8193 === a || 8194 === a || 8195 === a || 8196 === a || 8197 === a || 8198 === a || 8199 === a || 8200 === a || 8201 === a || 8202 === a || 8232 === a || 8233 === a || 8239 === a || 8287 === a || 12288 === a || 10240 === a || 173 === a || 847 === a || a >= 1536 && a <= 1541 || 1757 === a || 1807 === a || 2274 === a || 4447 === a || 4448 === a || 6068 === a || 6069 === a || 6155 === a || 6156 === a || 6157 === a || 6158 === a || 8203 === a || 8204 === a || 8205 === a || 8288 === a || 8289 === a || 8290 === a || 8291 === a || 8292 === a || 8293 === a || a >= 8298 && a <= 8303 || 12644 === a || a >= 65520 && a <= 65528 || a >= 65024 && a <= 65039 || 65279 === a || 65440 === a || 65529 === a || 65530 === a || 65531 === a || 69821 === a || 69837 === a || a >= 78896 && a <= 78904 || a >= 113824 && a <= 113827 || a >= 119155 && a <= 119162 || a >= 917504 && a <= 921599) ? o : s, i = i.substring(u), r = r.substring(s.length)
        }
        return n
    }
}