function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        default: function() {
            return E
        }
    });
    var O = A("160679"),
        T = A("429030");
    A("246663");
    let _ = new T.default({
        initialLocale: O.parse(document.cookie).locale,
        getMessages: I => A("826507")("./messages/".concat(I).replace("./messages/", "./")),
        getLanguages: () => A("499172")
    });
    _.addListener("locale", I => {
        document.cookie = "locale=".concat(I, ";path=/")
    });
    var E = _
}