const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const del = require("del");

function build() {
	return src(
		[
			"src/*.html",
			"src/css/style.min.css",
			"src/js/index.js",
			"src/fonts/**/*",
			"src/images/**/*",
		],
		{
			base: "src",
		}
	).pipe(dest("dist"));
}

function clearBuild() {
	return del("dist");
}

function server() {
	browserSync.init({
		server: {
			baseDir: "src/",
		},
	});
}

function styles() {
	return src("src/scss/style.scss")
		.pipe(scss({ outputStyle: "compressed" }))
		.pipe(concat("style.min.css"))
		.pipe(
			autoprefixer({
				overrideBrowserlist: ["last 10 version"],
				grid: "true",
			})
		)
		.pipe(dest("src/css"))
		.pipe(browserSync.stream());
}

function watcher() {
	watch(["src/scss/**/*.scss"], styles);
	watch(["src/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watch = watcher;
exports.server = server;
exports.clean = clearBuild;

exports.build = series(clearBuild, build);
exports.default = parallel(styles, server, watcher);
