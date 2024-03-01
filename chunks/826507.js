function(I, N, A) {
    var O = {
        "./bg": "652617",
        "./bg.json": "652617",
        "./cs": "136399",
        "./cs.json": "136399",
        "./da": "166226",
        "./da.json": "166226",
        "./de": "107944",
        "./de.json": "107944",
        "./el": "978838",
        "./el.json": "978838",
        "./en-GB": "384193",
        "./en-GB.json": "384193",
        "./en-US": "876779",
        "./en-US.js": "876779",
        "./es-ES": "580895",
        "./es-ES.json": "580895",
        "./fi": "72952",
        "./fi.json": "72952",
        "./fr": "699940",
        "./fr.json": "699940",
        "./hi": "922509",
        "./hi.json": "922509",
        "./hr": "293200",
        "./hr.json": "293200",
        "./hu": "254957",
        "./hu.json": "254957",
        "./id": "886044",
        "./id.json": "886044",
        "./it": "903422",
        "./it.json": "903422",
        "./ja": "44867",
        "./ja.json": "44867",
        "./ko": "865240",
        "./ko.json": "865240",
        "./lt": "828806",
        "./lt.json": "828806",
        "./nl": "379380",
        "./nl.json": "379380",
        "./no": "262207",
        "./no.json": "262207",
        "./pl": "697596",
        "./pl.json": "697596",
        "./pt-BR": "132974",
        "./pt-BR.json": "132974",
        "./ro": "499395",
        "./ro.json": "499395",
        "./ru": "135786",
        "./ru.json": "135786",
        "./sv-SE": "119037",
        "./sv-SE.json": "119037",
        "./th": "398352",
        "./th.json": "398352",
        "./tr": "461697",
        "./tr.json": "461697",
        "./uk": "842498",
        "./uk.json": "842498",
        "./vi": "26384",
        "./vi.json": "26384",
        "./zh-CN": "460288",
        "./zh-CN.json": "460288",
        "./zh-TW": "391977",
        "./zh-TW.json": "391977"
    };

    function T(I) {
        return A(_(I))
    }

    function _(I) {
        if (!A.o(O, I)) {
            var N = Error("Cannot find module '" + I + "'");
            throw N.code = "MODULE_NOT_FOUND", N
        }
        return O[I]
    }
    T.id = '"826507"', T.keys = function() {
        return Object.keys(O)
    }, T.resolve = _, I.exports = T
}