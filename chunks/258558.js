function(e, t, n) {
    "use strict";
    var i, r, a, s, o, l, u;
    n.r(t), n("653041"), n("411104"), i = n.g, r = Date.now ? Date.now() : +new Date, a = i.performance || {}, s = [], o = {}, l = function(e, t) {
        for (var n = 0, i = s.length, r = []; n < i; n++) s[n][e] == t && r.push(s[n]);
        return r
    }, u = function(e, t) {
        for (var n, i = s.length; i--;)(n = s[i]).entryType == e && (void 0 === t || n.name == t) && s.splice(i, 1)
    }, a.now || (a.now = a.webkitNow || a.mozNow || a.msNow || function() {
        return (Date.now ? Date.now() : +new Date) - r
    }), a.mark || (a.mark = a.webkitMark || function(e) {
        var t = {
            name: e,
            entryType: "mark",
            startTime: a.now(),
            duration: 0
        };
        s.push(t), o[e] = t
    }), a.measure || (a.measure = a.webkitMeasure || function(e, t, n) {
        var i, r;
        if (void 0 !== n && void 0 === o[n]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
        if (void 0 !== t && void 0 === o[t]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
        i = o[t] ? o[t].startTime : 0, r = o[n] ? o[n].startTime : a.now(), s.push({
            name: e,
            entryType: "measure",
            startTime: i,
            duration: r - i
        })
    }), a.getEntriesByType || (a.getEntriesByType = a.webkitGetEntriesByType || function(e) {
        return l("entryType", e)
    }), a.getEntriesByName || (a.getEntriesByName = a.webkitGetEntriesByName || function(e) {
        return l("name", e)
    }), a.clearMarks || (a.clearMarks = a.webkitClearMarks || function(e) {
        u("mark", e)
    }), a.clearMeasures || (a.clearMeasures = a.webkitClearMeasures || function(e) {
        u("measure", e)
    }), i.performance = a, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
        return a
    })
}