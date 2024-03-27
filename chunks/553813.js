function(e, t, n) {
    var r, i = n("444675");
    t = e.exports = p, r = "object" == typeof i && i.env && i.env.NODE_DEBUG && /\bsemver\b/i.test(i.env.NODE_DEBUG) ? function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift("SEMVER"), console.log.apply(console, e)
    } : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
    var a = Number.MAX_SAFE_INTEGER || 9007199254740991,
        o = t.re = [],
        s = t.src = [],
        u = t.tokens = {},
        c = 0;

    function l(e) {
        u[e] = c++
    }
    l("NUMERICIDENTIFIER"), s[u.NUMERICIDENTIFIER] = "0|[1-9]\\d*", l("NUMERICIDENTIFIERLOOSE"), s[u.NUMERICIDENTIFIERLOOSE] = "[0-9]+", l("NONNUMERICIDENTIFIER"), s[u.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", l("MAINVERSION"), s[u.MAINVERSION] = "(" + s[u.NUMERICIDENTIFIER] + ")\\.(" + s[u.NUMERICIDENTIFIER] + ")\\.(" + s[u.NUMERICIDENTIFIER] + ")", l("MAINVERSIONLOOSE"), s[u.MAINVERSIONLOOSE] = "(" + s[u.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[u.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[u.NUMERICIDENTIFIERLOOSE] + ")", l("PRERELEASEIDENTIFIER"), s[u.PRERELEASEIDENTIFIER] = "(?:" + s[u.NUMERICIDENTIFIER] + "|" + s[u.NONNUMERICIDENTIFIER] + ")", l("PRERELEASEIDENTIFIERLOOSE"), s[u.PRERELEASEIDENTIFIERLOOSE] = "(?:" + s[u.NUMERICIDENTIFIERLOOSE] + "|" + s[u.NONNUMERICIDENTIFIER] + ")", l("PRERELEASE"), s[u.PRERELEASE] = "(?:-(" + s[u.PRERELEASEIDENTIFIER] + "(?:\\." + s[u.PRERELEASEIDENTIFIER] + ")*))", l("PRERELEASELOOSE"), s[u.PRERELEASELOOSE] = "(?:-?(" + s[u.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + s[u.PRERELEASEIDENTIFIERLOOSE] + ")*))", l("BUILDIDENTIFIER"), s[u.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", l("BUILD"), s[u.BUILD] = "(?:\\+(" + s[u.BUILDIDENTIFIER] + "(?:\\." + s[u.BUILDIDENTIFIER] + ")*))", l("FULL"), l("FULLPLAIN"), s[u.FULLPLAIN] = "v?" + s[u.MAINVERSION] + s[u.PRERELEASE] + "?" + s[u.BUILD] + "?", s[u.FULL] = "^" + s[u.FULLPLAIN] + "$", l("LOOSEPLAIN"), s[u.LOOSEPLAIN] = "[v=\\s]*" + s[u.MAINVERSIONLOOSE] + s[u.PRERELEASELOOSE] + "?" + s[u.BUILD] + "?", l("LOOSE"), s[u.LOOSE] = "^" + s[u.LOOSEPLAIN] + "$", l("GTLT"), s[u.GTLT] = "((?:<|>)?=?)", l("XRANGEIDENTIFIERLOOSE"), s[u.XRANGEIDENTIFIERLOOSE] = s[u.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", l("XRANGEIDENTIFIER"), s[u.XRANGEIDENTIFIER] = s[u.NUMERICIDENTIFIER] + "|x|X|\\*", l("XRANGEPLAIN"), s[u.XRANGEPLAIN] = "[v=\\s]*(" + s[u.XRANGEIDENTIFIER] + ")(?:\\.(" + s[u.XRANGEIDENTIFIER] + ")(?:\\.(" + s[u.XRANGEIDENTIFIER] + ")(?:" + s[u.PRERELEASE] + ")?" + s[u.BUILD] + "?)?)?", l("XRANGEPLAINLOOSE"), s[u.XRANGEPLAINLOOSE] = "[v=\\s]*(" + s[u.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[u.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[u.XRANGEIDENTIFIERLOOSE] + ")(?:" + s[u.PRERELEASELOOSE] + ")?" + s[u.BUILD] + "?)?)?", l("XRANGE"), s[u.XRANGE] = "^" + s[u.GTLT] + "\\s*" + s[u.XRANGEPLAIN] + "$", l("XRANGELOOSE"), s[u.XRANGELOOSE] = "^" + s[u.GTLT] + "\\s*" + s[u.XRANGEPLAINLOOSE] + "$", l("COERCE"), s[u.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", l("COERCERTL"), o[u.COERCERTL] = RegExp(s[u.COERCE], "g"), l("LONETILDE"), s[u.LONETILDE] = "(?:~>?)", l("TILDETRIM"), s[u.TILDETRIM] = "(\\s*)" + s[u.LONETILDE] + "\\s+", o[u.TILDETRIM] = RegExp(s[u.TILDETRIM], "g");
    l("TILDE"), s[u.TILDE] = "^" + s[u.LONETILDE] + s[u.XRANGEPLAIN] + "$", l("TILDELOOSE"), s[u.TILDELOOSE] = "^" + s[u.LONETILDE] + s[u.XRANGEPLAINLOOSE] + "$", l("LONECARET"), s[u.LONECARET] = "(?:\\^)", l("CARETTRIM"), s[u.CARETTRIM] = "(\\s*)" + s[u.LONECARET] + "\\s+", o[u.CARETTRIM] = RegExp(s[u.CARETTRIM], "g");
    l("CARET"), s[u.CARET] = "^" + s[u.LONECARET] + s[u.XRANGEPLAIN] + "$", l("CARETLOOSE"), s[u.CARETLOOSE] = "^" + s[u.LONECARET] + s[u.XRANGEPLAINLOOSE] + "$", l("COMPARATORLOOSE"), s[u.COMPARATORLOOSE] = "^" + s[u.GTLT] + "\\s*(" + s[u.LOOSEPLAIN] + ")$|^$", l("COMPARATOR"), s[u.COMPARATOR] = "^" + s[u.GTLT] + "\\s*(" + s[u.FULLPLAIN] + ")$|^$", l("COMPARATORTRIM"), s[u.COMPARATORTRIM] = "(\\s*)" + s[u.GTLT] + "\\s*(" + s[u.LOOSEPLAIN] + "|" + s[u.XRANGEPLAIN] + ")", o[u.COMPARATORTRIM] = RegExp(s[u.COMPARATORTRIM], "g");
    l("HYPHENRANGE"), s[u.HYPHENRANGE] = "^\\s*(" + s[u.XRANGEPLAIN] + ")\\s+-\\s+(" + s[u.XRANGEPLAIN] + ")\\s*$", l("HYPHENRANGELOOSE"), s[u.HYPHENRANGELOOSE] = "^\\s*(" + s[u.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + s[u.XRANGEPLAINLOOSE] + ")\\s*$", l("STAR"), s[u.STAR] = "(<|>)?=?\\s*\\*";
    for (var d = 0; d < c; d++) r(d, s[d]), !o[d] && (o[d] = new RegExp(s[d]));

    function f(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof p) return e;
        if ("string" != typeof e || e.length > 256 || !(t.loose ? o[u.LOOSE] : o[u.FULL]).test(e)) return null;
        try {
            return new p(e, t)
        } catch (e) {
            return null
        }
    }
    t.parse = f, t.valid = function(e, t) {
        var n = f(e, t);
        return n ? n.version : null
    };
    t.clean = function(e, t) {
        var n = f(e.trim().replace(/^[=v]+/, ""), t);
        return n ? n.version : null
    };

    function p(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof p) {
            if (e.loose === t.loose) return e;
            e = e.version
        } else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
        if (e.length > 256) throw TypeError("version is longer than 256 characters");
        if (!(this instanceof p)) return new p(e, t);
        r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
        var n = e.trim().match(t.loose ? o[u.LOOSE] : o[u.FULL]);
        if (!n) throw TypeError("Invalid Version: " + e);
        if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > a || this.major < 0) throw TypeError("Invalid major version");
        if (this.minor > a || this.minor < 0) throw TypeError("Invalid minor version");
        if (this.patch > a || this.patch < 0) throw TypeError("Invalid patch version");
        n[4] ? this.prerelease = n[4].split(".").map(function(e) {
            if (/^[0-9]+$/.test(e)) {
                var t = +e;
                if (t >= 0 && t < a) return t
            }
            return e
        }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
    }
    t.SemVer = p, p.prototype.format = function() {
        return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
    }, p.prototype.toString = function() {
        return this.version
    }, p.prototype.compare = function(e) {
        return r("SemVer.compare", this.version, this.options, e), !(e instanceof p) && (e = new p(e, this.options)), this.compareMain(e) || this.comparePre(e)
    }, p.prototype.compareMain = function(e) {
        return !(e instanceof p) && (e = new p(e, this.options)), m(this.major, e.major) || m(this.minor, e.minor) || m(this.patch, e.patch)
    }, p.prototype.comparePre = function(e) {
        if (!(e instanceof p) && (e = new p(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
        if (!this.prerelease.length && e.prerelease.length) return 1;
        if (!this.prerelease.length && !e.prerelease.length) return 0;
        var t = 0;
        do {
            var n = this.prerelease[t],
                i = e.prerelease[t];
            if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return m(n, i)
        } while (++t)
    }, p.prototype.compareBuild = function(e) {
        !(e instanceof p) && (e = new p(e, this.options));
        var t = 0;
        do {
            var n = this.build[t],
                i = e.build[t];
            if (r("prerelease compare", t, n, i), void 0 === n && void 0 === i) return 0;
            if (void 0 === i) return 1;
            else if (void 0 === n) return -1;
            else if (n === i) continue;
            else return m(n, i)
        } while (++t)
    }, p.prototype.inc = function(e, t) {
        switch (e) {
            case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                break;
            case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                break;
            case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                break;
            case "prerelease":
                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                break;
            case "major":
                (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
            case "minor":
                (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
            case "patch":
                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                break;
            case "pre":
                if (0 === this.prerelease.length) this.prerelease = [0];
                else {
                    for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2); - 1 === n && this.prerelease.push(0)
                }
                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                break;
            default:
                throw Error("invalid increment argument: " + e)
        }
        return this.format(), this.raw = this.version, this
    }, t.inc = function(e, t, n, r) {
        "string" == typeof n && (r = n, n = void 0);
        try {
            return new p(e, n).inc(t, r).version
        } catch (e) {
            return null
        }
    };
    t.diff = function(e, t) {
        if (v(e, t)) return null;
        var n = f(e),
            r = f(t),
            i = "";
        if (n.prerelease.length || r.prerelease.length) {
            i = "pre";
            var a = "prerelease"
        }
        for (var o in n)
            if (("major" === o || "minor" === o || "patch" === o) && n[o] !== r[o]) return i + o;
        return a
    };
    t.compareIdentifiers = m;
    var h = /^[0-9]+$/;

    function m(e, t) {
        var n = h.test(e),
            r = h.test(t);
        return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
    }
    t.rcompareIdentifiers = function(e, t) {
        return m(t, e)
    };
    t.major = function(e, t) {
        return new p(e, t).major
    };
    t.minor = function(e, t) {
        return new p(e, t).minor
    };
    t.patch = function(e, t) {
        return new p(e, t).patch
    };

    function g(e, t, n) {
        return new p(e, n).compare(new p(t, n))
    }
    t.compare = g, t.compareLoose = function(e, t) {
        return g(e, t, !0)
    };
    t.compareBuild = function(e, t, n) {
        var r = new p(e, n),
            i = new p(t, n);
        return r.compare(i) || r.compareBuild(i)
    };
    t.rcompare = function(e, t, n) {
        return g(t, e, n)
    };
    t.sort = function(e, n) {
        return e.sort(function(e, r) {
            return t.compareBuild(e, r, n)
        })
    };
    t.rsort = function(e, n) {
        return e.sort(function(e, r) {
            return t.compareBuild(r, e, n)
        })
    };

    function _(e, t, n) {
        return g(e, t, n) > 0
    }

    function b(e, t, n) {
        return 0 > g(e, t, n)
    }

    function v(e, t, n) {
        return 0 === g(e, t, n)
    }

    function y(e, t, n) {
        return 0 !== g(e, t, n)
    }

    function E(e, t, n) {
        return g(e, t, n) >= 0
    }

    function S(e, t, n) {
        return 0 >= g(e, t, n)
    }

    function x(e, t, n, r) {
        switch (t) {
            case "===":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
            case "!==":
                return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
            case "":
            case "=":
            case "==":
                return v(e, n, r);
            case "!=":
                return y(e, n, r);
            case ">":
                return _(e, n, r);
            case ">=":
                return E(e, n, r);
            case "<":
                return b(e, n, r);
            case "<=":
                return S(e, n, r);
            default:
                throw TypeError("Invalid operator: " + t)
        }
    }

    function w(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof w) {
            if (!!t.loose === e.loose) return e;
            e = e.value
        }
        if (!(this instanceof w)) return new w(e, t);
        r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === T ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
    }
    t.gt = _, t.lt = b, t.eq = v, t.neq = y, t.gte = E, t.lte = S, t.cmp = x, t.Comparator = w;
    var T = {};

    function C(e, t) {
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), e instanceof C) return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new C(e.raw, t);
        if (e instanceof w) return new C(e.value, t);
        if (!(this instanceof C)) return new C(e, t);
        if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
                return this.parseRange(e.trim())
            }, this).filter(function(e) {
                return e.length
            }), !this.set.length) throw TypeError("Invalid SemVer Range: " + e);
        this.format()
    }

    function D(e, t) {
        for (var n = !0, r = e.slice(), i = r.pop(); n && r.length;) n = r.every(function(e) {
            return i.intersects(e, t)
        }), i = r.pop();
        return n
    }
    w.prototype.parse = function(e) {
        var t = this.options.loose ? o[u.COMPARATORLOOSE] : o[u.COMPARATOR],
            n = e.match(t);
        if (!n) throw TypeError("Invalid comparator: " + e);
        this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new p(n[2], this.options.loose) : this.semver = T
    }, w.prototype.toString = function() {
        return this.value
    }, w.prototype.test = function(e) {
        if (r("Comparator.test", e, this.options.loose), this.semver === T || e === T) return !0;
        if ("string" == typeof e) try {
            e = new p(e, this.options)
        } catch (e) {
            return !1
        }
        return x(e, this.operator, this.semver, this.options)
    }, w.prototype.intersects = function(e, t) {
        if (!(e instanceof w)) throw TypeError("a Comparator is required");
        if ((!t || "object" != typeof t) && (t = {
                loose: !!t,
                includePrerelease: !1
            }), "" === this.operator) return "" === this.value || (n = new C(e.value, t), A(this.value, n, t));
        if ("" === e.operator) return "" === e.value || (n = new C(this.value, t), A(e.semver, n, t));
        var n, r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
            i = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            a = this.semver.version === e.semver.version,
            o = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
            s = x(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
            u = x(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
        return r || i || a && o || s || u
    }, t.Range = C, C.prototype.format = function() {
        return this.range = this.set.map(function(e) {
            return e.join(" ").trim()
        }).join("||").trim(), this.range
    }, C.prototype.toString = function() {
        return this.range
    }, C.prototype.parseRange = function(e) {
        var t = this.options.loose;
        e = e.trim();
        var n = t ? o[u.HYPHENRANGELOOSE] : o[u.HYPHENRANGE];
        e = e.replace(n, M), r("hyphen replace", e), e = e.replace(o[u.COMPARATORTRIM], "$1$2$3"), r("comparator trim", e, o[u.COMPARATORTRIM]), e = (e = (e = e.replace(o[u.TILDETRIM], "$1~")).replace(o[u.CARETTRIM], "$1^")).split(/\s+/).join(" ");
        var i = t ? o[u.COMPARATORLOOSE] : o[u.COMPARATOR],
            a = e.split(" ").map(function(e) {
                return function(e, t) {
                    return r("comp", e, t), e = function(e, t) {
                        return e.trim().split(/\s+/).map(function(e) {
                            return function(e, t) {
                                r("caret", e, t);
                                var n = t.loose ? o[u.CARETLOOSE] : o[u.CARET];
                                return e.replace(n, function(t, n, i, a, o) {
                                    var s;
                                    return r("caret", e, t, n, i, a, o), O(n) ? s = "" : O(i) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : O(a) ? s = "0" === n ? ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + ".0 <" + (+n + 1) + ".0.0" : o ? (r("replaceCaret pr", o), s = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + "-" + o + " <" + (+n + 1) + ".0.0") : (r("no pr"), s = "0" === n ? "0" === i ? ">=" + n + "." + i + "." + a + " <" + n + "." + i + "." + (+a + 1) : ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0" : ">=" + n + "." + i + "." + a + " <" + (+n + 1) + ".0.0"), r("caret return", s), s
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("caret", e), e = function(e, t) {
                        return e.trim().split(/\s+/).map(function(e) {
                            return function(e, t) {
                                var n = t.loose ? o[u.TILDELOOSE] : o[u.TILDE];
                                return e.replace(n, function(t, n, i, a, o) {
                                    var s;
                                    return r("tilde", e, t, n, i, a, o), O(n) ? s = "" : O(i) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : O(a) ? s = ">=" + n + "." + i + ".0 <" + n + "." + (+i + 1) + ".0" : o ? (r("replaceTilde pr", o), s = ">=" + n + "." + i + "." + a + "-" + o + " <" + n + "." + (+i + 1) + ".0") : s = ">=" + n + "." + i + "." + a + " <" + n + "." + (+i + 1) + ".0", r("tilde return", s), s
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("tildes", e), e = function(e, t) {
                        return r("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
                            return function(e, t) {
                                e = e.trim();
                                var n = t.loose ? o[u.XRANGELOOSE] : o[u.XRANGE];
                                return e.replace(n, function(n, i, a, o, s, u) {
                                    r("xRange", e, n, i, a, o, s, u);
                                    var c = O(a),
                                        l = c || O(o),
                                        d = l || O(s);
                                    return "=" === i && d && (i = ""), u = t.includePrerelease ? "-0" : "", c ? n = ">" === i || "<" === i ? "<0.0.0-0" : "*" : i && d ? (l && (o = 0), s = 0, ">" === i ? (i = ">=", l ? (a = +a + 1, o = 0) : o = +o + 1, s = 0) : "<=" === i && (i = "<", l ? a = +a + 1 : o = +o + 1), n = i + a + "." + o + "." + s + u) : l ? n = ">=" + a + ".0.0" + u + " <" + (+a + 1) + ".0.0" + u : d && (n = ">=" + a + "." + o + ".0" + u + " <" + a + "." + (+o + 1) + ".0" + u), r("xRange return", n), n
                                })
                            }(e, t)
                        }).join(" ")
                    }(e, t), r("xrange", e), e = function(e, t) {
                        return r("replaceStars", e, t), e.trim().replace(o[u.STAR], "")
                    }(e, t), r("stars", e), e
                }(e, this.options)
            }, this).join(" ").split(/\s+/);
        return this.options.loose && (a = a.filter(function(e) {
            return !!e.match(i)
        })), a = a.map(function(e) {
            return new w(e, this.options)
        }, this)
    }, C.prototype.intersects = function(e, t) {
        if (!(e instanceof C)) throw TypeError("a Range is required");
        return this.set.some(function(n) {
            return D(n, t) && e.set.some(function(e) {
                return D(e, t) && n.every(function(n) {
                    return e.every(function(e) {
                        return n.intersects(e, t)
                    })
                })
            })
        })
    }, t.toComparators = function(e, t) {
        return new C(e, t).set.map(function(e) {
            return e.map(function(e) {
                return e.value
            }).join(" ").trim().split(" ")
        })
    };

    function O(e) {
        return !e || "x" === e.toLowerCase() || "*" === e
    }

    function M(e, t, n, r, i, a, o, s, u, c, l, d, f) {
        return t = O(n) ? "" : O(r) ? ">=" + n + ".0.0" : O(i) ? ">=" + n + "." + r + ".0" : ">=" + t, (t + " " + (s = O(u) ? "" : O(c) ? "<" + (+u + 1) + ".0.0" : O(l) ? "<" + u + "." + (+c + 1) + ".0" : d ? "<=" + u + "." + c + "." + l + "-" + d : "<=" + s)).trim()
    }
    C.prototype.test = function(e) {
        if (!e) return !1;
        if ("string" == typeof e) try {
            e = new p(e, this.options)
        } catch (e) {
            return !1
        }
        for (var t = 0; t < this.set.length; t++)
            if (function(e, t, n) {
                    for (var i = 0; i < e.length; i++)
                        if (!e[i].test(t)) return !1;
                    if (t.prerelease.length && !n.includePrerelease) {
                        for (i = 0; i < e.length; i++)
                            if (r(e[i].semver), e[i].semver !== T && e[i].semver.prerelease.length > 0) {
                                var a = e[i].semver;
                                if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0
                            } return !1
                    }
                    return !0
                }(this.set[t], e, this.options)) return !0;
        return !1
    };

    function A(e, t, n) {
        try {
            t = new C(t, n)
        } catch (e) {
            return !1
        }
        return t.test(e)
    }
    t.satisfies = A, t.maxSatisfying = function(e, t, n) {
        var r = null,
            i = null;
        try {
            var a = new C(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(function(e) {
            a.test(e) && (!r || -1 === i.compare(e)) && (i = new p(r = e, n))
        }), r
    };
    t.minSatisfying = function(e, t, n) {
        var r = null,
            i = null;
        try {
            var a = new C(t, n)
        } catch (e) {
            return null
        }
        return e.forEach(function(e) {
            a.test(e) && (!r || 1 === i.compare(e)) && (i = new p(r = e, n))
        }), r
    };
    t.minVersion = function(e, t) {
        e = new C(e, t);
        var n = new p("0.0.0");
        if (e.test(n)) return n;
        if (n = new p("0.0.0-0"), e.test(n)) return n;
        n = null;
        for (var r = 0; r < e.set.length; ++r) e.set[r].forEach(function(e) {
            var t = new p(e.semver.version);
            switch (e.operator) {
                case ">":
                    0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                case "":
                case ">=":
                    (!n || _(n, t)) && (n = t);
                    break;
                case "<":
                case "<=":
                    break;
                default:
                    throw Error("Unexpected operation: " + e.operator)
            }
        });
        return n && e.test(n) ? n : null
    };
    t.validRange = function(e, t) {
        try {
            return new C(e, t).range || "*"
        } catch (e) {
            return null
        }
    };
    t.ltr = function(e, t, n) {
        return k(e, t, "<", n)
    };
    t.gtr = function(e, t, n) {
        return k(e, t, ">", n)
    };

    function k(e, t, n, r) {
        switch (e = new p(e, r), t = new C(t, r), n) {
            case ">":
                i = _, a = S, o = b, s = ">", u = ">=";
                break;
            case "<":
                i = b, a = E, o = _, s = "<", u = "<=";
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (A(e, t, r)) return !1;
        for (var i, a, o, s, u, c = 0; c < t.set.length; ++c) {
            var l = t.set[c],
                d = null,
                f = null;
            if (l.forEach(function(e) {
                    e.semver === T && (e = new w(">=0.0.0")), d = d || e, f = f || e, i(e.semver, d.semver, r) ? d = e : o(e.semver, f.semver, r) && (f = e)
                }), d.operator === s || d.operator === u) return !1;
            if ((!f.operator || f.operator === s) && a(e, f.semver)) return !1;
            if (f.operator === u && o(e, f.semver)) return !1
        }
        return !0
    }
    t.outside = k, t.prerelease = function(e, t) {
        var n = f(e, t);
        return n && n.prerelease.length ? n.prerelease : null
    };
    t.intersects = function(e, t, n) {
        return e = new C(e, n), t = new C(t, n), e.intersects(t)
    };
    t.coerce = function(e, t) {
        if (e instanceof p) return e;
        if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
        var n, r = null;
        if ((t = t || {}).rtl) {
            for (;
                (n = o[u.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), o[u.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
            o[u.COERCERTL].lastIndex = -1
        } else r = e.match(o[u.COERCE]);
        return null === r ? null : f(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t)
    }
}