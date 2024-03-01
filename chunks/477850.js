function(e, t, n) {
    e = n.nmd(e), n("781738"), (function() {
        var n = this,
            r = n.humanize,
            a = {};
        void 0 !== t ? (void 0 !== e && e.exports && (t = e.exports = a), t.humanize = a) : ("function" == typeof define && define.amd && define("humanize", function() {
            return a
        }), n.humanize = a), a.noConflict = function() {
            return n.humanize = r, this
        }, a.pad = function(e, t, n, r) {
            if (e += "", n ? n.length > 1 && (n = n.charAt(0)) : n = " ", "right" == (r = void 0 === r ? "left" : "right"))
                for (; e.length < t;) e += n;
            else
                for (; e.length < t;) e = n + e;
            return e
        }, a.time = function() {
            return new Date().getTime() / 1e3
        };
        var i = [0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            o = [0, 0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
        a.date = function(e, t) {
            var n = void 0 === t ? new Date : new Date(t instanceof Date ? t : 1e3 * t),
                r = /\\?([a-z])/gi,
                s = function(e, t) {
                    return u[e] ? u[e]() : t
                },
                c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                u = {
                    d: function() {
                        return a.pad(u.j(), 2, "0")
                    },
                    D: function() {
                        return u.l().slice(0, 3)
                    },
                    j: function() {
                        return n.getDate()
                    },
                    l: function() {
                        return c[u.w()]
                    },
                    N: function() {
                        return u.w() || 7
                    },
                    S: function() {
                        var e = u.j();
                        return e > 4 && e < 21 ? "th" : ({
                            1: "st",
                            2: "nd",
                            3: "rd"
                        })[e % 10] || "th"
                    },
                    w: function() {
                        return n.getDay()
                    },
                    z: function() {
                        return (u.L() ? o[u.n()] : i[u.n()]) + u.j() - 1
                    },
                    W: function() {
                        var e = u.z() - u.N() + 1.5;
                        return a.pad(1 + Math.floor(Math.abs(e) / 7) + (e % 7 > 3.5 ? 1 : 0), 2, "0")
                    },
                    F: function() {
                        return l[n.getMonth()]
                    },
                    m: function() {
                        return a.pad(u.n(), 2, "0")
                    },
                    M: function() {
                        return u.F().slice(0, 3)
                    },
                    n: function() {
                        return n.getMonth() + 1
                    },
                    t: function() {
                        return new Date(u.Y(), u.n(), 0).getDate()
                    },
                    L: function() {
                        return 1 === new Date(u.Y(), 1, 29).getMonth() ? 1 : 0
                    },
                    o: function() {
                        var e = u.n(),
                            t = u.W();
                        return u.Y() + (12 === e && t < 9 ? -1 : 1 === e && t > 9)
                    },
                    Y: function() {
                        return n.getFullYear()
                    },
                    y: function() {
                        return String(u.Y()).slice(-2)
                    },
                    a: function() {
                        return n.getHours() > 11 ? "pm" : "am"
                    },
                    A: function() {
                        return u.a().toUpperCase()
                    },
                    B: function() {
                        var e = n.getTime() / 1e3,
                            t = e % 86400 + 3600;
                        t < 0 && (t += 86400);
                        var r = t / 86.4 % 1e3;
                        return e < 0 ? Math.ceil(r) : Math.floor(r)
                    },
                    g: function() {
                        return u.G() % 12 || 12
                    },
                    G: function() {
                        return n.getHours()
                    },
                    h: function() {
                        return a.pad(u.g(), 2, "0")
                    },
                    H: function() {
                        return a.pad(u.G(), 2, "0")
                    },
                    i: function() {
                        return a.pad(n.getMinutes(), 2, "0")
                    },
                    s: function() {
                        return a.pad(n.getSeconds(), 2, "0")
                    },
                    u: function() {
                        return a.pad(1e3 * n.getMilliseconds(), 6, "0")
                    },
                    O: function() {
                        var e = n.getTimezoneOffset(),
                            t = Math.abs(e);
                        return (e > 0 ? "-" : "+") + a.pad(100 * Math.floor(t / 60) + t % 60, 4, "0")
                    },
                    P: function() {
                        var e = u.O();
                        return e.substr(0, 3) + ":" + e.substr(3, 2)
                    },
                    Z: function() {
                        return -(60 * n.getTimezoneOffset())
                    },
                    c: function() {
                        return "Y-m-d\\TH:i:sP".replace(r, s)
                    },
                    r: function() {
                        return "D, d M Y H:i:s O".replace(r, s)
                    },
                    U: function() {
                        return n.getTime() / 1e3 || 0
                    }
                };
            return e.replace(r, s)
        }, a.numberFormat = function(e, t, n, r) {
            t = isNaN(t) ? 2 : Math.abs(t), n = void 0 === n ? "." : n, r = void 0 === r ? "," : r;
            var a = e < 0 ? "-" : "",
                i = parseInt((e = Math.abs(+e || 0)).toFixed(t), 10) + "",
                o = i.length > 3 ? i.length % 3 : 0;
            return a + (o ? i.substr(0, o) + r : "") + i.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + r) + (t ? n + Math.abs(e - i).toFixed(t).slice(2) : "")
        }, a.naturalDay = function(e, t) {
            e = void 0 === e ? a.time() : e, t = void 0 === t ? "Y-m-d" : t;
            var n = new Date,
                r = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() / 1e3;
            if (e < r && e >= r - 86400) return "yesterday";
            if (e >= r && e < r + 86400) return "today";
            if (e >= r + 86400 && e < r + 172800) return "tomorrow";
            return a.date(t, e)
        }, a.relativeTime = function(e) {
            e = void 0 === e ? a.time() : e;
            var t = a.time(),
                n = t - e;
            if (n < 2 && n > -2) return (n >= 0 ? "just " : "") + "now";
            if (n < 60 && n > -60) return n >= 0 ? Math.floor(n) + " seconds ago" : "in " + Math.floor(-n) + " seconds";
            if (n < 120 && n > -120) return n >= 0 ? "about a minute ago" : "in about a minute";
            if (n < 3600 && n > -3600) return n >= 0 ? Math.floor(n / 60) + " minutes ago" : "in " + Math.floor(-n / 60) + " minutes";
            if (n < 7200 && n > -7200) return n >= 0 ? "about an hour ago" : "in about an hour";
            if (n < 86400 && n > -86400) return n >= 0 ? Math.floor(n / 3600) + " hours ago" : "in " + Math.floor(-n / 3600) + " hours";
            if (n < 172800 && n > -172800) return n >= 0 ? "1 day ago" : "in 1 day";
            if (n < 2505600 && n > -2505600) return n >= 0 ? Math.floor(n / 86400) + " days ago" : "in " + Math.floor(-n / 86400) + " days";
            if (n < 5184e3 && n > -5184e3) return n >= 0 ? "about a month ago" : "in about a month";
            var r = parseInt(a.date("Y", t), 10),
                i = parseInt(a.date("Y", e), 10),
                o = 12 * r + parseInt(a.date("n", t), 10) - (12 * i + parseInt(a.date("n", e), 10));
            if (o < 12 && o > -12) return o >= 0 ? o + " months ago" : "in " + -o + " months";
            var s = r - i;
            return s < 2 && s > -2 ? s >= 0 ? "a year ago" : "in a year" : s >= 0 ? s + " years ago" : "in " + -s + " years"
        }, a.ordinal = function(e) {
            var t = (e = isNaN(e = parseInt(e, 10)) ? 0 : e) < 0 ? "-" : "",
                n = (e = Math.abs(e)) % 100;
            return t + e + (n > 4 && n < 21 ? "th" : ({
                1: "st",
                2: "nd",
                3: "rd"
            })[e % 10] || "th")
        }, a.filesize = function(e, t, n, r, i, o) {
            return (t = void 0 === t ? 1024 : t, e <= 0) ? "0 bytes" : (e < t && void 0 === n && (n = 0), void 0 === o && (o = " "), a.intword(e, ["bytes", "KB", "MB", "GB", "TB", "PB"], t, n, r, i, o))
        }, a.intword = function(e, t, n, r, i, o, s) {
            l = (t = t || ["", "K", "M", "B", "T"]).length - 1, n = n || 1e3, r = isNaN(r) ? 2 : Math.abs(r), i = i || ".", o = o || ",", s = s || "";
            for (var c, l, u = 0; u < t.length; u++)
                if (e < Math.pow(n, u + 1)) {
                    l = u;
                    break
                } c = e / Math.pow(n, l);
            var d = t[l] ? s + t[l] : "";
            return a.numberFormat(c, r, i, o) + d
        }, a.linebreaks = function(e) {
            return "<p>" + (e = (e = (e = (e = (e = e.replace(/^([\n|\r]*)/, "")).replace(/([\n|\r]*)$/, "")).replace(/(\r\n|\n|\r)/g, "\n")).replace(/(\n{2,})/g, "</p><p>")).replace(/\n/g, "<br />")) + "</p>"
        }, a.nl2br = function(e) {
            return e.replace(/(\r\n|\n|\r)/g, "<br />")
        }, a.truncatechars = function(e, t) {
            return e.length <= t ? e : e.substr(0, t) + "…"
        }, a.truncatewords = function(e, t) {
            var n = e.split(" ");
            return n.length < t ? e : n.slice(0, t).join(" ") + "…"
        }
    }).call(this)
}