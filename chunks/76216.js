function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sanitizeWhitespace: function() {
            return i
        },
        sanitizeUnicodeConfusables: function() {
            return o
        },
        safelyMakeUrlHumanReadable: function() {
            return u
        }
    }), n("781738");
    let s = RegExp("".concat(/\p{Cf}|\p{Zl}|\p{Zp}|[^\P{Cc}\n]|[^\P{Zs} ]/gu.source, "|").concat("͏|឴|឵|ᅠ|ㅤ|ﾠ"), "gu");

    function i(e) {
        return e.replace(s, "")
    }
    let r = [{
        character: "h",
        matcher: a(["H", "һ", "հ", "Ꮒ", "ℎ", "\uD835\uDC21", "\uD835\uDC89", "\uD835\uDCBD", "\uD835\uDCF1", "\uD835\uDD25", "\uD835\uDD59", "\uD835\uDD8D", "\uD835\uDDC1", "\uD835\uDDF5", "\uD835\uDE29", "\uD835\uDE5D", "\uD835\uDE91", "ｈ"])
    }, {
        character: "t",
        matcher: a(["T", "\uD835\uDC2D", "\uD835\uDC61", "\uD835\uDC95", "\uD835\uDCC9", "\uD835\uDCFD", "\uD835\uDD31", "\uD835\uDD65", "\uD835\uDD99", "\uD835\uDDCD", "\uD835\uDE01", "\uD835\uDE35", "\uD835\uDE69", "\uD835\uDE9D"])
    }, {
        character: "p",
        matcher: a(["P", "ρ", "ϱ", "р", "⍴", "ⲣ", "\uD835\uDC29", "\uD835\uDC5D", "\uD835\uDC91", "\uD835\uDCC5", "\uD835\uDCF9", "\uD835\uDD2D", "\uD835\uDD61", "\uD835\uDD95", "\uD835\uDDC9", "\uD835\uDDFD", "\uD835\uDE31", "\uD835\uDE65", "\uD835\uDE99", "\uD835\uDED2", "\uD835\uDEE0", "\uD835\uDF0C", "\uD835\uDF1A", "\uD835\uDF46", "\uD835\uDF54", "\uD835\uDF80", "\uD835\uDF8E", "\uD835\uDFBA", "\uD835\uDFC8", "ｐ", "ҏ"])
    }, {
        character: "s",
        matcher: a(["S", "ƽ", "ѕ", "ꜱ", "ꮪ", "\uD801\uDC48", "\uD806\uDCC1", "\uD835\uDC2C", "\uD835\uDC60", "\uD835\uDC94", "\uD835\uDCC8", "\uD835\uDCFC", "\uD835\uDD30", "\uD835\uDD64", "\uD835\uDD98", "\uD835\uDDCC", "\uD835\uDE00", "\uD835\uDE34", "\uD835\uDE68", "\uD835\uDE9C", "ｓ"])
    }, {
        character: ":",
        matcher: a(["ː", "˸", "։", "׃", "܃", "܄", "ः", "ઃ", "᛬", "᠃", "᠉", "⁚", "∶", "ꓽ", "꞉", "︰", "：", ";", ";"])
    }, {
        character: "/",
        matcher: a(["᜵", "⁁", "⁄", "∕", "╱", "⟋", "⧸", "Ⳇ", "⼃", "〳", "ノ", "㇓", "丿", "\uD834\uDE3A"])
    }];

    function a(e) {
        return RegExp(e.join("|"), "gu")
    }

    function o(e) {
        let t = e;
        return r.forEach(e => {
            t = t.replace(e.matcher, e.character)
        }), t
    }
    let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0];

    function u(e) {
        let t = function(e) {
            let t = "null" === e.origin,
                n = t && e.pathname.startsWith("//");
            if (n) return e.protocol;
            let s = "";
            return "" !== e.username && (s += e.username), "" !== e.password && (s += ":" + e.password), "" !== s && (s += "@"), "".concat(e.protocol, "//").concat(s).concat(e.host)
        }(e);
        return t += l(e.pathname) + l(e.search) + l(e.hash)
    }

    function l(e) {
        let t;
        try {
            t = decodeURIComponent(e)
        } catch {
            return e
        }
        let n = "",
            s = e,
            i = t;
        for (; s.length > 0;) {
            var r;
            let e = s.codePointAt(0),
                t = i.codePointAt(0);
            if (e === t) {
                let t = String.fromCodePoint(e);
                n += t, s = s.substring(t.length), i = i.substring(t.length);
                continue
            }
            let a = String.fromCodePoint(t),
                o = encodeURIComponent(a),
                u = o === a ? 3 : o.length;
            n += ((r = t) >= 0 && r < 128 ? 1 !== d[r] : 8206 === r || 8207 === r || 8234 === r || 8235 === r || 8236 === r || 8237 === r || 8238 === r || 1564 === r || 8294 === r || 8295 === r || 8296 === r || 8297 === r || 128271 === r || 128272 === r || 128274 === r || 128275 === r || 133 === r || 160 === r || 5760 === r || 8192 === r || 8193 === r || 8194 === r || 8195 === r || 8196 === r || 8197 === r || 8198 === r || 8199 === r || 8200 === r || 8201 === r || 8202 === r || 8232 === r || 8233 === r || 8239 === r || 8287 === r || 12288 === r || 10240 === r || 173 === r || 847 === r || r >= 1536 && r <= 1541 || 1757 === r || 1807 === r || 2274 === r || 4447 === r || 4448 === r || 6068 === r || 6069 === r || 6155 === r || 6156 === r || 6157 === r || 6158 === r || 8203 === r || 8204 === r || 8205 === r || 8288 === r || 8289 === r || 8290 === r || 8291 === r || 8292 === r || 8293 === r || r >= 8298 && r <= 8303 || 12644 === r || r >= 65520 && r <= 65528 || r >= 65024 && r <= 65039 || 65279 === r || 65440 === r || 65529 === r || 65530 === r || 65531 === r || 69821 === r || 69837 === r || r >= 78896 && r <= 78904 || r >= 113824 && r <= 113827 || r >= 119155 && r <= 119162 || r >= 917504 && r <= 921599) ? o : a, s = s.substring(u), i = i.substring(a.length)
        }
        return n
    }
}