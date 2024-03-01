function(t, e, s) {
    var r = {
            ECB: s("410720"),
            CBC: s("696347"),
            CFB: s("350066"),
            CFB8: s("418480"),
            CFB1: s("292065"),
            OFB: s("8954"),
            CTR: s("186043"),
            GCM: s("186043")
        },
        i = s("541412");
    for (var n in i) i[n].module = r[i[n].mode];
    t.exports = i
}