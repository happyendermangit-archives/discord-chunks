function(e, t, n) {
    function r(e) {
        if (e && "object" == typeof e) {
            var t = e.which || e.keyCode || e.charCode;
            t && (e = t)
        }
        if ("number" == typeof e) return a[e];
        var n = String(e),
            r = i[n.toLowerCase()];
        if (r) return r;
        var r = o[n.toLowerCase()];
        return r ? r : 1 === n.length ? n.charCodeAt(0) : void 0
    }
    r.isEventKey = function(e, t) {
        if (e && "object" == typeof e) {
            var n = e.which || e.keyCode || e.charCode;
            if (null == n) return !1;
            if ("string" == typeof t) {
                var r = i[t.toLowerCase()];
                if (r) return r === n;
                var r = o[t.toLowerCase()];
                if (r) return r === n
            } else if ("number" == typeof t) return t === n;
            return !1
        }
    };
    var i = (t = e.exports = r).code = t.codes = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            ctrl: 17,
            alt: 18,
            "pause/break": 19,
            "caps lock": 20,
            esc: 27,
            space: 32,
            "page up": 33,
            "page down": 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            insert: 45,
            delete: 46,
            command: 91,
            "left command": 91,
            "right command": 93,
            "numpad *": 106,
            "numpad +": 107,
            "numpad -": 109,
            "numpad .": 110,
            "numpad /": 111,
            "num lock": 144,
            "scroll lock": 145,
            "my computer": 182,
            "my calculator": 183,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222
        },
        o = t.aliases = {
            windows: 91,
            "⇧": 16,
            "⌥": 18,
            "⌃": 17,
            "⌘": 91,
            ctl: 17,
            control: 17,
            option: 18,
            pause: 19,
            break: 19,
            caps: 20,
            return: 13,
            escape: 27,
            spc: 32,
            spacebar: 32,
            pgup: 33,
            pgdn: 34,
            ins: 45,
            del: 46,
            cmd: 91
        };
    for (s = 97; s < 123; s++) i[String.fromCharCode(s)] = s - 32;
    for (var s = 48; s < 58; s++) i[s - 48] = s;
    for (s = 1; s < 13; s++) i["f" + s] = s + 111;
    for (s = 0; s < 10; s++) i["numpad " + s] = s + 96;
    var a = t.names = t.title = {};
    for (s in i) a[i[s]] = s;
    for (var c in o) i[c] = o[c]
}