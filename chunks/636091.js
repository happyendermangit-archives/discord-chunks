function(e, t, n) {
    n("424973"), n("808653");
    var r = function(e) {
            return String(Number(e)) === e ? Number(e) : e
        },
        a = function(e, t, n, a) {
            if (a && !n) t[a] = r(e[1]);
            else
                for (var i = 0; i < n.length; i += 1) null != e[i + 1] && (t[n[i]] = r(e[i + 1]))
        },
        i = function(e, t, n) {
            var r = e.name && e.names;
            e.push && !t[e.push] ? t[e.push] = [] : r && !t[e.name] && (t[e.name] = {});
            var i = e.push ? {} : r ? t[e.name] : t;
            a(n.match(e.reg), i, e.names, e.name), e.push && t[e.push].push(i)
        },
        o = n("258169"),
        s = RegExp.prototype.test.bind(/^([a-z])=(.*)/);
    t.parse = function(e) {
        var t = {},
            n = [],
            r = t;
        return e.split(/(\r\n|\r|\n)/).filter(s).forEach(function(e) {
            var t = e[0],
                a = e.slice(2);
            "m" === t && (n.push({
                rtp: [],
                fmtp: []
            }), r = n[n.length - 1]);
            for (var s = 0; s < (o[t] || []).length; s += 1) {
                var c = o[t][s];
                if (c.reg.test(a)) return i(c, r, a)
            }
        }), t.media = n, t
    };
    var c = function(e, t) {
        var n = t.split(/=(.+)/, 2);
        return 2 === n.length && (e[n[0]] = r(n[1])), e
    };
    t.parseParams = function(e) {
        return e.split(/\;\s?/).reduce(c, {})
    }, t.parseFmtpConfig = t.parseParams, t.parsePayloads = function(e) {
        return e.split(" ").map(Number)
    }, t.parseRemoteCandidates = function(e) {
        for (var t = [], n = e.split(" ").map(r), a = 0; a < n.length; a += 3) t.push({
            component: n[a],
            ip: n[a + 1],
            port: n[a + 2]
        });
        return t
    }, t.parseImageAttributes = function(e) {
        return e.split(" ").map(function(e) {
            return e.substring(1, e.length - 1).split(",").reduce(c, {})
        })
    }, t.parseSimulcastStreamList = function(e) {
        return e.split(";").map(function(e) {
            return e.split(",").map(function(e) {
                var t, n = !1;
                return "~" !== e[0] ? t = r(e) : (t = r(e.substring(1, e.length)), n = !0), {
                    scid: t,
                    paused: n
                }
            })
        })
    }
}