const invis = require('./index.js');

console.log("resuls are urlencoded!\n\n");
console.log("INTEGERS ", 30, "    " + escape(invis.num_base16e(30)), "                                                                " + invis.num_base16d(invis.num_base16e(30)));
console.log("ASCII    ", "miau", "  " + escape(invis.ascii_base16e("miau")), "                          " + invis.ascii_base16d(invis.ascii_base16e("miau")));
console.log("UTF8     ", "にゃー", escape(invis.utf8_base16e("にゃー")), invis.utf8_base16d(invis.utf8_base16e("にゃー")));

console.log("\n\nthe first and last result should be the same. if it is, this test succeded.");