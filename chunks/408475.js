function(t, e, s) {
    var r, i = s("390493");
    r = s.g.process && s.g.process.browser ? "utf-8" : s.g.process && s.g.process.version ? parseInt(i.version.split(".")[0].slice(1), 10) >= 6 ? "utf-8" : "binary" : "utf-8", t.exports = r
}