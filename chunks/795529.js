function(e, _, E) {
    var t = {
        "./bg.jsona": "148174",
        "./cs.jsona": "466579",
        "./da.jsona": "172063",
        "./de.jsona": "293151",
        "./el.jsona": "195418",
        "./en-GB.jsona": "777640",
        "./es-419.jsona": "523730",
        "./es-ES.jsona": "291795",
        "./fi.jsona": "164426",
        "./fr.jsona": "289264",
        "./hi.jsona": "577719",
        "./hr.jsona": "259159",
        "./hu.jsona": "351000",
        "./id.jsona": "413177",
        "./it.jsona": "633783",
        "./ja.jsona": "227938",
        "./ko.jsona": "723473",
        "./lt.jsona": "372022",
        "./nl.jsona": "573174",
        "./no.jsona": "283869",
        "./pl.jsona": "404567",
        "./pt-BR.jsona": "939538",
        "./ro.jsona": "169574",
        "./ru.jsona": "596631",
        "./sv-SE.jsona": "631576",
        "./th.jsona": "621940",
        "./tr.jsona": "694447",
        "./uk.jsona": "200621",
        "./vi.jsona": "896055",
        "./zh-CN.jsona": "102258",
        "./zh-TW.jsona": "486738"
    };

    function o(e) {
        if (!E.o(t, e)) return Promise.resolve().then(function() {
            var _ = Error("Cannot find module '" + e + "'");
            throw _.code = "MODULE_NOT_FOUND", _
        });
        var _ = t[e];
        return E.el(_).then(function() {
            return E.t(_, 19)
        })
    }
    o.keys = function() {
        return Object.keys(t)
    }, o.id = "795529", e.exports = o
}