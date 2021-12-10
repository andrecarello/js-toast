const mix = require("laravel-mix");

const SOURCE_PATH = "./src";
const DIST_PATH = "./dist";

mix.sass(SOURCE_PATH + "/toast.scss", DIST_PATH)
    .js(SOURCE_PATH + "/toast.js", DIST_PATH)