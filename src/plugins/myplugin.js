class MyPlugin {
	apply(compiler) {
		// eslint-disable-next-line no-unused-vars
		compiler.hooks.done.tap('My Plugin', stats => {
			console.log('MyPlugin: done');
		});
	}
}

module.exports = MyPlugin;
