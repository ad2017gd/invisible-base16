const b16map = "\u2060\u2061\u2062\u2063\u2064\u2065\u2068\u2069\u206A\u206B\u206C\u206D\u206E\u206F\u200B\u200C";

module.exports = {
    num_base16e: (a) => {
        return a.toString(16).split("").map(x => b16map[parseInt(x, 16)]).join("");
    },
    num_base16d: (a) => {
        return parseInt(a.split("").map(x => b16map.indexOf(x).toString(16)).join(""), 16);
    },
    ascii_base16e: (a) => {
        return a.split("").map(x => x.charCodeAt() > 16 ? num_base16e(x.charCodeAt()) : (b16map[0] + num_base16e(x.charCodeAt()))).join("");
    },
    ascii_base16d: (a) => {
        return a.match(/.{1,2}/g).map(x => num_base16d(x)).map(x => String.fromCharCode(x)).join("");
    },
    utf8_base16e: (a) => {
        return a.split("").map(x => b16map[0].repeat(4 - x.charCodeAt().toString(16).length) + num_base16e(x.charCodeAt())).join("");
    },
    utf8_base16d: (a) => {
        return a.match(/.{1,4}/gu).map(x => num_base16d(x)).map(x => String.fromCharCode(x)).join("");
    }
}