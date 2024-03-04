function(e, t, n) {
    var r = {
            ECB: n("410720"),
            CBC: n("696347"),
            CFB: n("350066"),
            CFB8: n("418480"),
            CFB1: n("292065"),
            OFB: n("8954"),
            CTR: n("186043"),
            GCM: n("186043")
        },
        i = n("541412");
    for (var o in i) i[o].module = r[i[o].mode];
    e.exports = i
}